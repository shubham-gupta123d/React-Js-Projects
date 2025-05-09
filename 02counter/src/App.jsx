import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter, setCounter]= useState(0)

  // let counter =15
const addValue =() =>{
 
//  counter = counter+1;
if (counter == 20){
  setCounter( counter= 20)
}
else{
  setCounter(counter+1)
}
//  console.log("clicked", counter);
}

const removevalue =()=>{
  if (counter == 0){
    setCounter( counter= 0)
  }
  else{
    setCounter(counter-1)
  }
  // console.log ("remove",counter);
}

  return (
    <>
  <h1>Shubham or chai</h1>
  <h2>Counter value {counter}</h2>
  <button
  onClick={addValue}>Add Value{counter}</button><br />
  <button onClick={removevalue}>Remove value{counter}</button>
  <p>footer:{counter}</p>
    </>
  )
}

export default App
