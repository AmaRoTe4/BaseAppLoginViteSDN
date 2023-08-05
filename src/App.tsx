import Index from "./pages"
import NotFound from "./pages/404"
import Profesional from "./pages/profesional"
import { ToastContainer } from "react-toastify"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/:name_profesional/*" element={<Profesional />} />
        <Route element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
