import '../styles/Home.css';
import background from '../assets/Image.png'
import { assets } from '../assets/assets';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import RoomSection from '../components/RoomSection';
import ServicesSection from '../components/ServicesSection';
import ReviewSection from '../components/ReviewSection';
import Team from '../components/Team';
import Footer from '../components/Footer';
import Editing from '../components/Editing';
import { useState, useRef, useEffect } from 'react';
import { useText } from '../context/textContext';
import axios from 'axios';
export default function Home() {
    const btnRef = useRef()
    const [count, setCount] = useState(0)
    const [btnColor, setBtnColor] = useState('#000000')
    const [url, setUrl] = useState(null)
    const [btnstyle, setStyle] = useState("fill")
    const [size, setSize] = useState('medium')
    const [btnText, setBtnText] = useState("")
    const [button, setButton] = useState(true)
    const [btnValue, setBtnValue] = useState('+ Add Button')
    const [edited, setEdited] = useState(false)
    const handleForm = () => {
        setOpen(false)
        setBtnValue(btnText)
        const dt={
            "name":btnValue
        }
        axios.post("http://localhost:3000/button",dt).then((r)=>{
            console.log(r);
            
        }).catch((e)=>{console.log(e);
        })
    }
    const handleEdit=()=>{
        setOpen(true)
    }
    const handleCancel=()=>{
       window.location.reload();
    }
    const handleClick = () => {
        window.open(url, "_blank");
    };
    useEffect(() => {
        btnRef.current.style.minWidth = "30px"
        if (btnstyle === 'fill' && count > 1) {
            btnRef.current.style.backgroundColor = btnColor;
            setBtnValue(btnText)
            btnRef.current.style.borderRadius = "5px"
            btnRef.current.style.border = "1px solid black "
        }

        if (btnstyle === 'border' && count > 1) {
            btnRef.current.style.background = "transparent";
            btnRef.current.style.border = "1px solid black "
        }
        if (btnColor === '#000000')
            btnRef.current.style.color = 'white'
        else {
            btnRef.current.style.color = 'black'
        }
        if (size === 'small')
            btnRef.current.style.fontSize = "12px"
        if (size === 'medium')
            btnRef.current.style.fontSize = "16px"
        if (size === 'large')
            btnRef.current.style.fontSize = "20px"


        setCount(count + 1)
    }, [btnColor, btnText, btnstyle, size])

    const [open, setOpen] = useState(false)
    return (

        <div className="hero-section">
            <header className='my-section '>

                <Navbar /><br /><br />
                <h2 className="main-title poppins-light">best place to relax & enjoy</h2>
                <h1 className='header-text forum-regular'>A Luxurious Way To <br />
                    Enjoy Your Life</h1>
                <div className='text-center'>
                    {button && <button
                        ref={btnRef}
                        className="btn"
                        value="+ Add Button"
                        onClick={() => {
                            count > 1 ? handleClick() : (setOpen(true), setCount(count + 1));
                        }}
                    >
                        {btnValue}
                    </button> } <img src={assets.edit} alt="" onClick={()=>handleEdit()} />
                    {
                        open && (
                            <div className="pop">
                                <label htmlFor="url">Enter URL of button </label>
                                <input type="text" name="url" id="url" onChange={(e) => setUrl(e.target.value)} />
                                <br /><br />
                                <label htmlFor="style">Button style</label>
                                <select name="fill" id="fill" onChange={(e) => setStyle(e.target.value)}>
                                    <option value="fill">Fill</option>
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
                                <p onClick={()=>handleCancel()}>Cancel</p>
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



