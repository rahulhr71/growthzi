import '../styles/Home.css';
import background from '../assets/image.png'
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
export default function Home() {
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
        <div>&gt;</div>

     </div>
            </header>
                <div className='margin-10'>
                    <BookingForm/>
                </div>

        </div>
    );
}
function DiscoverButton() {
    return (
        <div className="discover-btn">
            <span className="text">Discover Rooms &gt; </span>
        </div>
    );
}
