import { Routes, Route } from "react-router-dom";

import { New } from '../pages/New'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/new" element={<New/>}/>
      <Route path="/moviepreview/:id" element={<MoviePreview/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
  )
}