import React from 'react'
import cardStyle from "./card.module.css"
import Items from "../items/Items"
import {languages} from "../../helpers/data"

const Card = () => {


  return (
    <div className={cardStyle['container']}>
        <h1 className={cardStyle["title"]}>Languages</h1>
        <div className={cardStyle["cards"]}>
        {languages.map((item, index) => {
            return(
                <Items key={index} item={item}/>
            )
        })}
        </div>
        
    </div>
  )
}

export default Card