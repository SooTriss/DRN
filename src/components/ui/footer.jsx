import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-8 flex justify-center gap-6">
      <a href="https://facebook.com" target="_blank" rel="noreferrer"><Facebook className="w-6 h-6 hover:text-blue-500" /></a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram className="w-6 h-6 hover:text-pink-500" /></a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer"><Linkedin className="w-6 h-6 hover:text-blue-400" /></a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer"><Twitter className="w-6 h-6 hover:text-sky-400" /></a>
    </footer>
  )
}