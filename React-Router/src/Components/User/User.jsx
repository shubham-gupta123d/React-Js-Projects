import React from 'react'
import { useParams } from 'react-router-dom'    //dynamic segments k liye parms hooks use krte hai jab aapko dynamically change krna ho content than use useparms

function User() {
  const {userid} = useParams();
  return (
    <div className='bg-gray-500 text-white tex-3xl p-4'>
       <center> <b>User:{userid}</b></center>
    </div>
  )
}

export default User
