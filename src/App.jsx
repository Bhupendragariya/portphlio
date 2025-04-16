import React from 'react';
import { Link } from 'react-scroll';
import HomePage from './componant/HomePage';
import AboutPage from './componant/AboutPage';
import ServicePage from './componant/ServicePage';
import PortfolioPage from './componant/PortfolioPage';
import ContactPage from './componant/ContactPage';
import Footer from './componant/Footer'; 

function App() {
  return (
    <div>
      <nav className="bg-gray-800 p-4 fixed w-full top-0 z-100">
        <ul className="flex justify-center space-x-8">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-400"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-400"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-20">
        <HomePage />
        <AboutPage />
        <ServicePage />
        <PortfolioPage />
        <ContactPage />
      </div>

      {/* Footer added here */}
      <Footer />
    </div>
  );
}

export default App;
