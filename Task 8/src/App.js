import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes ,Route}  from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Gift from './pages/Gift'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <Router>
    <Navbar />

    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/About' element={ <About />} />
      <Route path='/Contact' element={ <Contact />} />
      <Route path='/Feedback' element={ <Feedback />} />
      <Route path='/Gift' element={ <Gift />} />
    </Routes>

    </Router>
   
  );
}

export default App;
