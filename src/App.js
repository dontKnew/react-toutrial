import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Api from './Pages/Api';

function App() {
  return (
    <>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
       </Routes>
    </>
  );
}

export default App;
