import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation

// Navbar component
export const Navbar = () => {
  return (
    <div>
      <nav className="bg-black p-3"> {/* Main navigation bar with a black background and padding */}
        <div className="container mx-auto flex justify-start items-center"> {/* Container to center the content */}
          {/* Link to the Home page */}
          <Link to="/" className="text-white text-xl font-bold mr-4 hover:text-gray-300">
            Home
          </Link>
          {/* Link to the Auth page */}
          <Link to="/auth" className="text-white text-xl font-bold hover:text-sky-700">
            Auth
          </Link>
        </div>
      </nav>
    </div>
  );
};
