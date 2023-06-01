import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './utils/reset.css';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import React from 'react';
import './utils/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div className='hero'></div>
      <Routes>
        <Route path='/' element={ <About/> } />
        <Route path='/portfolio' element={ <Portfolio/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/resume' element={ <Resume/> } />
      </Routes>
      <hr/>
      <Footer />
    </Router>
  );
}

export default App;
