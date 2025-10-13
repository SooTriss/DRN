import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";


export default function Login() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="sticky top-0 z-50"><Navbar/></div>

    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl font-bold mb-8">Login</h1>

      <form className="bg-white p-6 rounded-lg shadow-md w-80">
        <div className="text-center mt-2">
          <p>
            No account yet?‎ ‎ 
            <Link to="/register" className="text-blue-600 hover:text-black">
               Register
            </Link>

          </p>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Sign In
        </button>

        <div className="text-left mt-2">
          <Link to="#" className="text-sm text-gray-600 hover:text-black">
            Forgot password?
          </Link>
        </div>
      </form>
    </section>

    </div>

  );
}
