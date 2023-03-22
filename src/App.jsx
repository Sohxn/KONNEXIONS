import React from 'react';
import './css/index.css'; 
//Tabs 
import Navbar from './Components/Navbar'
import Team from './Tabs/Team' //The layout 
import Footer from './Components/Footer'


const App = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <Navbar/>
      <Team/>
      <Footer/>
    </div> 
  )
}

export default App;