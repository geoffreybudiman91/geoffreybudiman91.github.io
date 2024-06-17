import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import SideButtons from './components/SideButtons';
import BackToTop from './components/BackToTop';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
      <SideButtons />
      <BackToTop />
    </div>
  );
};

export default App;