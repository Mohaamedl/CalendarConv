import generateIcsFile from './generateIcsFile';

const generateCancellationIcs = (events) => {
  const cancellationUrl = generateIcsFile(events, 'CANCELLED');
  if (cancellationUrl) {
    const link = document.createElement('a');
    link.href = cancellationUrl;
    link.download = 'cancel_events.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

export default generateCancellationIcs; 