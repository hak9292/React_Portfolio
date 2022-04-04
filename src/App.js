import React from 'react';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
    <Navbar />
      {/* <Homepage /> */}
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
