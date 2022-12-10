import { createContext } from "react";
import { useState } from "react";


export const initialState = {
    themes: {
        light: {
            backgroundNavbar:"rgb(223, 219, 219)",
            backgroundHome:"white",
            backgroundFooter:"#cb3234",
            color:"black"
        },
        dark: {
            backgroundNavbar:"#161616",
            backgroundHome:"#12121296",
            backgroundFooter:"#161616",
            color:"white"
        }
    },
    favs:JSON.parse(localStorage.getItem("favs")||"[]")
}

export const ContextGlobal = createContext(initialState); // Exporta context global

export const ContextProvider = ({ children }) => { // Exporta provider del contexto global

    // Context de los Themes
    const [Theme, setTheme] = useState(initialState.themes.light)
    const handleThemeChange = () => {
    if(Theme === initialState.themes.dark){
        setTheme(initialState.themes.light)
    } 
    else if(Theme === initialState.themes.light){
        setTheme(initialState.themes.dark)
    } 
    }
    // This is the context of the favorites
    const [Favs, setFavs] = useState(initialState.favs)

    return (
        <ContextGlobal.Provider value={{Theme, handleThemeChange, Favs, setFavs}}>
            {children}
        </ContextGlobal.Provider>
    );
};