"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Bed, Bath, Square, Heart, Eye, Phone, Mail, MessageCircle, Search, ArrowLeft, Home } from "lucide-react"
import { useState, useMemo } from "react"

const properties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹2.5 Crore",
    priceValue: 25000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,450 sq ft",
    areaValue: 1450,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Villa with Garden",
    location: "Juhu, Mumbai",
    price: "₹8.5 Crore",
    priceValue: 85000000,
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    areaValue: 3200,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 3,
    title: "Spacious 2BHK Flat",
    location: "Andheri East, Mumbai",
    price: "₹1.8 Crore",
    priceValue: 18000000,
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    areaValue: 1100,
    image:"https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 4,
    title: "Premium Penthouse",
    location: "Worli, Mumbai",
    price: "₹12.5 Crore",
    priceValue: 125000000,
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: "2,800 sq ft",
    areaValue: 2800,
    image:"https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 5,
    title: "Cozy 1BHK Studio",
    location: "Powai, Mumbai",
    price: "₹95 Lakh",
    priceValue: 9500000,
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq ft",
    areaValue: 650,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Luxury Duplex Villa",
    location: "Versova, Mumbai",
    price: "₹6.8 Crore",
    priceValue: 68000000,
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,500 sq ft",
    areaValue: 4500,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 7,
    title: "Commercial Office Space",
    location: "BKC, Mumbai",
    price: "₹4.2 Crore",
    priceValue: 42000000,
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    area: "2,200 sq ft",
    areaValue: 2200,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 8,
    title: "Sea View 3BHK Apartment",
    location: "Marine Drive, Mumbai",
    price: "₹5.5 Crore",
    priceValue: 55000000,
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq ft",
    areaValue: 1800,
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 9,
    title: "Independent House",
    location: "Thane West, Mumbai",
    price: "₹3.2 Crore",
    priceValue: 32000000,
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    areaValue: 2500,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
]

export default function AllPropertiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [budgetRange, setBudgetRange] = useState("")
  const [sortBy, setSortBy] = useState("")

  const handleWhatsApp = () => {
    window.open("https://wa.me/919711161007?text=Hello, I'm interested in your real estate services", "_blank")
  }

  // Filter and sort properties
  const filteredAndSortedProperties = useMemo(() => {
    let filtered = properties

    // Search by title or location
    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Filter by property type
    if (propertyType && propertyType !== "all") {
      filtered = filtered.filter((property) => property.type.toLowerCase() === propertyType.toLowerCase())
    }

    // Filter by budget range
    if (budgetRange && budgetRange !== "all") {
      filtered = filtered.filter((property) => {
        const priceInCrores = property.priceValue / 10000000 // Convert to Crores

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

    // Sort properties
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortBy) {
          case "price-low":
            return a.priceValue - b.priceValue
          case "price-high":
            return b.priceValue - a.priceValue
          case "area-large":
            return b.areaValue - a.areaValue
          case "area-small":
            return a.areaValue - b.areaValue
          case "newest":
            return b.id - a.id
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9711161007</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Gurujirealestate005@gmail.com</span>
              </div>
            </div>
            <div>"Shop No. F-15, Krishna Apra Plaza , Greater Noida, UP"</div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/guruji-logo.png"
              alt="Guruji Real Estate Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">Guruji Real Estate</h1>
            
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/properties" className="text-blue-600 font-semibold">
              Properties
            </Link>
            <Link href="/#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
          </div>
        </nav>
      </header>

      {/* Page Header */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Properties</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our complete collection of properties in Greater Noida
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {filteredAndSortedProperties.length} of {properties.length} Properties
                {hasActiveFilters && " (Filtered)"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search properties..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={budgetRange} onValueChange={setBudgetRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Budgets</SelectItem>
                  <SelectItem value="0-1">Under ₹1 Crore</SelectItem>
                  <SelectItem value="1-3">₹1-3 Crore</SelectItem>
                  <SelectItem value="3-5">₹3-5 Crore</SelectItem>
                  <SelectItem value="5-10">₹5-10 Crore</SelectItem>
                  <SelectItem value="10+">₹10+ Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="area-large">Area: Largest First</SelectItem>
                  <SelectItem value="area-small">Area: Smallest First</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Active filters display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchQuery && (
                <Badge variant="secondary" className="px-3 py-1">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery("")} className="ml-2 text-gray-500 hover:text-gray-700">
                    ×
                  </button>
                </Badge>
              )}
              {propertyType && propertyType !== "all" && (
                <Badge variant="secondary" className="px-3 py-1">
                  Type: {propertyType}
                  <button onClick={() => setPropertyType("")} className="ml-2 text-gray-500 hover:text-gray-700">
                    ×
                  </button>
                </Badge>
              )}
              {budgetRange && budgetRange !== "all" && (
                <Badge variant="secondary" className="px-3 py-1">
                  Budget: {budgetRange}
                  <button onClick={() => setBudgetRange("")} className="ml-2 text-gray-500 hover:text-gray-700">
                    ×
                  </button>
                </Badge>
              )}
              {sortBy && (
                <Badge variant="secondary" className="px-3 py-1">
                  Sorted by: {sortBy.replace("-", " ")}
                  <button onClick={() => setSortBy("")} className="ml-2 text-gray-500 hover:text-gray-700">
                    ×
                  </button>
                </Badge>
              )}
              <Button 
                onClick={clearAllFilters} 
                variant="outline" 
                size="sm" 
                className="ml-2"
              >
                Clear All
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAndSortedProperties.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any properties matching your search criteria. Try adjusting your filters.
                  </p>
                  <Button onClick={clearAllFilters} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            ) : (
              filteredAndSortedProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    {property.featured && <Badge className="absolute top-4 left-4 bg-orange-500">Featured</Badge>}
                    <Badge className="absolute top-4 right-4 bg-blue-600">{property.type}</Badge>
                    <div className="absolute top-4 right-16 flex gap-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center">
                          <Bed className="w-4 h-4 mr-1" />
                          <span>{property.bedrooms}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Bath className="w-4 h-4 mr-1" />
                        <span>{property.bathrooms}</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="w-4 h-4 mr-1" />
                        <span>{property.area}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-blue-600">{property.price}</div>
                      <div className="flex gap-2">
                        <Button onClick={handleWhatsApp} size="sm" className="bg-green-500 hover:bg-green-600">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                        <Link href={`/property/${property.id}`}>
                          <Button size="sm">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Didn't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Let our experts help you find the perfect property that matches your requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={handleWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with Expert
            </Button>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="text-blue-600 bg-white hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <h3 className="text-xl font-bold">Guruji Real Estate</h3>
                 
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in finding the perfect property. 
              </p>
              <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/#about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Property Buying</li>
                <li>Property Selling</li>
                <li>Property Rental</li>
                <li>Investment Consulting</li>
                <li>Legal Documentation</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>+91 9711161007</p>
                <p>Gurujirealestate005@gmail.com</p>
                <p>Shop No. F-15, Krishna Apra Plaza</p>
                <p>Greater Noida, GB Nagar, UP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; Guruji Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
