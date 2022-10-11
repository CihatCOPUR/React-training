import "./Main.scss"

import React from 'react'
import {data} from "../../helper/data"

export const Main = () => {
    
  return (
   <div className="card-container">
    {
        data.map((item)=>{
            return (
                <div className="cards">
                    <h1>{item.title}</h1>
                    <img src={item.image} alt="" />
                </div>
            )
        })
    }
   </div>
  )
}
export default Main