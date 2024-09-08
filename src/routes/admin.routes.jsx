import { Route, Routes } from "react-router-dom"

import { Dish } from "../pages/Dish"
import { Home } from "../pages/Home"
import { New } from "../pages/New"
import { Edit } from "../pages/Edit"
import { NotFound } from "../pages/NotFound"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<New />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/edit/:id" element={<Edit />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
