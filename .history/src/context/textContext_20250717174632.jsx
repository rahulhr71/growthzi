import { useContext, createContext, useState,useEffect } from "react";
export const TextContext = createContext()
import axios from 'axios'
export const TextProvider = ({ children }) => {
    const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    const [newText, setNewText] = useState(text);

    useEffect(() => {
        const fetchText = async () => {
            try {
                const res = await axios.get("http://localhost:3000/content");
                 console.log(res.data.result);
                 
            } catch (error) {
                console.error("Error fetching text:", error);
                setText("Failed to load text");
                setIsLoading(false);
            }
        };

        fetchText();
    }, []);

    const [isEditing, setIsEditing] = useState(false);
    return (
        <TextContext.Provider value={{ text, setText, newText, setNewText, isEditing, setIsEditing }}>
            {children}
        </TextContext.Provider>
    )


}
export const useText = () => useContext(TextContext)
