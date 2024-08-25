export const Navbar = () => {
    return (
      <nav className="w-full h-16 bg-white shadow-md border rounded-xl mt-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-full">
          {/* Logo with Shadow Animation */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-gray-800 transition-shadow duration-500 ease-in-out hover:shadow-xl"
            >
              YourLogo
            </a>
          </div>
  
          {/* Nav Links with Shadow Animation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-indigo-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-indigo-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-indigo-200"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-800 transition-shadow duration-500 ease-in-out font-bold hover:shadow-xl hover:shadow-indigo-200"
            >
              Contact
            </a>
          </div>
  
          {/* CTA Button with Shadow Animation */}
          <div className="hidden md:block">
            <a
              href="#get-started"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:shadow-xl hover:shadow-indigo-300 transition-shadow duration-500 ease-in-out"
            >
              Get Started
            </a>
          </div>
  
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-indigo-600 focus:outline-none focus:text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };
  