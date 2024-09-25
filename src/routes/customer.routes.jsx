import { Route, Routes } from "react-router-dom"

import { Dish } from "../pages/Dish"
import { Home } from "../pages/Home"
import { Favorites } from "../pages/Favorites"
import { NotFound } from "../pages/NotFound";


export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/favorites" element={<Favorites />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
