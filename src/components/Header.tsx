import { DarkTheme, LightTheme } from "../styles/Styles"
import MenuIcon from '../assets/Icons/Menu.svg'
import { ThemeContext } from "../contextAPI/ThemeContext";
import { useContext, useState } from "react";
import NavBar from "../common/NavBar/NavBar";
import { Link } from "react-scroll";
import MobileNav from "../common/NavBar/MobileNav";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    
    return (
        <header className={`${theme === 'Dark' ? 
            DarkTheme.disPlayHeader : LightTheme.disPlayHeader} 
            fixed top-0 w-full z-50 flex items-center justify-between px-4 py-3`}>
            
            <Link 
                to="about"
                className="font-bold text-xl md:text-4xl cursor-pointer">
                Miracline
            </Link>
            
            <div className="hidden md:block">
                <NavBar/>
            </div>
            
            <div className="md:hidden">
                <img 
                    src={MenuIcon} 
                    alt="menu" 
                    className={`w-10 h-10 cursor-pointer transition-transform duration-300 ${
                        isMenuOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                    onClick={toggleMenu} 
                />
            </div>
            
          
            <div className={`
                absolute top-full left-0 w-full md:hidden
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen 
                    ? 'opacity-100 translate-y-0 visible' 
                    : 'opacity-0 -translate-y-4 invisible'
                }
                ${theme === 'Dark' ? DarkTheme.backGround : LightTheme.backGround}
                shadow-lg border-t border-opacity-20
                ${theme === 'Dark' ? 'border-white' : 'border-black'}
            `}>
                <MobileNav toggleMenu={toggleMenu} />
            </div>
        </header>
    )
}

export default Header