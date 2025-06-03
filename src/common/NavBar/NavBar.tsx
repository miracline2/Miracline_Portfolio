import { Link } from "react-scroll"
import { navLinks } from ".."
import { useState } from "react"

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('')

  return (
    <nav className="flex flex-row gap-8">
      {navLinks.map((link, index) => (
        <div key={index}>
          <Link
            to={link.id}
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={(to) => setActiveSection(to)}
            className={`cursor-pointer hover:text-purple-600 transition-all duration-300 pb-1 border-b-2 ${
              activeSection === link.id 
                ? 'border-purple-600 text-purple-600' 
                : 'border-transparent'
            }`}
          >
            {link.title}
          </Link>
        </div>
      ))}
    </nav>
  )
}

export default NavBar