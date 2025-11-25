import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <div className="flex items-center gap-2">
          <img src="/icon4.png" alt="B.D.M Logo" className="w-15 h-15 p-1 rounded-full" />
          <h1 className="text-xl font-bold">B.D.M</h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="/#drones" className="hover:text-green-600">Drone</a>
          <a href="/#builder" className="hover:text-green-600">Drone Builder</a>
          <a href="/#parts" className="hover:text-green-600">Drone Parts</a>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </nav>

        <div className="space-x-2">
          <Button>Sign In</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  )
}
