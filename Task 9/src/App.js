// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter ,Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';



function App() {
  return ( 
  
    <BrowserRouter>

      <Navbar />
      
      
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About /> } />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/feedback' element={<Feedback/> } />
      </Routes>

      </BrowserRouter>
    
  );
}

export default App;
