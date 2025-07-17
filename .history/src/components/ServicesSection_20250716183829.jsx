import React from "react";
import "../styles/ServicesSection.css";
import { assets } from "../assets/assets";
import '../styles/Home.css'
const services = [
  {
    title: "Workout & Yoga Rooms",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: assets.gym,
  },
    {
    title: null,
    description: null,
    icon: null,
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
    title: "Multiple Cuisines & Beverages",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: assets.group,
  },
  {
    title: null,
    description: null,
    icon: null,
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services-header">
        <p className="tagline">INTRODUCING OUR SERVICES</p>
        <h2>Amenities That You Can Enjoy</h2>
        <p className="intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <React.Fragment key={index}>
         
            <div className={`services-box ${index % 2 === 0 ? "light" : "dark"}`}></div>
            <div className={`services-box content ${index % 2 === 0 ? "dark" : "light"}`}>
              
              <div className="icon"><img src={service.icon} alt="" /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="discover">
                <DiscoverButton/>
              </button>
            </div>
          </React.Fragment>
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
