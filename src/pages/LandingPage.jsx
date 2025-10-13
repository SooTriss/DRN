import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900">
      <div className="sticky top-0 z-50"><Navbar/></div>
      <section className="relative w-full h-[80vh] flex flex-col justify-center items-center text-white overflow-hidden">
        <div aria-hidden="true">
          <video
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          noskipping="true"
          controlsList="nodownload nofullscreen noremoteplayback noplaybackrate noskip noseek"
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none"
          preload="auto"
          >
            <source src="/videos/landing_video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* overlay to darken the video slightly for readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="h-46 w-46 object-fill object-top">
            <img src="/icon2.png"></img>
          </div>
          <p className="text-center font-serif">Baltic Drone Manufacturing</p>
        </motion.div>
      </section>

      {/* Drone Section */}
      <section id="drones" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-2">Drone</h2>
        <p className="text-gray-600 mb-6">Our most popular Drones</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

      {/* Drone Builder Section */}
      <section id="builder" className="px-6 py-12 bg-gray-100">
        <h2 className="text-2xl font-bold mb-2">Drone Builder</h2>
        <p className="text-gray-600 mb-6">Build your very own custom drone</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

      {/* Drone Parts Section */}
      <section id="parts" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-2">Drone Parts</h2>
        <p className="text-gray-600 mb-6">Find the right parts for your drone</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
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

      {/* Footer */}
      <footer className="w-full bg-gray-900 text-white py-8 flex justify-center gap-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 hover:text-sky-400 transition-colors" />
        </a>
      </footer>
    </div>
  );
}
