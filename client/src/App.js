import './App.css';
import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routes from './Routes.js';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
