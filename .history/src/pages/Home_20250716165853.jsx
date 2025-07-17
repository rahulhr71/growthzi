import '../styles/Home.css';
import background from '../assets/image.png'
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
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
                <div>
                    <BookingForm/>
                </div>

            </header>

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
function BookingForm() {
  return (
    <div className="booking-container">
      <div className="field">
        <label>Check In</label>
        <div className="input-box">
          <input type="date" />
          <span className="icon">📅</span>
        </div>
      </div>

      <div className="field">
        <label>Check Out</label>
        <div className="input-box">
          <input type="date" />
          <span className="icon">📅</span>
        </div>
      </div>

      <div className="field">
        <label>Room</label>
        <div className="input-box">
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <span className="icon">▾</span>
        </div>
      </div>

      <div className="check-button">
        <span>Check Availability</span>
        <span className="arrow">›</span>
      </div>
    </div>
  );
}