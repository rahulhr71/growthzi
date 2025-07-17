import { useContext,createContext, useState } from "react";
export const TextContext = createContext()
import axios from 'axios'
export const TextProvider = async({ children }) => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [newText, setNewText] = useState(text);
    try{
        const res= await axios.get("http://localhost:3000/content")
        console.log(res);
        
    }
    catch{(e)=>
        console.log(e);
        
    }
    const [isEditing, setIsEditing] = useState(false);
    return (
        <TextContext.Provider value={{text, setText,newText,setNewText,isEditing,setIsEditing}}>
            {children}
        </TextContext.Provider>
    )


}
export const useText=()=>useContext(TextContext)
