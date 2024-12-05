
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

        //console.log("Extracted Text:", text);
        const extractedEvents = parsePdfText(text);
        //console.log("Parsed Events:", extractedEvents); 
        setEvents(extractedEvents);
        const icsUrl = generateIcsFile(extractedEvents);
        setIcsFile(icsUrl);
      } catch (error) {
        console.error('Error extracting PDF data:', error);
        alert('Error extracting PDF data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsArrayBuffer(pdfFile);
  };


  export default {extractPdfData,setIcsFile, SetIsLoading,setEvents};