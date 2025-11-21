import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import LandingPage from "./drone_landing_page"
import Contact from "./Contact"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}