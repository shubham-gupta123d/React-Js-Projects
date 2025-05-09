import React from 'react'
import { data } from './App'
import { data1 } from './App'

function ChildC() {
  return (
    <div>
      <data.Consumer>
        {
            (  name)=>{
                return(
                  
                    <data1.Consumer>
                        {
                            (gender)=>{
                                return(
<h1> my name is {name} & my gender is {gender} </h1>
                                )
                            }
                        }
                    </data1.Consumer>
                )
            }
        }
      </data.Consumer>
    </div>
  )
}

export default ChildC
