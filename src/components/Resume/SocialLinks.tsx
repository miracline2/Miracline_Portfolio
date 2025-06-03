import { FaExternalLinkAlt, FaGithub, FaLinkedin } from "react-icons/fa"
import { socialLinks } from "../../common"
import ContactForm from "../../common/Contact"


const SocialLinks = () => {

     const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
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
  )
}

export default SocialLinks
