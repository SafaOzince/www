import logo from './components/images/logo-removebg-preview.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';

import Footer from './components/layout/Footer';
import WhatsappChat from './components/layout/WhatsappChat';




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
      <WhatsappChat/>
    </Router>
  );
}

export default App;
