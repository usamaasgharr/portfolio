import React from 'react';
import "./App.css"

import backgroundImg from './assets/images/background.jpg'; // Import your background image
import dottedOverlay from './assets/images/back.gif'; // Import your dotted overlay image
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Navbar from "./Components/navbar/navbar"

import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Resume from "./Pages/Resume/Resume"
import PageNotFound from "./Pages/PageNotFound/PageNotFound"
import Footer from './Components/footer/footer';
import Projects from './Pages/Projects/Projects';


const App = () => {
  return (
    <div className="container-fluid text-white">
      <div className="background" style={{ backgroundImage: `url(${backgroundImg})` }} />
      <div className="overlay" style={{ backgroundImage: `url(${dottedOverlay})` }} />
      <div className="content">
        
        <BrowserRouter>

          <Navbar />
        <div className="container padding">
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/projects" element={<Projects />} ></Route>
            <Route path="/resume" element={<Resume />} ></Route>
            
            <Route path="*" element={<PageNotFound />} ></Route>
          </Routes>
          <Footer />
          </div>
          
          

          
        </BrowserRouter>
        
        
      </div>
    </div>
  );
};

export default App;
