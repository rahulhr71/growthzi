// components/BookingForm.js
import React from "react";
import "../styles/BookingForm.css";
import { assets } from "../assets/assets";

export default function BookingForm() {
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
          <span className="icon"><img src={assets.calender} alt="" /></span>
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
