export default function Contact() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Kontakt</h1>

      <form className="flex flex-col gap-4 w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <input
          type="text"
          placeholder="Your name"
          className="border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 p-3 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        />
        <textarea
          placeholder="Your message"
          className="border border-gray-300 p-3 rounded-lg h-32 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Saada
        </button>
      </form>
    </div>
  )
}