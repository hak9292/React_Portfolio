import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
    <Header />
    <Navbar />
      <Homepage />
      <Footer>
      </Footer>
    </div>

  );
}

export default App;
