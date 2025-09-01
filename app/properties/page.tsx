"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Bed, Bath, Square, Heart, Eye, Phone, Mail, MessageCircle, Search, ArrowLeft, Home } from "lucide-react"
import { useState, useMemo } from "react"
import HeadNav from "@/components/head"
import FooterFun from "@/components/footer"

// Properties JSON
const properties = [
  {
    serial_no: 1,
    property_name: "Shakti Khand",
    location: "Indirapuram",
    property_size: "93 sq. yards",
    BHK: "3 BHK",
    Price: "Rs 90,00,000",
    Photos: "/placeholder.jpg",
    brief_description:
      "Spacious 3 BHK flat for sale in Shakti Khand, Indirapuram. A ready-to-move property with a prime park-facing view. One of the best properties in Indirapuram Ghaziabad for families seeking modern living.",
    Construction_status: "Ready to Move",
  },
  {
    serial_no: 2,
    property_name: "YEIDA Sector 20",
    location: "Yamuna Expressway",
    property_size: "300 sq. mtr.",
    BHK: "Residential Plot",
    Price: "Rs 2,10,00,000",
    Photos: "/placeholder.jpg",
    brief_description:
      "Premium 300 sq. mtr. corner plot in YEIDA Sector 20, Yamuna Expressway. East-facing with dual 12 mtr. wide roads. Ideal for building your dream home near Jewar Airport — one of the fastest-growing real estate destinations in Greater Noida.",
    Construction_status: "Plot",
  },
  {
    serial_no: 3,
    property_name: "YEIDA Sector 18",
    location: "Yamuna Expressway",
    property_size: "90 sq. mtr.",
    BHK: "Residential Plot",
    Price: "Rs 1,00,00,000",
    Photos: "/placeholder.jpg",
    brief_description:
      "Affordable 90 sq. mtr. registered plot in Pocket 7E, Sector 18, Yamuna Expressway. A top choice for investors looking for property near Jewar Airport and Noida International Airport connectivity.",
    Construction_status: "Plot",
  },
  {
    serial_no: 4,
    property_name: "Greater Noida Delta 2",
    location: "Greater Noida",
    property_size: "120 sq. mtr.",
    BHK: "CC Plot",
    Price: "Rs 2,10,00,000",
    Photos: "/placeholder.jpg",
    brief_description:
      "Prime 120 sq. mtr. completion plot available in Delta 2, Greater Noida. Located near Delta 1 Metro Station and just 1 km from Pari Chowk. One of the best investment properties in Greater Noida with excellent metro and road connectivity.",
    Construction_status: "Plot",
  },
];

export default function AllPropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [budgetRange, setBudgetRange] = useState("")
  const [sortBy, setSortBy] = useState("")

  const handleWhatsApp = () => {
    window.open("https://wa.me/919711161007?text=Hello, I'm interested in your real estate services", "_blank")
  }

  // Filter + Sort
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties

    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.property_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    if (propertyType && propertyType !== "all") {
      filtered = filtered.filter((property) =>
        String(property.BHK).toLowerCase() === propertyType.toLowerCase()
      )
    }

    if (budgetRange && budgetRange !== "all") {
      filtered = filtered.filter((property) => {
        const priceValue = parseInt(property.Price.replace(/\D/g, "")) || 0
        const priceInCrores = priceValue / 10000000

        switch (budgetRange) {
          case "0-1":
            return priceInCrores < 1
          case "1-3":
            return priceInCrores >= 1 && priceInCrores <= 3
          case "3-5":
            return priceInCrores > 3 && priceInCrores <= 5
          case "5-10":
            return priceInCrores > 5 && priceInCrores <= 10
          case "10+":
            return priceInCrores > 10
          default:
            return true
        }
      })
    }

    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        const priceA = parseInt(a.Price.replace(/\D/g, "")) || 0
        const priceB = parseInt(b.Price.replace(/\D/g, "")) || 0
        const areaA = parseInt(a.property_size) || 0
        const areaB = parseInt(b.property_size) || 0

        switch (sortBy) {
          case "price-low":
            return priceA - priceB
          case "price-high":
            return priceB - priceA
          case "area-large":
            return areaB - areaA
          case "area-small":
            return areaA - areaB
          case "newest":
            return b.serial_no - a.serial_no
          default:
            return 0
        }
      })
    }

    return filtered
  }, [searchQuery, propertyType, budgetRange, sortBy])

  const clearAllFilters = () => {
    setSearchQuery("")
    setPropertyType("")
    setBudgetRange("")
    setSortBy("")
  }

  const hasActiveFilters = searchQuery || propertyType || budgetRange || sortBy

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---- HEADER ---- */}
      <HeadNav />

      {/* ---- PAGE HEADER ---- */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Properties</h1>
          <p className="text-lg text-gray-600 mb-6">Explore our complete collection of properties in Greater Noida</p>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {filteredAndSortedProperties.length} of {properties.length} Properties
            {hasActiveFilters && " (Filtered)"}
          </span>
        </div>
      </section>

      {/* ---- FILTERS ---- */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search properties..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger><SelectValue placeholder="Property Type" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="plot">Plot</SelectItem>
              <SelectItem value="completion">Completion</SelectItem>
            </SelectContent>
          </Select>
          <Select value={budgetRange} onValueChange={setBudgetRange}>
            <SelectTrigger><SelectValue placeholder="Budget Range" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Budgets</SelectItem>
              <SelectItem value="0-1">Under ₹1 Cr</SelectItem>
              <SelectItem value="1-3">₹1-3 Cr</SelectItem>
              <SelectItem value="3-5">₹3-5 Cr</SelectItem>
              <SelectItem value="5-10">₹5-10 Cr</SelectItem>
              <SelectItem value="10+">₹10+ Cr</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger><SelectValue placeholder="Sort By" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="area-large">Area: Largest First</SelectItem>
              <SelectItem value="area-small">Area: Smallest First</SelectItem>
              <SelectItem value="newest">Newest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* ---- PROPERTIES GRID ---- */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProperties.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Home className="w-10 h-10 mx-auto text-gray-400 mb-3" />
              <h3 className="text-xl font-semibold">No Properties Found</h3>
              <Button onClick={clearAllFilters} variant="outline" className="mt-4">Clear All Filters</Button>
            </div>
          ) : (
            filteredAndSortedProperties.map((property) => (
              <Card key={property.serial_no} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={property.Photos || "/placeholder.svg"}
                  alt={property.property_name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{property.property_name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    {property.BHK && typeof property.BHK === "number" && (
                      <div className="flex items-center"><Bed className="w-4 h-4 mr-1" />{property.BHK} BHK</div>
                    )}
                    <div className="flex items-center"><Square className="w-4 h-4 mr-1" />{property.property_size}</div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{property["brief_description"]}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-blue-600">{property.Price}</div>
                    <Button onClick={handleWhatsApp} size="sm" className="bg-green-500 hover:bg-green-600">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>
      <FooterFun />
    </div>
  )
}
