import { DarkTheme, LightTheme } from "../styles/Styles"
import MenuIcon from '../assets/Icons/Menu.svg'
import { ThemeContext } from "../contextAPI/ThemeContext";
import { useContext } from "react";
import NavBar from "../common/NavBar/NavBar";
import { Link } from "react-scroll";

const Header = () => {
    const { theme } = useContext(ThemeContext);
    return (
      <header className={`${  theme==='Dark'?
        DarkTheme.disPlayHeader : LightTheme.disPlayHeader} fixed top-0 w-full z-50 flex items-center justify-between px-4`}>
  <Link 
   to="about"
  
  className="font-bold text-xl md:text-4xl cursor-pointer">Miracline</Link>
  <div  className="hidden md:block">
    <NavBar/>
  </div>
  <div className="md:hidden">
    <img src={MenuIcon} alt="menu" className="w-10 h-10 cursor-pointer" />
  </div>
</header>

    )
}

export default Header
