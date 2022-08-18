import React, { useState } from 'react'
import itemStyle from "./items.module.css"

const Items = ({item}) => {
  const [hover, sethover] = useState(true)

  const {name, img, options} = item
  const handleChange = () => {
    sethover(!hover)
  }

  return (
    <div className={itemStyle["container"]} onMouseEnter={handleChange} onMouseLeave={handleChange}>
      {hover ? (
        <div>
        <img className={itemStyle["logo"]} src={img} alt="" />
        <h3 className={itemStyle["title"]}>{name}</h3>
      </div>
      ):(
        <ul className={itemStyle["list"]}>
          {options.map((option, index) => {
            return(
              <li key={index}>{option}</li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Items