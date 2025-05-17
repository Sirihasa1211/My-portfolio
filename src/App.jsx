import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from '../src/components/Home/home';
import About from '../src/components/About/About';
import Contact from '../src/components/Contact/Contactpage';
import Projects from '../src/components/Project/Projects_info';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import React from 'react';
import Preloader from './components/Pre';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="App">
    <BrowserRouter>
    <Preloader load={load} />
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;