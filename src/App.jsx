import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf';
import React, { useCallback, useState } from 'react';
import { FaCalendarAlt, FaDownload, FaFileUpload, FaGithub, FaCopy } from 'react-icons/fa';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [icsFile, setIcsFile] = useState(null);
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDownloadMessage, setShowDownloadMessage] = useState(false);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  }, []);

  const extractPdfData = async () => {
    if (!pdfFile) return;

    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const pdfData = new Uint8Array(e.target.result);
        const pdfjsDoc = await pdfjsLib.getDocument({ data: pdfData }).promise;
        const numPages = pdfjsDoc.numPages;
        let text = '';

        for (let i = 1; i <= numPages; i++) {
          const page = await pdfjsDoc.getPage(i);
          const content = await page.getTextContent();
          const textItems = content.items.map(item => item.str);
          text += textItems.join(' ') + '\n';
        }

        console.log("Extracted Text:", text);
        const extractedEvents = parsePdfText(text);
        console.log("Parsed Events:", extractedEvents); 
        setEvents(extractedEvents);
        generateIcsFile(extractedEvents);
      } catch (error) {
        console.error('Error extracting PDF data:', error);
        alert('Error extracting PDF data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  const parsePdfText = (text) => {
    const lines = text.split('\n')[0].split(/\s+(?=\d{1,2}\s+| Abrv)/);
    
    const events = [];
    let aulaTitles = {};
    let year, month;

    
    const dateMatch = text.match(/(\w+)\s+(\d{4})/);
    if (dateMatch) {
      const monthNamesPT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      month = monthNamesPT.indexOf(dateMatch[1].toLowerCase()) + 1;
      year = parseInt(dateMatch[2]);
    }


    lines.forEach((line) => {
      console.log(line)
      const titleMatch = line.match(/(\d{4})\s+(.+?)\s+\(\d{4}\)/);
      if (titleMatch) {
        const code = titleMatch[1];
        const title = titleMatch[2].trim();
        aulaTitles[code] = title;
      }
    });
    console.log(aulaTitles)

    lines.forEach((line) => {
      const eventMatch = line.match(/^(\d{1,2})\s+((\d{2}:\d{2}\s+\d{4}\s*)+)/);
      if (eventMatch) {
        const currentDay = eventMatch[1].padStart(2, '0');
        const timeCodes = eventMatch[2].trim().split(/\s+/);

        for (let i = 0; i < timeCodes.length; i += 2) {
          const time = timeCodes[i];
          const code = timeCodes[i + 1];
          const title = aulaTitles[code] || `Aula ${code}`;
          const formattedTitle = `${title} (${code})`;

          events.push({
            title: formattedTitle,
            start: [
              year,
              month,
              parseInt(currentDay, 10),
              ...time.split(':').map(Number)
            ],
            duration: { hours: 1, minutes: 0 },
          });
        }
      }
    });

    return events;
  };

  const generateIcsFile = (events) => {
    if (events.length === 0) return;

    try {
      let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//ClassScheduleCalendar//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH'
      ].join('\r\n');

      events.forEach(event => {
        const [year, month, day, hour, minute] = event.start;
        
        
        const startDate = new Date(year, month - 1, day, hour, minute);
        const endDate = new Date(startDate.getTime() + event.duration.hours * 60 * 60 * 1000);

        
        const formatDate = (date) => {
          return date.getFullYear() +
            ('0' + (date.getMonth() + 1)).slice(-2) +
            ('0' + date.getDate()).slice(-2) + 'T' +
            ('0' + date.getHours()).slice(-2) +
            ('0' + date.getMinutes()).slice(-2) +
            ('0' + date.getSeconds()).slice(-2);
        };

        icsContent += [
          '\r\nBEGIN:VEVENT',
          `DTSTART:${formatDate(startDate)}`,
          `DTEND:${formatDate(endDate)}`,
          `SUMMARY:${event.title}`,
          'END:VEVENT'
        ].join('\r\n');
      });

      icsContent += '\r\nEND:VCALENDAR';

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      setIcsFile(url);
    } catch (error) {
      console.error('Error creating ICS:', error);
      alert('Error creating ICS. Please try again.');
    }
  };

  const handleDownload = () => {
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 10000);
  };

  const copyEventsToClipboard = () => {
    const eventsText = events.map(event => 
      `${event.title}\nDate: ${event.start.slice(0, 3).join('-')}\nTime: ${event.start.slice(3).join(':')}\n`
    ).join('\n');
    navigator.clipboard.writeText(eventsText);
    alert('Events copied to clipboard!');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-yellow-50 to-brown-100 flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-7xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl px-4 py-10 sm:p-20">
              <h1 className="text-4xl font-bold mb-8 text-center text-brown-800">Event Schedule Converter</h1>
              
              <div className="mb-6">
                <label className="flex items-center justify-center w-full px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg tracking-wide uppercase border border-green cursor-pointer hover:bg-green-700 transition duration-300 ease-in-out">
                  <FaFileUpload className="mr-2" />
                  <span className="text-base leading-normal">Select PDF</span>
                  <input type='file' className="hidden" onChange={handleFileChange} accept=".pdf" />
                </label>
              </div>

              <button
                onClick={extractPdfData}
                disabled={!pdfFile || isLoading}
                className="w-full px-4 py-2 bg-yellow-500 text-brown-800 rounded-lg shadow-lg uppercase tracking-wide font-semibold text-sm flex items-center justify-center disabled:opacity-50 transition duration-300 ease-in-out hover:bg-yellow-600"
              >
                {isLoading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <FaCalendarAlt className="mr-2" />
                    <span>Extract and Create .ICS</span>
                  </>
                )}
              </button>

              {events.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-3 text-brown-800">Extracted Events:</h2>
                  <div className="max-h-96 overflow-y-auto pr-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {events.map((event, index) => (
                        <div key={index} className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
                          <p className="font-semibold text-brown-800">{event.title}</p>
                          <p className="text-green-700">{event.start.slice(0, 3).join('-')} {event.start.slice(3).join(':')}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-lg font-semibold text-brown-800">Total Events: {events.length}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {icsFile && (
        <div className="fixed bottom-4 right-4 z-10 flex flex-col items-end">
          <a
            href={icsFile}
            download="calendar.ics"
            className="px-4 py-2 bg-brown-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-brown-600 shadow-lg flex items-center mb-2"
            onClick={handleDownload}
          >
            <FaDownload className="mr-2" />
            Download .ics
          </a>
          <button
            onClick={copyEventsToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-blue-600 shadow-lg flex items-center"
          >
            <FaCopy className="mr-2" />
            Copy Events
          </button>
        </div>
      )}
      
      {showDownloadMessage && (
        <div className="fixed bottom-20 right-4 z-10 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md max-w-md">
          <p className="font-bold">Download Complete!</p>
          <p>For mobile users: Open the .ics file with your calendar app and add all events.</p>
          <p>For PC users: If you can't open the .ics file directly, try importing it into your calendar application or use the "Copy Events" button to manually add the events.</p>
        </div>
      )}
      
      <footer className="text-center py-4 text-brown-600 text-sm bg-transparent">
      <p>&copy; {new Date().getFullYear()} Schedule Calendar App. Licensed under the MIT License.</p>
        <p className="mt-2">
          Developed by Mohamed Haddadi | 
          <a 
            href="https://github.com/Mohaamedl/CalendarConv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-brown-800 hover:text-brown-600 ml-1 inline-flex items-center"
          >
            <FaGithub className="mr-1" />
            Open source project on GitHub
          </a>
        </p>

      </footer>
    </div>
  );
}

export default App;