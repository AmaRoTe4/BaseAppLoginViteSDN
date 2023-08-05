import Index from "./public";
import Login from "../login";
import Admin from "./admin";
import { Route, Routes } from "react-router-dom";
import { useEstadoLogin } from "../../hooks/useEstadoLogin";
import { useState } from "react";
import { useValidarURL } from "../../hooks/useValidarURL";
import { User } from "../../types";

export default function Profesional() {
    const [user, setUser] = useState<User | null>(null)
    const [estado, setEstado] = useState<boolean>(false);

    useValidarURL(setUser)
    useEstadoLogin(setEstado)

    const renderisado = (element: JSX.Element) => {
        return estado ? element : <Login />
    }

    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin" element={renderisado(<Admin />)} />
        </Routes>
    )
}