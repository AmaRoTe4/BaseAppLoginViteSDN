import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cartelOk } from "../functions/carteles";
import { validarLogin } from "../validaciones/login";

export default function Login() {
    const navigate = useNavigate();
    const [id, setId] = useState<string>("");

    const iniciarSesion = async () => {
        const resultado = await validarLogin(id)
        if (!(resultado.resultado)) return;
        localStorage.setItem("user", JSON.stringify(
            { 
                id: resultado?.user?.id , 
                nombre: resultado?.user?.cliente.nombre, 
                estado: true 
            }
        ))
        cartelOk("Iniciando sesion...");
        setTimeout(() => navigate("/" + resultado?.user?.cliente.nombre.replace(" " , "_") + "/admin"), 3000);
        setTimeout(() => window.location.reload(), 4000);
    }

    return (
        <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 20 }}>
            <h1>Login</h1>
            <form onSubmit={e => e.preventDefault()} style={{ padding: "50px 100px", border: "solid 1px black", display: "flex", flexDirection: "column", borderRadius: 5, gap: 20 }}>
                <div style={{ display: "flex", flexDirection: "column", borderRadius: 5, gap: 10, width: "100%" }}>
                    <input style={{ border: "1px solid black", padding: 10, borderRadius: 5 }} type="text" placeholder="id de usuario" value={id} onChange={e => setId(e.target.value)} />
                </div>
                <button style={{ border: "none", padding: 10, background: "rgb(100 100 255)", borderRadius: 5 }} type="button" onClick={e => { e.preventDefault(); iniciarSesion() }}>Ingresar</button>
            </form>
            <span style={{ padding: 0, margin: 0 }}>
                <p style={{ fontSize: "15px", padding: 0, margin: 0 }}>Puede ponerse en contacto con Amaro Cattarozzi a través de:</p>
                <p style={{ fontSize: "15px", padding: 0, margin: 0 }}>
                    al: 54 3482 377231
                </p>
            </span>
        </div>
    )
}