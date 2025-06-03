import { Link } from "react-scroll"
import { navLinks } from ".."
import { useContext } from "react";
import { ThemeContext } from "../../contextAPI/ThemeContext";

interface IMobNavProps{
toggleMenu:() => void
}

const MobileNav = ({ toggleMenu }:IMobNavProps) => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div className="w-full py-6 px-4">
            <nav className="flex flex-col gap-6 items-center">
                {navLinks.map((link, index) => (
                    <div 
                        key={index} 
                        className={`
                            transform transition-all duration-300 ease-in-out
                            animate-fade-in-up
                        `}
                        style={{
                            animationDelay: `${index * 100}ms`,
                            animationFillMode: 'both'
                        }}
                    >
                        <Link
                            to={link.id}
                            spy={true}
                            smooth={true}
                            duration={500}
                            onClick={toggleMenu} 
                            className={`
                                cursor-pointer 
                                transition-all duration-300 
                                pb-2 px-4 py-2 rounded-lg
                                text-lg font-medium
                                hover:scale-105 hover:shadow-md
                                ${theme === 'Dark' 
                                    ? 'hover:bg-purple-900 hover:text-purple-300 text-white' 
                                    : 'hover:bg-purple-100 hover:text-purple-700 text-gray-800'
                                }
                                active:scale-95
                            `}
                        >
                            {link.title}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default MobileNav