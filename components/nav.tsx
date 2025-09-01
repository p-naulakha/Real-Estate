"use client"
import { useState } from "react"
import { Phone, Mail, Link, MessageCircle, X, Menu } from "lucide-react"
import { Button } from "react-day-picker"
import Image from "next/image"

export default function Nav() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    
      const handleWhatsApp = () => {
        window.open("https://wa.me/918448966285?text=Hello, I'm interested in your real estate services", "_blank")
      }
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="bg-blue-600 text-white py-2 px-4 hidden sm:block">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-6">
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+91 9711161007</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Gurujirealestate005@gmail.com</span>
                <span className="sm:hidden">Email Us</span>
              </div>
            </div>
            <div className="hidden md:block text-xs sm:text-sm">Greater Noida, Uttar Pradesh, India</div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/guruji-logo.png"
              alt="Guruji Real Estate Logo"
              width={40}
              height={40}
              className="rounded-lg sm:w-[50px] sm:h-[50px]"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-blue-600">Guruji Real Estate</h1>
            
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">
              Home
            </Link>
            <Link href="#properties" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">
              Properties
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 text-sm lg:text-base">
              Contact
            </Link>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-xs sm:text-sm">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 p-2">
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#properties"
                className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>+91 9711161007</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>Gurujirealestate005@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  )
}
