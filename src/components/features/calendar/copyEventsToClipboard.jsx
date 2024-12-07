const copyEventsToClipboard = (events) => {
  const eventsText = events.map(event => 
    `${event.title}\nDate: ${event.start.slice(0, 3).join('-')}\nTime: ${event.start.slice(3).join(':')}\n`
  ).join('\n');
  navigator.clipboard.writeText(eventsText);
  alert('Events copied to clipboard!');
};

export default copyEventsToClipboard;
