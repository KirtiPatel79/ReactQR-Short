import { useState } from 'react';

// import './styles.css';
import QRCode from 'react-qr-code';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { MdDonutLarge } from 'react-icons/md';

function QrCodeGenerator(props) {
  // Your Code Start below.
  const [qrCodeValue, setQrCodeValue] = useState('https://reactplay.io');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setQrCodeValue(e.target.value);
  }

  function handleDownload() {
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
  }

  return (
    <>
      <div className="play-details">
    
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="flex flex-col justify-center items-center gap-4 mt-10 mb-10">
            <div id="qrContain" style={{ padding:20,backgroundColor: '#f8fb3c',borderRadius:'8px', width: 'fit-content' }}>
              <QRCode
                size={256}
                bgColor={"#f8fb3c"}
                fgColor={"#1c00a8"}
                includeMargin={true}
                value={
                  qrCodeValue === undefined || qrCodeValue === ''
                    ? 'https://youtube.com'
                    : qrCodeValue
                }
              />
            </div>
            <input
            class="bg-gray-200 appearance-none border-4 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="qrValue"
              placeholder="Enter Text Here"
              type="text"
              onChange={(e) => handleChange(e)}
            />
            <button id="download-btn" className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 m-10 rounded-md hover:bg-blue-500 hover:text-white" onClick={handleDownload}>
              Download
              {loading ? <MdDonutLarge /> : ''}
            </button>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default QrCodeGenerator;