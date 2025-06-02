import React, { useState } from 'react';
import { AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';

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
    <div className="h-screen flex flex-col items-center justify-center px-4 ">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">My Resume</h2>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-md">
        <button
          onClick={openInNewTab}
          className="flex items-center cursor-pointer justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 w-full"
        >
          <AiOutlineEye size={20} /> View Resume
        </button>

        <button
          onClick={downloadResume}
          className="flex items-center cursor-pointer justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 w-full disabled:opacity-50"
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
    </div>
  );
};

export default ResumeViewer;
