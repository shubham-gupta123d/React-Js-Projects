import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext'

function login() {
    const [userName, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e) =>{
     e.preventDefault()
     setUser({userName, password})
    }
  return (
    <div className='login-container'>
      <h2>Login</h2>
      <input type="text" 
      value={userName}
      onChange={(e)=>
       setUsername(e.target.value)
      }
      placeholder='userName' />
      {" "}
      <input type="text" 
        value={password}
        onChange={(e)=>
         setPassword(e.target.value)
        }
      placeholder='passWord' />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default login
