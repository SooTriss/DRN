import { Routes, Route } from "react-router-dom"
import LandingPage from "./drone_landing_page"
import Contact from "./Contact"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
