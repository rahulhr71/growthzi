// components/RoomSection.js
import React from "react";
import "../styles/RoomSection.css";
import { assets } from "../assets/assets";
const rooms = [
  { name: "Superior Suite", price: "$300/Night", features: true },
  { name: "Junior Suite", price: "$270/Night", features: false },
  { name: "Deluxe Room", price: "$210/Night", features: false },
  { name: "Double Room", price: "$180/Night", features: false },
  { name: "Family Room", price: "$150/Night", features: false }
];

export default function RoomSection() {
  return (
    <section className="room-section">
      {/* <div className="rooms">
        <p>our room choices</p>
        <h1 >Luxury Rooms & Suites</h1>

        </div> */}
      <p className='meet'>our room choices</p>
      <h2 className='forum  h2'>Luxury Rooms & Suites</h2>    

      <div className="room-grid">
        {rooms.map((room, index) => (
          <div className="room-card" key={index}>
            <div className="room-content">
              <div className="room-info">
                <h3>{room.name}</h3>
                <p>{room.price}</p>
              </div>
              <div className="room-line"></div>
              <div className={`room-extra ${room.features ? "show" : ""}`}>
                <span className="book">
                  Book Now <span className="arrow">›</span>
                </span>
                <div className="icons">
                  <span><img src={assets.facility} alt="" /></span>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}