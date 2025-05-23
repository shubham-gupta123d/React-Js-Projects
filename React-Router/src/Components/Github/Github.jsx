// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"     /* iss hook se api fetch kar skte hai it's best Optimization Technique*/

function Github() {
    const data = useLoaderData ()
//     const [data, setData] = useState([])
//     useEffect(()=>{
//    fetch('https://api.github.com/users/shubham-gupta123d')     iss tarike se v data fetch kar skte hai
//    .then(response => response.json())
//    .then(data =>{
//     console.log(data);
//     setData(data)
//    })
//     }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/shubham-gupta123d')
    return response.json()
}
