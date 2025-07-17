import React from 'react'
import '../styles/Team.css'
import {assets} from '../assets/assets'
export default function Team() {
    const persons = [
        { name: "Laurent Wayne", role: "Hotel Manager" },
        { name: "osh Mullins", role: "Kitchen Manager" },
        { name: "Andrea Hugh", role: "Recepcionista" },
        { name: "James Norman", role: "Room Service" }
    ]
    return (
        <div className='outerDiv'>
            <br /><br />
            <div className='outer-circle'>
                <div className='inner-circle'></div>
                <div className='inner-circle'></div>
                <div className='inner-circle'></div>
            </div>
            <div><br /><br />
                <div className='vertical'></div>
                <p className='meet'>meet our teem</p>
                <h2 className='forum text-white'>Expert Team Persons</h2>
                <div className='outer-card'>{
                    persons.map((item, index) => {
                        return (
                            <div className='card'>
                                <div className="image">
                                    <img src={assets.image} alt="" />
                                </div>
                                <div className="content">
                                    <p>{item.name}</p>
                                </div>

                            </div>
                        )
                    })
                }</div>
            </div>
            <br /><br />
        </div>
    )
}
