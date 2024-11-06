import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = ({ authenticate }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (authenticate(email, password)) {
            navigate("/bienvenida");
        } else {
            setError("Correo electrónico o contraseña incorrectos");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Correo Electrónico" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
             <p>{error}</p>
        </div>
    );
};

export default Form;