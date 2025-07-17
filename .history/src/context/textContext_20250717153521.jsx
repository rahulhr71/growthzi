import { useContext,createContext, useState } from "react";
export const TextContext = createContext()

export const TextProvider = ({ children }) => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [newText, setNewText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);
    return (
        <TextContext.Provider value={{text, setText,newText,setNewText,isEditing,setIsEditing}}>
            {children}
        </TextContext.Provider>
    )


}
export const useText=()=>useContext(TextContext)
