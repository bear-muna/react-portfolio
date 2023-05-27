import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import React from 'react';

function App() {
  return (
    <Router>
      <NavBar />
      <hr />
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
      <hr/>
      <h2>FOOTER</h2>
    </Router>
  );
}

export default App;
