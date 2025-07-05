import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate desde react-router
import React from "react";
import "./LoginScreen.css";
import { GrLogin } from "react-icons/gr";
import { useTheme } from "../../Context/ThemeContext";
import { Themebtn } from "../../Component/Theme/ThemeButton";

function LoginScreen() {
    const [userName, setUserName] = useState("");
    const { login } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();//importamos useNavigate desde react-router-dom
    //navigate sirve para redirigir al usuario a otra ruta 

    const handleSubmit = (e) => {// función que maneja el evento de envío del formulario
        //e es el evento que se dispara al enviar el formulario
        e.preventDefault();
        login(userName);
        navigate("/contacts"); // Redirige al usuario al home después de iniciar sesión
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}
                className="login-form">
                <h2
                    className="h2-form">Iniciar Sesión</h2>
                <input
                    className="login-input"
                    type="text"
                    placeholder="Nombre de usuario"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required />
                <button
                    className="login-button"
                    type="submit">
                    <GrLogin />
                </button>
                <Themebtn>
                </Themebtn>
            </form>
        </div>
    );
}
export default LoginScreen;