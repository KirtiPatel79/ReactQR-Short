import UrlShortner from './UrlShortner';

import React, { useState } from 'react';
import QrCodeGenerator from './QRCodeGen';

function App() {
  const [currentPage, setCurrentPage] = useState('urlShortener');
  return (
    <div className='h-screen justify-center items-center bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-opacity-25'>
    <div className='flex flex-row justify-center items-center '>
      {/* Button to navigate to UrlShortner page */}
      <button className={`mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white ${currentPage === 'urlShortener' ? 'bg-blue-500 text-yellow-300' : ''}`} onClick={() => setCurrentPage('urlShortener')}>Url Shortener</button>
      
      {/* Button to navigate to QrCodeGenerator page */}
      <button className={`mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white ${currentPage === 'qrCodeGenerator' ? 'bg-blue-500 text-yellow-300' : ''}`} onClick={() => setCurrentPage('qrCodeGenerator')}>QR Code Generator</button>
    </div>

    {/* Render components based on the current page */}
    {currentPage === 'urlShortener' && <UrlShortner />}
    {currentPage === 'qrCodeGenerator' && <QrCodeGenerator />}
  </div>
  );
}

export default App;
