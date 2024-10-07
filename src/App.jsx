import { Navbar } from "./components/navbar"; // Import the Navbar component for navigation
import { Auth } from './pages/auth'; // Import the Auth page component for authentication
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components for routing
import Home from "./pages/home"; // Import the Home page component

function App() {
  return (
    <Router> {/* Wrap the application in the Router to enable routing */}
      <Navbar /> {/* Render the Navbar component at the top of the app */}
      <Routes> {/* Define the routes for the application */}
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Route for the authentication page */}
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App; // Export the App component as the default export
