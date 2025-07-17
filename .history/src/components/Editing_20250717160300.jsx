import React from 'react'
import '../styles/editing.css'
import { useText } from '../context/textContext'
export default function Editing({content}) {
    const {text, setText,newText,setNewText,isEditing,setIsEditing}=useText();
    
    return (
        <div>
            <div className='popup'>
                <h2 className='left'>Edit</h2><hr />
                <p className='left'>heading</p>
                <div className="toolbar">

                </div>
                <div className="content">
{content}
                </div>
            </div>
        </div>
    )
}
