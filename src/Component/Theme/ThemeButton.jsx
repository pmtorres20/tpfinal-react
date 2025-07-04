import React, { use } from "react";
import { useTheme } from "../../Context/ThemeContext";
import './ThemeButton.css'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export function Themebtn(){
    const {theme, toggleTheme} = useTheme();

    return(
        <button 
            className="theme-btn"
            onClick={toggleTheme}>
                {theme === 'light' ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </button>
    )
}
