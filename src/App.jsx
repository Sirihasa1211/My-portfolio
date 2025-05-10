import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './components/Intro';
import Contact from './components/Contactpage';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;