import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar />
      <hr />
      <Routes>
        <Route path='/' element={ <About/> } />
        <Route path='/portfolio' element={ <Portfolio/> } />
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
      <hr/>
      <h2>FOOTER</h2>
    </Router>
  );
}

export default App;
