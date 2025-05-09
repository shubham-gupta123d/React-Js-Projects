import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Card from './components/card'


function App() {
const current_theme = localStorage.getItem('current_theme');
const [theme, setTheme] = useState(current_theme? current_theme : 'light' );

useEffect(()=>{
localStorage.setItem('current_theme', theme);
},[theme])

  return (
    <>
    <div className={`container ${theme}`} >
    <Navbar theme ={theme} setTheme = {setTheme}/>
    
     <div className="cards">
      <Card title= "card 1" description= "card 1 desc" />
      <Card title= "card 2" description= "card 2 desc" />
      <Card title= "card 3" description= "card 3 desc" />
      <Card title= "card 4" description= "card 4 desc" />
    </div> 
    </div>
   
    <Footer/>
    
    
    </>
  )
}

export default App
