// components/Navbar.js
import React, { useState } from "react";
import "./Navbar.css";

const menuItems = [
  {
    title: "HOME",
    subItems: ["HOME 1", "HOME 2"]
  },
  {
    title: "ABOUT",
    subItems: []
  },
  {
    title: "SERVICE",
    subItems: []
  },
  {
    title: "PAGES",
    subItems: ["PAGE 1", "PAGE 2"]
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li
            className="menu-item"
            key={index}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.title}
            {item.subItems.length > 0 && <span className="arrow">▼</span>}
            {activeMenu === index && item.subItems.length > 0 && (
              <ul className="dropdown">
                {item.subItems.map((sub, subIndex) => (
                  <li className="dropdown-item" key={subIndex}>
                    <span className="dot">•</span> {sub}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
