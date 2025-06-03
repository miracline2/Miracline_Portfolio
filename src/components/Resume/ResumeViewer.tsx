import React, { useState } from 'react';
import { AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';
import { tittle } from '../../styles/Styles';

import SocialLinks from './SocialLinks';

const ResumeViewer: React.FC = () => {
  const resumeUrl = '/Miracline.A.pdf';
  const [downloading, setDownloading] = useState(false);


  const openInNewTab = () => {
    window.open(resumeUrl, '_blank');
  };

  const downloadResume = () => {
    setDownloading(true);

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Miracline_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000); 
  };

 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" id='contact'>
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className={`${tittle} mb-4`}>Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-5">
          Download my resume or view it online. You can also connect with me through my professional profiles.
        </p>
      </div>

      {/* Resume Actions */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg mb-8">
        <button
          onClick={openInNewTab}
          className="flex items-center cursor-pointer justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 w-full shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          <AiOutlineEye size={20} /> View Resume
        </button>

        <button
          onClick={downloadResume}
          className="flex items-center cursor-pointer justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-full transition duration-300 w-full disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
          disabled={downloading}
        >
          {downloading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <AiOutlineDownload size={20} />
          )}
          {downloading ? 'Downloading...' : 'Download Resume'}
        </button>
      </div>

      {/* Social Links Section */}
     <SocialLinks/>

      {/* Additional Info Section */}
      <div className="mt-8 text-center max-w-md">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Feel free to reach out for collaboration opportunities or just to connect!
        </p>
      </div>
    </div>
  );
};

export default ResumeViewer;