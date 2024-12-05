import React, { useCallback, useState } from 'react';
import { FaCalendarAlt, FaCalendarTimes, FaCopy, FaDownload, FaFileUpload, FaGithub } from 'react-icons/fa';
import extractPdfData from './features/calendar/ExtractPdfData';
import generateIcsFile from './features/calendar/GenerateIcsFile';
import generateCancellationIcs from './features/calendar/GenerateCancellationIcs';
import copyEventsToClipboard from './features/calendar/CopyEventsToClipboard';
import FileInput from './common/FileInput';
import EventList from './common/EventList';

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

  const handleDownload = () => {
    setShowDownloadMessage(true);
    setTimeout(() => setShowDownloadMessage(false), 10000);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-green-100 via-yellow-50 to-brown-100 flex flex-col">
      <div className="flex-grow flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-7xl">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl px-4 py-10 sm:p-20">
              <h1 className="text-4xl font-bold mb-8 text-center text-brown-800">Event Schedule Converter</h1>
              
              <FileInput onChange={handleFileChange} />

              <button
                onClick={() => extractPdfData(pdfFile, setIsLoading, setEvents, setIcsFile)}
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

              <EventList events={events} />

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
            onClick={() => generateCancellationIcs(events)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg transition duration-300 ease-in-out hover:bg-red-600 shadow-lg flex items-center mb-2"
          >
            <FaCalendarTimes className="mr-2" />
            Generate Cancellation .ics
          </button>
          <button
            onClick={() => copyEventsToClipboard(events)}
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