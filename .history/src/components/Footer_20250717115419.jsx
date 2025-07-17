import React from 'react'
import '../styles/Footer.css'
import { assets } from '../assets/assets'
export default function Footer() {
  return (
    <div className='footer'>
       <div className="top-div">
        <div className="innerDiv"><img src={assets.logo} alt="" /></div>
        <div className="innerDiv"></div>
        <div className="innerDiv"></div>
       </div>
      
    </div>
  )
}
