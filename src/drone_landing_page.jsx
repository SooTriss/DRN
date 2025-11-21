import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-white overflow-hidden">
        <div aria-hidden="true">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
          >
            <source src="/videos/landing_video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-bold">B.D.M</h1>
          <p className="text-lg mt-3">Baltic Drone Manufacturing</p>
        </motion.div>
      </section>

      {/* DRONES */}
      <section id="drones" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-2">Drone</h2>
        <p className="text-gray-600 mb-6">Our most popular Drones</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-2xl shadow p-4 h-48 flex flex-col justify-center items-center hover:shadow-xl cursor-pointer"
            >
              <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold">Title</h3>
              <p className="text-sm text-gray-500">Body text here.</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <Button>Open Drone Shop</Button>
        </div>
      </section>

      {/* DRONE BUILDER */}
      <section id="builder" className="px-6 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">Drone Builder</h2>
        <p className="text-gray-600 mb-6">Build your very own custom drone</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-2xl shadow p-4 h-48 flex flex-col justify-center items-center hover:shadow-xl cursor-pointer"
            >
              <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold">Title</h3>
              <p className="text-sm text-gray-500">Body text here.</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <Button>Open Drone Builder</Button>
        </div>
      </section>

      {/* DRONE PARTS */}
      <section id="parts" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-2">Drone Parts</h2>
        <p className="text-gray-600 mb-6">Find the right parts for your drone</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-white rounded-2xl shadow p-4 h-48 flex flex-col justify-center items-center hover:shadow-xl cursor-pointer"
            >
              <div className="w-24 h-24 bg-gray-200 rounded mb-4"></div>
              <h3 className="font-semibold">Title</h3>
              <p className="text-sm text-gray-500">Body text here.</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6">
          <Button>Open Drone Parts Shop</Button>
        </div>
      </section>

    </div>
  )
}