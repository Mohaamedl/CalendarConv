const generateIcsFile = (events, status = 'CONFIRMED') => {
    /*

    Must generate an .ics file from the events list given and the status 
    
    */
   
    if (events.length === 0) return;

    try {
      let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//ClassScheduleCalendar//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH'
      ].join('\r\n');

      const dstChangeDate = new Date(2023, 9, 27); // time change 

      events.forEach(event => {
        const [year, month, day, hour, minute] = event.start;
        
        
        const eventDate = new Date(year, month - 1, day, hour, minute);
        
        // adjust for summer time
        if (eventDate < dstChangeDate) {
          eventDate.setHours(eventDate.getHours() - 1);
        }

        const startDate = eventDate;
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
          `UID:${event.uid}`,
          `DTSTAMP:${formatDate(new Date())}`,
          `DTSTART:${formatDate(startDate)}`,
          `DTEND:${formatDate(endDate)}`,
          `SUMMARY:${event.title}`,
          `DESCRIPTION: ${event.summary}`, 
          `STATUS:${status}`,
          'SEQUENCE:0',
          'CLASS:PUBLIC',
          'TRANSP:OPAQUE',
          'END:VEVENT'
        ].join('\r\n');
      });

      icsContent += '\r\nEND:VCALENDAR';

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      return url;
    } catch (error) {
      console.error('Error creating ICS:', error);
      alert('Error creating ICS. Please try again.');
      return null;
    }
  };
export default generateIcsFile;