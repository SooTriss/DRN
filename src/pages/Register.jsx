import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";


export default function Register() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="sticky top-0 z-50"><Navbar/></div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Register</h1>

      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <div className="flex items-center mb-4">
          <input type="checkbox" id="tos" className="mr-2" />
          <label htmlFor="tos" className="text-sm text-gray-700">
            Agree to TOS
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Register
        </button>

        <p className="text-center text-sm text-gray-600 mt-3">
          Already a user?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>

    </div>
  );
}
