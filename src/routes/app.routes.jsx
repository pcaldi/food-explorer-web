import { Route, Routes } from "react-router-dom"

import { Dish } from "../pages/Dish"
import { Home } from "../pages/HomeOriginal"
import { New } from "../pages/New"
import { Edit } from "../pages/Edit"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  )
}
