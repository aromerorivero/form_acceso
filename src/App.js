import React from "react";
import { Routes, Route } from"react-router-dom";
import Form from "./pages/Form";
import Bienvenida from "./pages/Bienvenida";
import { authenticate } from "./services/Autentificador";
import './index.css';

function App() {
    return (
            <div className="container">
                <Routes>
                    <Route path="/" element={<Form authenticate={authenticate} />} />
                    <Route path="/bienvenida" element={<Bienvenida />} />
                </Routes>
            </div>
    );
}

export default App;
