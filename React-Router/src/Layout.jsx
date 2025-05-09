import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'  // it's a outlet Hook

function layout() {
  return (
  <>
  <Header/>
  <Outlet/>   
   {/* jab hum outlet dete hai to react router dom k taraf se hm nesting use kr skte hai inside a header section */}
  <Footer/>
  </>
  )
}

export default layout
