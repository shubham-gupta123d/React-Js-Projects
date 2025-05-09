import { useState } from "react"


function App() {
  const [color, setColor] = useState("Olive")

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
      <div className="flex flex warp justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() =>setColor("red")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "red"}}
        >Red</button>
        <button
         onClick={() =>setColor("blue")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Blue"}}
        >Blue</button>
        <button
         onClick={() =>setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Green"}}
        >Green</button>
        <button
         onClick={() =>setColor("pink")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "pink"}}
        >Pink</button>
        <button
         onClick={() =>setColor("Brown")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Brown"}}
        >brown</button>
        <button
         onClick={() =>setColor("Black")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
        style={{backgroundColor: "Black"}}
        >black</button>
      </div>
    </div>
   </div>
  )
}

export default App
