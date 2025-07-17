import { useContext,createContext, useState } from "react";
export const textContext = createContext()

export const textProvider = ({ childrens }) => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [newText, setNewText] = useState(text);
    const [isEditing, setIsEditing] = useState(false);
    return (
        <textContext.Provider value={{text, setText}}>
            {childrens}
        </textContext.Provider>
    )


}
