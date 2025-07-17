import React from 'react'
import { assets } from '../assets/assets'
export default function Navbar() {
    const links = [
        {
            name: "HOME", link: "/", childrens: [
                { name: "HOME 1", link: "/home1" },
                { name: "HOME 2", link: "/home1" }
            ]
        },
        { name: "ABOUT", link: "/about" },
        { name: "SERVICE", link: "/service" },
        {
            name: "PAGES", link: "/pages", childrens: [
                { name: "PAGE 1", link: "page1" },
                { name: "PAGE 2", link: "page2" },
            ]
        },
    ]
    return (

        <div>
            <ul>
                {
                    links.map((item, index) => {
                        return(
                            <li>{item.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
