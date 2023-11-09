import { Link } from "react-router-dom"
import logo from "../../../assets/logov.svg"

import React from 'react'

export default function Logo() {
  return (
    <div className="logo">
      <Link to={'/'} > <img src={logo} alt=""  /></Link> 
    </div>
  )
}
