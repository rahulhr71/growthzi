import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
export default function Home2() {
    return (
        <div className="hero-section">
            <header className='my-section '>

                <Navbar /><br /><br />
                <h2 className="main-title poppins-light">best place to relax & enjoy</h2>
                <h1 className='header-text forum-regular'>A Luxurious Way To <br />
                    Enjoy Your Life</h1>
                <div className='text-center'>
                    <DiscoverButton />
                </div>
                <div className='flex arrows'>
                    <div className='rounded'><img src={assets.arrow} alt="" /></div>
                    <div className='rounded2 rounded'><img src={assets.arrow} alt="" /></div>
                </div>
            </header>
            
            <Footer />
            <div></div>
        </div>
    );
  
}
function DiscoverButton() {
    return (
        <div className="discover-btn1">
            <span className="text1">Discover Rooms &gt; </span>
        </div>
    );
}

