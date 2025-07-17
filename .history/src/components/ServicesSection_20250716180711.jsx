import React from "react";
import "../styles/ServicesSection.css";
import { assets } from "../assets/assets";
const services = [
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
    title: "Multiple Cuisines & Beverages",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: assets.group,
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
                Discover More <span className="arrow">›</span>
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
