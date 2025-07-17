import {useState} from "react";
import "../styles/ServicesSection.css";
import { assets } from "../assets/assets";
import { useContext } from "react";
import '../styles/Home.css'
import {useText} from '../context/textContext'
const services = [
    {
        title: null,
        description: null,
        icon: null,
    },
    {
        title: "Workout & Yoga Rooms",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: assets.gym,
    },

    {
        title: "Spa, Massage & Sauna",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: assets.spa,
    },
    {
        title: null,
        description: null,
        icon: null,
    },
    {
        title: null,
        description: null,
        icon: null,
    },
    {
        title: "Multiple Cuisines & Beverages",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        icon: assets.group,
    },

];

export default function ServicesSection() {
    const {text, setText,newText,setNewText,setIsEditing}=useText();


    return (
        <section className="services">
            <div className="services-header">
                <div className="tg">
                    <p className="tagline">INTRODUCING OUR SERVICES</p>
                    <h2 >Amenities That You Can Enjoy</h2>
                </div>
                <p className="intro-text" onClick={()=>setIsEditing(true)}>
                   {text} 
                </p><toolOption/>

            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index}>
                        <div className={`services-box content ${service.title === null ? "light    " : "dark "}`}>

                            <div className="icon"><img src={service.icon} alt="" /></div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>

                            <button className="discover">
                                {service.title && <DiscoverButton />}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
function DiscoverButton() {
    return (
        <div className="discover-btn">
            <span className="text">Discover Rooms &gt; </span>
        </div>
    );
}
function toolOption(){
    return(
        <div>
            <img src={assets.edit} alt="" />
        </div>
    )
}
