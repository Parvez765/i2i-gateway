// src/PDFViewer.js
import React, { useState } from 'react';
import { PDFViewer, Document, Page } from '@react-pdf/renderer';

const MyDocument = ({ pdfUrl, numPages }) => (
    
  <Document file={pdfUrl}>
    {Array.from(new Array(numPages), (_, index) => (
      <Page key={index + 1} pageNumber={index + 1} />
    ))}
  </Document>
);

const PDFViewerComponent = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState();

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    console.log(`Document loaded successfully with ${numPages} page(s).`);
  };



  return (
    <div >
      {numPages ? (
        <PDFViewer width="1000" height="600">
          <MyDocument pdfUrl={pdfUrl} numPages={numPages} />
        </PDFViewer>
      ) : (
        'Loading PDF...'
      )}
    </div>
  );
};

export default PDFViewerComponent;
