import { Route, Routes } from "react-router-dom"

import { Dish } from "../pages/Dish"
import { Home } from "../pages/Home"
import { New } from "../pages/New"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/dish/:id" element={<Dish />} />
    </Routes>
  )
}
