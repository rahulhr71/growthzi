import { useState } from "react";
import "../styles/ServicesSection.css";
import { assets } from "../assets/assets";
import { useContext } from "react";
import '../styles/Home.css'
import { useText } from '../context/textContext'
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
    const { text, setText, newText, setNewText, isEditing, setIsEditing } = useText();
    const [showBorder, setShowBorder] = useState(false)

    return (
        <section className="services">
            <div className="services-header">

                <div className="tg">
                    <p className="tagline">INTRODUCING OUR SERVICES</p>
                    <h2 >Amenities That You Can Enjoy</h2>
                </div>
                {
                    isEditing ? (
                        <div>
                            <textarea
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                rows={3}
                                className={`editable-box ${applyStyle()}`}
                            />
                            <div className="toolbar">
                                <button onClick={() => toggleStyle('bold')} className={style.bold ? 'active' : ''}>B</button>
                                <button onClick={() => toggleStyle('italic')} className={style.italic ? 'active' : ''}>I</button>
                                <button onClick={() => toggleStyle('underline')} className={style.underline ? 'active' : ''}>U</button>
                            </div>
                            <button onClick={handleSave} className="save-btn">Save</button>
                            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
                        </div>
                    ) : (<p className={showBorder ? `intro-text2` : `intro-text`} onClick={() => { setShowBorder(true) }}>

                        {text}
                    </p>)
                }

                {
                    showBorder && <ToolOption />
                }


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
function ToolOption() {
    const { setIsEditing } = useText();
    return (
        <div className="pencil">
            <img src={assets.edit} alt="" onClick={() => setIsEditing(true)} />
        </div>
    )
}
