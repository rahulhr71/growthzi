import React from 'react'
import '../styles/Footer.css'
import { assets } from '../assets/assets'
export default function Footer() {
  return (
    <div className='footer'>
       <div className="top-div">
        <div className="innerDiv"><img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
        <div className="innerDiv"></div>
        <div className="innerDiv"></div>
       </div>
      
    </div>
  )
}
