import './App.css';
import Carousels from './Compo/Carousel';
import Chennai from './Compo/Loc1';
import Navb from './Compo/Navbar';
import {BrowserRouter} from 'react-router-dom'
import Hogenakkal from './Compo/Loc10'
import Kodaikanal from './Compo/Loc2'
import Madurai from './Compo/Loc3'
import Kumbakonam from './Compo/Loc4'
import Theni from './Compo/Loc5'
import Rameshwaram from './Compo/Loc6'
import Ooty from './Compo/Loc7'
import Kaniyakumari from './Compo/Loc8'
import Yercaud from './Compo/Loc9'

function App() {
  return (
  < BrowserRouter>
  <Navb/>
  <Carousels/>
  <Chennai/>
  <Kodaikanal/>
  <Madurai/>
  <Kumbakonam />
  <Theni />
  < Rameshwaram />
  < Ooty />
  < Kaniyakumari/>
  < Yercaud />
  <Hogenakkal/>
 
  </BrowserRouter>
  );
}

export default App;
