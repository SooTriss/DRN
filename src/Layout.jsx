import { Outlet } from "react-router-dom"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function Layout() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-white text-gray-900">

      <Header />

      {/* PAGE CONTENT */}
      <main className="flex-1 pt-28">
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}