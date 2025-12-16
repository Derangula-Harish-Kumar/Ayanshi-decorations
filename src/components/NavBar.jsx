import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <div>
       <nav className="fixed top-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden" >
                {/* <Sparkles className="w-6 h-6 text-pink-500" /> */}
                <img src={logo} alt="Logo" className=" object-cover" />

                
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">Ayanshi Wedding Planner</div>
                <div className="text-xs opacity-90">Creating Magical Moments</div>
              </div>

              
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Home</Link>
              <a href="#services" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Services</a>
              <a href="#gallery" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Gallery</a>
              <a href="#contact" className="text-white hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
