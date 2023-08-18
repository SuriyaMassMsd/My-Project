import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import Suriya from './compo/car';
// import reportWebVitals from './reportWebVitals';
// import Sum from './compo/Suriya';
// import App from './App';
import Appage from './App';
// import Navbar from './compo/Navbar';




// function  Num() {

//   return(
//     <div>
//   <Appage  name ="suriya"  ag ={13} email = " suiya@gmail.com"/> 
//   <Appage  name ="jnsc"  ag ={132} email = " suiya@gmaijsjxl.com"/> 
//   <Appage  name ="suriyzkkzkza"  ag ={123} email = " suiya@gmail.com"/> 
//   </div>

//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Appage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
