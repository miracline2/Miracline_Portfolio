import React, { useState } from 'react';
import { AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { tittle } from '../../styles/Styles';
import ContactForm from '../../common/Contact';

const ResumeViewer: React.FC = () => {
  const resumeUrl = '/Miracline.A.pdf';
  const [downloading, setDownloading] = useState(false);

  // Add your actual URLs here
  const socialLinks = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourprofile'
  };

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

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className={`${tittle} mb-4`}>Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
      <div className="w-full max-w-lg">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold">
            Connect With Me
          </h3>
          <div className="w-16 h-0.5 bg-purple-600 mx-auto mt-2"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
          <button
            onClick={() => openLink(socialLinks.github)}
            className="flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 md:px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-0 flex-1 sm:flex-initial sm:min-w-[180px] md:min-w-[200px]"
          >
            <FaGithub size={20} />
            <span className="whitespace-nowrap">GitHub Profile</span>
            <FaExternalLinkAlt size={14} className="opacity-70 flex-shrink-0" />
          </button>

          <button
            onClick={() => openLink(socialLinks.linkedin)}
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 md:px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-0 flex-1 sm:flex-initial sm:min-w-[180px] md:min-w-[200px]"
          >
            <FaLinkedin size={20} />
            <span className="whitespace-nowrap">LinkedIn Profile</span>
            <FaExternalLinkAlt size={14} className="opacity-70 flex-shrink-0" />
          </button>
          
        </div>
         <div className="w-full md:w-auto mt-5 ">
    <ContactForm />
  </div>
      </div>

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