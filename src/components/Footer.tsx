import { MdDarkMode } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <button
        aria-label="Toggle Theme"
        className="bg-gray-800 text-white dark:bg-white dark:text-black p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MdDarkMode className="w-6 h-6" />
      </button>
    </footer>
  );
};

export default Footer;
