import React from 'react'
import '../styles/Footer.css'
import { assets } from '../assets/assets'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="top-div">
                <div className="innerDiv"><img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div>
                <div className="innerDiv"><h4>USEFUL LINKS
                    <div className="links">
                         <p>HOME</p>
                        <p>ABOUT</p>
                        <p>SERVICE</p>
                        <p>ROOM</p>
                    </div>

                </h4></div>
                <div className="innerDiv">
                    <h3>SUBSCRIBE</h3>
                    <p>Don’t miss to subscribe our news, kindly fill the form bellow</p>
                    <br />
                    <div className='input'> 
                        <input type="text" placeholder='YOUR EMAIL HERE' /><span>&gt;   </span>
                    </div>
                    
                </div>
            </div>
            <div className="middle">
                <div className='line'></div>
                <div><img src={assets.media} alt="" /></div>
                <div className='line'></div>
            </div>
            <div className="middle">
                <div className=''>© 2025 Imperial Grand Hotel. All Rights Reserved.</div>
                <div></div>
                <div className=''><span>Privacy Policy</p><p>Terms of Use</p></p>
            </div>

        </div>
    )
}
