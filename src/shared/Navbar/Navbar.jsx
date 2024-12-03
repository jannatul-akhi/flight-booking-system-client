import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#78B3CE] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">GoAero</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/flight" className="hover:text-gray-300">Flights</Link>
            <Link to="/booking" className="hover:text-gray-300">Booking</Link>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </div>
          <div className="hidden lg:block">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</Link>
            <Link to="/flight" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Flights</Link>
            <Link to="/booking" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Booking</Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Dashboard</Link>
          </div>
        </div>

        
      )}
    {isOpen && (
      <div className='md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3'>
        <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Login</Link>
      </div>
    )}
    </nav>
  );
};

export default Navbar;
