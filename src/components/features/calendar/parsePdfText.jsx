import createSecureId from "./securedID";
const parsePdfText = (text) => {
    const lines = text.split('\n')[0].split(/\s+(?=\d{1,2}\s+| Abrv)/);
    
    const events = [];
    let aulaTitles = {};
    let year, month;

    const dateMatch = text.match(/(\w+)\s+(\d{4})/); //  matching the dates format
    if (dateMatch) {
      const monthNamesPT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      month = monthNamesPT.indexOf(dateMatch[1].toLowerCase()) + 1; // 
      year = parseInt(dateMatch[2]);
    }

    lines.forEach((line) => {
      const titleMatch = line.match(/(\d{4})\s+(.+?)\s+\(\d{4}\)/);
      if (titleMatch) {
        const code = titleMatch[1];
        const title = titleMatch[2].trim();
        const prof_info = titleMatch.input.match(/['(']\d{4}[')']\s{2,5}[A-ZÀ-Ý][a-zà-ý]+ [A-ZÀ-Ý][a-zà-ý]+ ['(for']{4}\d{4}[')]/mg)[0].split(/\s/); // extract prof. information: name and its number
   
        aulaTitles[code] = [title, prof_info.slice(3,5).join(' '),prof_info[5].split(/['()']+/).join('')];
      }
    });

    lines.forEach((line) => {
      const eventMatch = line.match(/^(\d{1,2})\s+((\d{2}:\d{2}\s+\d{4}\s*)+)/);
      if (eventMatch) {
        const currentDay = eventMatch[1].padStart(2, '0');
        const timeCodes = eventMatch[2].trim().split(/\s+/);

        let currentEvent = null;

        for (let i = 0; i < timeCodes.length; i += 2) {
          const time = timeCodes[i];
          const code = timeCodes[i + 1];
          const title = aulaTitles[code][0] || `Aula ${code}`;
          const for_name = aulaTitles[code][1] || `Aula ${code}`;
          const formattedTitle = `${title} (${code})`;
          const formador =  `Formador/a ${for_name}`;
          const summary = formador + "  Número de formador/a: " + `${aulaTitles[code][2]}`


          const [hour, minute] = time.split(':').map(Number);
          const PRIME = 773765232421533317138566700190990858957957133;
          const eventId_num = PRIME*year + PRIME*month + PRIME*parseInt(currentDay, 10) + PRIME*hour + PRIME*minute + PRIME*code;
          const secureEventId = createSecureId(eventId_num);
          if (currentEvent && currentEvent.title === formattedTitle && 
              currentEvent.start[2] === parseInt(currentDay, 10) &&
              currentEvent.start[3] + currentEvent.duration.hours === hour) {
            // Extend the duration of the current event
            currentEvent.duration.hours += 1;
          } else {
            // Start a new event
            if (currentEvent) {
              events.push(currentEvent);
            }
            currentEvent = {
              title: formattedTitle,
              start: [year, month, parseInt(currentDay, 10), hour, minute],
              duration: { hours: 1, minutes: 0 },
              summary: summary,
              uid: `${year}${month}${currentDay}${hour}${minute}-${secureEventId}`
            };
          }
        }

        // Add the last event
        if (currentEvent) {
          events.push(currentEvent);
        }
      }
    });     

    return events;
  };


  export default parsePdfText;