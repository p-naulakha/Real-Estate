"use client"
import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Link } from "lucide-react";
import { Button } from "./ui/button";


export default function FooterFun() {
    
  const handleWhatsApp = () => {
    window.open("https://wa.me/918448966285?text=Hello, I'm interested in your real estate services", "_blank")
  }

  return (
       <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/guruji-logo.png"
                  alt="Guruji Real Estate Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">Guruji Real Estate</h3>
                 
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Your trusted real estate company in Greater Noida for buying, selling, and investing in property.
              </p>
              <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>

            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Property Rental</li>
                <li>Investment Consulting</li>
                <li>Legal Documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400 text-xs sm:text-sm">
                <p>+91 9711161007</p>
                <p>+919313069464</p>
                <p>+919873734102</p>
                <p>+918448966285</p>
                <p className="break-all">Gurujirealestate005@gmail.com</p>
                <p>Krishna Apra Plaza Commercial Belt , Greater Noida, UP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; Guruji Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}   