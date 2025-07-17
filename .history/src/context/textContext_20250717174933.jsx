import { useContext, createContext, useState,useEffect } from "react";
export const TextContext = createContext()
import axios from 'axios'
export const TextProvider = ({ children }) => {
    const [text, setText] = useState("");
    const [newText, setNewText] = useState("");

    useEffect(() => {
        const fetchText = async () => {
            try {
                const res = await axios.get("http://localhost:3000/content");
                 setNewText(res.data.result[0].name);
                 
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
