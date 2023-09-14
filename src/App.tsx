import Index from "./pages"
import NotFound from "./pages/404"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Controladores from "./pages/controladores"
import Productos from "./pages/productos"
import Resumenes from "./pages/resumen"
import Notas from "./pages/notas"
import Settings from "./pages/settings"
import { CargarData } from "./hooks/cargarTema"

function App() {
  CargarData();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/controladores" element={<Controladores />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/resumen" element={<Resumenes />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/404" element={<NotFound />} />
        <Route element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
