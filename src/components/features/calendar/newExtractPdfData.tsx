import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import parsePdfText from './parsePdfText';
import generateIcsFile from './generateIcsFile';

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

async function  ExtractPdfData(pdfFile, setIsLoading, setEvents, setIcsFile)
{
    if(!pdfFile) return;
    setIsLoading(true);

}