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
    const [btnColor, setBtnColor] = useState('#000000')
    const [url, setUrl] = useState(null)
    const [style, setStyle] = useState("fill")
    const [size, setSize] = useState('medium')
    const [btnText, setBtnText] = useState(null)
    const [button,setButton]=useState(true)
    const handleForm = () => {
        console.log(btnText);
        console.log(url);
        console.log(size);
        console.log(btnColor);
        console.log(style);
        setOpen(false)
        
        setButton(true)
    }
    const [open, setOpen] = useState(false)
    return (

        <div className="hero-section">
            <header className='my-section '>

                <Navbar /><br /><br />
                <h2 className="main-title poppins-light">best place to relax & enjoy</h2>
                <h1 className='header-text forum-regular'>A Luxurious Way To <br />
                    Enjoy Your Life</h1>
                <div className='text-center'>
                    {button && <button className='btn' onClick={() => {
                        setOpen(true)
                    }}>+ Add Button</button>}
                    {
                        open && (
                            <div className="pop">
                                <label htmlFor="url">Enter URL of button </label>
                                <input type="text" name="url" id="url" onChange={(e) => setUrl(e.target.value)} />
                                <br /><br />
                                <label htmlFor="style">Button style</label>
                                <select name="fill" id="fill" onChange={(e) => setStyle(e.target.value)}>
                                    <option value="fil">Fill</option>
                                    <option value="border">Border</option>
                                </select>
                                <br /><br />
                                <label htmlFor="button-text">Button Text</label>
                                <input type="text" onChange={(e) => setBtnText(e.target.value)} />
                                <br /><br />
                                <label htmlFor="color">Colour</label>
                                <input type="color" name="color" id="color" onChange={(e) => setBtnColor(e.target.value)} />
                                <br /><br />
                                <label htmlFor="button size">Button Size</label>
                                <select name="size" id="size" onChange={(e) => { setSize(e.target.value) }}>
                                    <option value="small">Small</option>
                                    <option value="medium">Medium</option>
                                    <option value="large">Large</option>
                                </select><br /><br />
                                <button className='save-button' onClick={() => handleForm()}>Save Button</button>
                                <p>Cancel</p>
                            </div>
                        )
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



