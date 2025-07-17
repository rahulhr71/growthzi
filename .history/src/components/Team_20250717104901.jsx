import React from 'react'
import '../styles/Team.css'
export default function Team() {
    const persons = [
        { name: "Laurent Wayne", role: "Hotel Manager" },
        { name: "osh Mullins", role: "Kitchen Manager" },
        { name: "Andrea Hugh", role: "Recepcionista" },
        { name: "James Norman" ,role:"Room Service"}
    ]
    return (
        <div className='outerDiv'>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <p>meet our teem</p>
                <h2>Expert Team Persons</h2>
                <div>{
                    persons.map((item,index)=>{
                        return(
                            <div className='card'>

                            </div>
                        )
                    })
}</div>
            </div>
        </div>
    )
}
