// components/RoomSection.js
import React from "react";
import "../styles/RoomSection.css";
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
        <div>
        <p>our room choices</p>
        <h1 className="forum">Luxury Rooms & Suites</h1>

        </div>
      <div className="room-header">
        <p className="subheading">OUR ROOM CHOICES</p>
        <h2>Luxury Rooms & Suites</h2>
      </div>

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
                  <span>🛏️</span>
                  <span>🚖</span>
                  <span>🍽️</span>
                  <span>📶</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}