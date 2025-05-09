import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid " alt="" width="315"    style ={{border : "2px solid red"}} />
     
        <h1>{props.title} </h1>
        <p>{props.description}</p>
      
    </div>
  )
}

export default Card
