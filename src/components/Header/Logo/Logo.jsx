import { Link } from "react-router-dom"
import logo from "../../../assets/logov.svg"

import React from 'react'

export default function Logo() {
  return (
    <div className="flex justify-center items-center">
      <Link to={'/'} > <img src={logo} alt=""  className="h-48 w-18"/></Link> 
    </div>
  )
}
