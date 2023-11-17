
import { useState,useRef  } from 'react';
import axios from 'axios';  
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import QRCode from 'react-qr-code';
function UrlShortner(props) {
   
  const [userInput, setUserInput] = useState('');
  const [shortenedLink, setShortenedLink] = useState('');
  const [error, setError] = useState(null);
  
  const handleSubmit = async () => {

    try {
      setShortenedLink('');
      const response = await axios.get(`https://tinyurl.com/api-create.php?url=${userInput}`);
      if (response.data) {
        toast('URL Shortened successfully!', {
          position: 'top-center',
          type: 'success',
          autoClose: 1500
        });
        setShortenedLink(response.data);
        setError(null);
      } else {
        setError(response.data.error);
        setShortenedLink(null);
      }
    } catch (e) {
      toast('Error please enter a valid link!', {
          position: 'top-center',
          type: 'error',
          autoClose: 1500
        });
      setError('An error occurred. Please try again later.');
      setShortenedLink(null);
    }
  };
  

  const copyTextToClipboard = (text) => {
    if (!shortenedLink) {
      toast('Please shorten a URL first !', {
        position: 'top-center',
        type: 'error',
        autoClose: 1500
      });
      setError('Please shorten a URL first.');
      return;
    }
    const textarea = document.createElement('textarea');
    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    try {
      document.execCommand('copy');
      toast('Link Copied To Clipboard', {
        position: 'top-center',
        type: 'success',
        autoClose: 2000
      });
    } catch (err) {
      setError('Failed to copy text: ', err);
    } finally {
      document.body.removeChild(textarea);
    }
  };
  const [qrCodeVisible, setQRCodeVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleGenerateQRCode = () => {
    if (!shortenedLink) {
      toast('Please shorten a URL first.!', {
        position: 'top-center',
        type: 'error',
        autoClose: 1500
      });
      setError('Please shorten a URL first.');
      return;
    }
    setQRCodeVisible(true);
};
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
   
      
          <ToastContainer />
          <div className="mt-20  h-fit flex justify-center  ">
            <div className=" text-center">
              <h1 className=" text-2xl font-medium text-blue-500 mb-4">
                Sample <span className=" text-purple-600 font-bold">URL Shortener</span>
              </h1>
              <div>
                <input
                  className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
                  placeholder="Enter link to be shortened"
                  type="url"
                  value={userInput}
                  onChange={(e) => {
                    setUserInput(e.target.value);
                  }}
                />
                <button
                  class="mt-5 ms-4 group relative  overflow-hidden rounded-lg  text-lg shadow"
                  onClick={handleSubmit}
                  disabled={shortenedLink}
                >
                  <a href="#_" class="relative inline-flex items-center justify-start h-12 w-48 py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Shorten Link</span>
</a>
                </button> 
                
              </div>
              <div className="mt-5">
                {error && <div className="text-red-500 mb-2">{error}</div>}
                <div className="relative px-4 py-2 bg-white shadow-lg rounded-xl  bg-clip-padding bg-opacity-60 border border-gray-200 text-slate-500">
                  {shortenedLink ? shortenedLink : 'Shorten An URL First'}
                </div>
                <button
                
                  className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white"
                  onClick={() => copyTextToClipboard(shortenedLink)}
                  // disabled={!shortenedLink}
                >
                  Copy URL to Clipboard
                </button>   
                <>
                <button className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white" onClick={handleGenerateQRCode} >Generate QR Code</button>
                {qrCodeVisible && <div className=' py-5 flex flex-col justify-center items-center '> 
                <QRCode id='qrContain' value={shortenedLink} 
                bgColor={"#f8fb3c"}
                fgColor={"#1c00a8"} 
                size={180} 
                style={{  backgroundColor: '#f8fb3c' ,padding:20,height: 'auto', width: 'fit-content', borderRadius:'8px'
                  }} />
                <button 
                  className="mt-5 border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md hover:bg-blue-500 hover:text-white"
                  onClick={handleDownload}
                  >
                  Download QR
                </button>  
                </div>}
                
                </>
               
              </div>
            </div>
          </div>
        
      
    </>
  );
}

export default UrlShortner;