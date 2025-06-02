
import { useContext } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { ThemeContext } from "../contextAPI/ThemeContext";
import { DarkTheme, LightTheme } from "../styles/Styles";


const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
 

  return (
    <footer className="fixed bottom-4 right-4 z-50">
      <button
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className={` ${theme === 'Dark' ? LightTheme.backGround : DarkTheme.backGround} cursor-pointer p-3 rounded-full shadow-lg hover:scale-110 transition-transform`}
      >
        {
          theme==='Dark' ?( <MdDarkMode className="w-6 h-6" />) : (<MdLightMode className="w-6 h-6" />)

        }
       
      </button>
    </footer>
  );
};

export default Footer;
