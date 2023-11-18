import { useState } from 'react';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { MdDonutLarge } from 'react-icons/md';

function QrCodeGenerator(props) {
 
  const [qrCodeValue, setQrCodeValue] = useState('https://kirtipatel79.github.io/ReactQR-Short');
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  function handleChange(e) {
    setQrCodeValue(e.target.value);
  }

  function handleDownload(e) {
    if(e){
      setLoading(true);
    htmlToImage
      .toJpeg(document.querySelector('#qrContain'), {
        quality: 1
      })
      .then((dataUrl) => {
        download(dataUrl, 'qrcode.jpeg');
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    }else{
      toast('Please Enter Text !', {
        position: 'top-center',
        type: 'error',
        autoClose: 1500,
        className: 'm-3',
      });
    }

  }

  return (
    <>
       <ToastContainer />
          <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-10">
            <div id="qrContain" style={{ padding:20,backgroundColor: '#f8fb3c',borderRadius:'8px', width: 'fit-content' }}>
              <QRCode
                size={256}
                bgColor={"#f8fb3c"}
                fgColor={"#1c00a8"}
                includeMargin={true}
                value={
                  qrCodeValue === undefined || qrCodeValue === ''
                    ? 'https://kirtipatel79.github.io/ReactQR-Short'
                    : qrCodeValue
                }
              />
            </div>
            <input
            class="bg-gray-200 appearance-none border-4 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            // value={inputValue}
              placeholder="Enter Text Here"
              type="text"
              onChange={(e) => handleChange(e)}
              
            />
            <button id="download-btn" className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 m-10 rounded-md hover:bg-blue-500 hover:text-white" onClick={handleDownload} disabled={!qrCodeValue}>
              Download
              {loading ? <MdDonutLarge /> : ''}
            </button>
          </div>
         
    </>
  );
}

export default QrCodeGenerator;