import React from 'react'
import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Hakkımda from "./pages/Hakkımda"
import Tarifler from "./pages/Tarifler"
import TarifDetay from "./pages/TarifDetay"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hakkımda' element={<Hakkımda />} />
        <Route path='/saglikli-tarifler' element={<Tarifler />} />
        <Route path='/tarif/:id' element={<TarifDetay />} />
    </Routes>
  )
}

export default AppRoutes