import "./Main.scss"

import React from 'react'
import {data} from "../../helper/data"
import Card from "./Card"

export const Main = () => {
    
  return (
   <div className="card-container">
    {
        data.map((item,index)=>{
            return (
                <div className="cards">
                    
                    <h1><Card {...item} key={index} /></h1>
                    
                </div>
            )
        })
    }
   </div>
  )
}
export default Main