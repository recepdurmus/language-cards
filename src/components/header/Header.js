import React from 'react'
import headerStyle from "./header.module.css"
import reactLogo from "../../assets/react.svg"


const Header = () => {
  return (
    <div className={headerStyle['container']}>
      <img className={headerStyle['logo']} src={reactLogo} alt="" />
    </div>
  )
}

export default Header