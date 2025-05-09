import { createContext } from "react"
import ChildA from "./ChildA"


const data = createContext();
const data1 = createContext();

function App() {

const name = 'geeta kumari'
const gender = 'female'
  return (
    <>
     
<data.Provider value ={name}>
  <data1.Provider value = {gender}>
  
<ChildA/>
</data1.Provider>
</data.Provider>


       
      
    </>
  )
}

export default App
export {data}
export {data1}

 