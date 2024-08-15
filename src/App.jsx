
import { Navbar } from "./components/navbar";
import { Auth } from './pages/auth';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
