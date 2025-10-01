import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        />
        <Route
          path="/contact"
          element={<Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        />
            <Route
          path="/about"
          element={<About isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
        />
      </Routes>
    </Router>
  );
}

export default App;