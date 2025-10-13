import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <div >
          
          <div className="h-12 w-14 object-contain">
            <Link to="/">
              <img src="/icon4.png"></img>
            </Link>
          </div>
        </div>

        <nav className="hidden md:flex space-x-6">
          <a href="#drones" className="hover:text-green-600">Drone</a>
          <a href="#builder" className="hover:text-green-600">Drone Builder</a>
          <a href="#parts" className="hover:text-green-600">Drone Parts</a>
          <a href="#contact" className="hover:text-green-600">Contact</a>
        </nav>

        <div className="space-x-3">
          <Link
            to="/login"
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
