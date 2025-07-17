// components/Navbar.js
import React, { useState } from "react";
import "../styles/navbar.css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "HOME",

    subItems: ["HOME 1", "HOME 2"],
    link: "/"
  },
  {
    title: "ABOUT",
    subItems: [],
    link: "/about"
  },
  {
    title: "SERVICE",
    subItems: [],
    link: "/service"
  },
  {
    title: "PAGES",
    subItems: ["ROOM", "SIGLE ROOM", "BLOG", "SINGLE BLOG", "404 PAGE"],
    link: "/pages"
  }
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="navbar">
      <img src={assets.logo} alt="" />
      <ul className="menu">
        {menuItems.map((item, index) => (

          <li
            className="menu-item"
            key={index}
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {item.title}
            {item.subItems.length > 0 && <span className="arrow"><img src={assets.arrow} alt="" /></span>}
            {activeMenu === index && item.subItems.length > 0 && (
              <ul className="dropdown">
                {item.subItems.map((sub, subIndex) => (
                  <Link to={`/${sub}`}>

                    <li className="dropdown-item" key={subIndex}>
                      <span className="dot">•</span> {sub}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
