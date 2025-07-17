import '../styles/Home.css';
import background from '../assets/image.png'
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import RoomSection from '../components/RoomSection';
import ServicesSection from '../components/ServicesSection';
import ReviewSection from '../components/ReviewSection';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Editing from '../components/Editing';
import { useState } from 'react';
import { useText } from '../context/textContext';
export default function Home() {
    const [open, setOpen] = useState(false)
    return (

        <div className="hero-section">
            <header className='my-section '>

                <Navbar /><br /><br />
                <h2 className="main-title poppins-light">best place to relax & enjoy</h2>
                <h1 className='header-text forum-regular'>A Luxurious Way To <br />
                    Enjoy Your Life</h1>
                <div className='text-center'>
                    <button className='btn' onClick={() => {
                        setOpen(true)
                    }}>+ Add Button</button>
                    {
                        open&&<AddButton />
                    }
                </div>
                <div className='flex arrows'>
                    <div className='rounded'><img src={assets.arrow} alt="" /></div>
                    <div className='rounded2 rounded'><img src={assets.arrow} alt="" /></div>
                </div>
            </header>
            <div className='margin-10'>
                <BookingForm />
            </div>
            <RoomSection />
            <ServicesSection />
            <ReviewSection />
            <Team />
            <Footer />
            {


            }

        </div>
    );
}
function AddButton() {
    return (
        <div className="pop">
          <label htmlFor="url">Enter URL of button </label>
        </div>
    );
}
