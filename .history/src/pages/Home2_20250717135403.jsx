import React from 'react'
import { assets } from '../assets/assets';
import '../styles/Home.css'
import '../styles/Home2.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
export default function Home2() {
    return (
        <div className="hero-section">
            <header className='my-section my-section2 '>

                <Navbar />
                <h2 className="_404">404</h2>
                <h1 className='header-text forum-regular subheading'>Oops!! Something Is Missing</h1>
                <p className='sorry'>Sorry But The Page You Are Looking  For Does Not Exist, Have Been Removed, Name <br />Changed Or Is Temporarily Unavailable</p>
                <div className='text-center'>
                    <DiscoverButton />
                </div>
                
            </header>
            
            <Footer />
            <div></div>
        </div>
    );
  
}
function DiscoverButton() {
    return (
        <div className="discover-btn1 discover-btn2">
            <span className="text1">Discover Rooms &gt; </span>
        </div>
    );
}

