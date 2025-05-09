
import Login from './components/Login'
import Profile from './components/profile'
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
  

  return (
    
    <UserContextProvider>
      <h1>Login Form</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
