import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Contact from './pages/Contactpage';
import Projects from './components/Project';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;