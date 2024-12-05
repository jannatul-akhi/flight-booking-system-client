import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // For navigation to the Feedback page

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content p-6">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h3 className="text-lg font-bold mb-2">Why Choose Us?</h3>
            <p>
              We offer a seamless flight booking experience, combining convenience with security. Our platform connects you to top airlines worldwide, ensuring the best prices and reliable services.
            </p>
            <p className="mt-2">
              Whether you are planning a vacation or a business trip, trust us to get you to your destination with ease and comfort.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: support@flightbooking.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Flight Lane, City, Country</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Flight Booking System. All rights reserved.
          </p>
          <Link to="/feedback" className="text-blue-500 hover:underline">
            Give us your Feedback
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
