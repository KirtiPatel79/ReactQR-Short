import UrlShortner from './UrlShortner';

import React, { useState } from 'react';
import QrCodeGenerator from './QRCodeGen';

function App() {
  const [currentPage, setCurrentPage] = useState('urlShortener');
  return (
    <div className='h-screen justify-center items-center bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-opacity-25'>
    <div className='flex flex-wrap justify-center items-center '>
     
      <button className={`mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white ${currentPage === 'urlShortener' ? 'bg-blue-500 text-yellow-300' : ''}`} onClick={() => setCurrentPage('urlShortener')}>Url Shortener</button>
      
    
      <button className={`mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white ${currentPage === 'qrCodeGenerator' ? 'bg-blue-500 text-yellow-300' : ''}`} onClick={() => setCurrentPage('qrCodeGenerator')}>QR Code Generator</button>
      <button onClick={() => window.open('https://github.com/KirtiPatel79/ReactQR-Short', '_blank')} class="mt-5  ml-4 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-lg px-5 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 " >

<svg class="w-5 h-5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
</svg>
Source

</button>
<button onClick={() => window.open('https://www.linkedin.com/in/patel-kirti-a57483214', '_blank')} class="mt-5  ml-4 text-white bg-[#0077b5] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 font-medium rounded-lg text-lg px-5 py-2 text-center inline-flex items-center " >

<svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-5 w-5 me-2"
    fill="currentColor"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
Connect
</button>


    </div>

    {/* Render components based on the current page */}
    {currentPage === 'urlShortener' && <UrlShortner />}
    {currentPage === 'qrCodeGenerator' && <QrCodeGenerator />}
  </div>
  );
}

export default App;
