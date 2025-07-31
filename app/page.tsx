"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Eye,
  Home,
  DollarSign,
  Key,
  FileText,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

const properties = [
  {
    id: 1,
    title: "Luxury 3BHK Apartment",
    location: "Bandra West, Mumbai",
    price: "₹2.5 Crore",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 2,
    area: "1,450 sq ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Villa with Garden",
    location: "Juhu, Mumbai",
    price: "₹8.5 Crore",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,200 sq ft",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 3,
    title: "Spacious 2BHK Flat",
    location: "Andheri East, Mumbai",
    price: "₹1.8 Crore",
    type: "Apartment",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,100 sq ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 4,
    title: "Premium Penthouse",
    location: "Worli, Mumbai",
    price: "₹12.5 Crore",
    type: "Penthouse",
    bedrooms: 4,
    bathrooms: 4,
    area: "2,800 sq ft",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 5,
    title: "Cozy 1BHK Studio",
    location: "Powai, Mumbai",
    price: "₹95 Lakh",
    type: "Studio",
    bedrooms: 1,
    bathrooms: 1,
    area: "650 sq ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Luxury Duplex Villa",
    location: "Versova, Mumbai",
    price: "₹6.8 Crore",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,500 sq ft",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 7,
    title: "Commercial Office Space",
    location: "BKC, Mumbai",
    price: "₹4.2 Crore",
    type: "Commercial",
    bedrooms: 0,
    bathrooms: 2,
    area: "2,200 sq ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
  {
    id: 8,
    title: "Sea View 3BHK Apartment",
    location: "Marine Drive, Mumbai",
    price: "₹5.5 Crore",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "1,800 sq ft",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: true,
  },
  {
    id: 9,
    title: "Independent House",
    location: "Thane West, Mumbai",
    price: "₹3.2 Crore",
    type: "House",
    bedrooms: 4,
    bathrooms: 3,
    area: "2,500 sq ft",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    featured: false,
  },
]

const services = [
  {
    icon: Home,
    title: "Property Buying",
    description: "Expert guidance in finding and purchasing your dream property with complete legal assistance.",
  },
  {
    icon: DollarSign,
    title: "Property Selling",
    description: "Get the best market value for your property with our strategic marketing and negotiation skills.",
  },
  {
    icon: Key,
    title: "Property Rental",
    description: "Comprehensive rental services for both landlords and tenants with hassle-free management.",
  },
  {
    icon: FileText,
    title: "Legal Documentation",
    description: "Complete legal documentation support with verified lawyers and transparent processes.",
  },
  {
    icon: Users,
    title: "Investment Consulting",
    description: "Strategic real estate investment advice to maximize your returns and portfolio growth.",
  },
  {
    icon: TrendingUp,
    title: "Market Analysis",
    description: "In-depth market research and property valuation to make informed decisions.",
  },
]

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    image: "/images/client-priya.png",
    rating: 5,
    text: "Guruji Real Estate made my home buying journey incredibly smooth. Their expertise and dedication helped me find the perfect property within my budget.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Pune",
    image: "/images/client-rajesh.png",
    rating: 5,
    text: "Exceptional service and professional approach. They handled all the legal formalities and made the entire process hassle-free.",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Mumbai",
    image: "/images/client-anita.png",
    rating: 5,
    text: "Highly recommend Guruji Real Estate for their transparency and honest guidance. They truly understand client needs and deliver excellent results.",
  },
]
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchLocation, setSearchLocation] = useState("")
  const [searchType, setSearchType] = useState("")
  const [searchBudget, setSearchBudget] = useState("")
  const [filteredProperties, setFilteredProperties] = useState(properties)

  const handleWhatsApp = () => {
    window.open("https://wa.me/918448966285?text=Hello, I'm interested in your real estate services", "_blank")
  }

  const handleSearch = () => {
    let filtered = properties

    // Filter by location
    if (searchLocation && searchLocation !== "all") {
      filtered = filtered.filter((property) => property.location.toLowerCase().includes(searchLocation.toLowerCase()))
    }

    // Filter by property type
    if (searchType && searchType !== "all") {
      filtered = filtered.filter((property) => property.type.toLowerCase() === searchType.toLowerCase())
    }

    // Filter by budget range
    if (searchBudget && searchBudget !== "all") {
      filtered = filtered.filter((property) => {
        // Extract numeric value from price string
        const priceStr = property.price.replace(/[^\d.]/g, '')
        const priceValue = parseFloat(priceStr)
        
        // Convert to Crores based on whether it's Lakh or Crore
        const isLakh = property.price.includes("Lakh")
        const priceInCrores = isLakh ? priceValue / 100 : priceValue

        // Apply budget filter
        switch (searchBudget) {
          case "1-2":
            return priceInCrores >= 1 && priceInCrores <= 2
          case "2-5":
            return priceInCrores > 2 && priceInCrores <= 5
          case "5-10":
            return priceInCrores > 5 && priceInCrores <= 10
          case "10+":
            return priceInCrores > 10
          default:
            return true
        }
      })
    }

    setFilteredProperties(filtered)

    // Scroll to properties section
    document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })
  }

  const resetSearch = () => {
    setSearchLocation("")
    setSearchType("")
    setSearchBudget("")
    setFilteredProperties(properties)
  }

  return (
    <div className="min-h-screen">
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
            <div>Greater Noida, Uttar Pradesh, India</div>
          </div>
        </div>
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/guruji-logo.png"
              alt="Guruji Real Estate Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div>
              <h1 className="text-xl font-bold text-blue-600">Guruji Real Estate</h1>
              <p className="text-sm text-gray-600">Premium Properties</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="#properties" className="text-gray-700 hover:text-blue-600">
              Properties
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
           
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-gradient-to-r from-black/70 to-black/50"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Find Your <span className="text-orange-500">Dream Home</span>
            </h1>
            <p className="text-xl mb-8">
              Discover premium properties with Guruji Real Estate. Your trusted partner in real estate excellence.
            </p>

            {/* Search Form */}
            <Card className="bg-white/95 backdrop-blur-sm p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                   <Select value={searchLocation} onValueChange={setSearchLocation}></Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                  <Select value={searchType} onValueChange={setSearchType}></Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                  <Select value={searchBudget} onValueChange={setSearchBudget}></Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">₹1-2 Crore</SelectItem>
                      <SelectItem value="2-5">₹2-5 Crore</SelectItem>
                      <SelectItem value="5-10">₹5-10 Crore</SelectItem>
                      <SelectItem value="10+">₹10+ Crore</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <div className="w-full space-y-2">
                    <Button
                      onClick={handleSearch}
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-base font-medium"
                    >
                      Search Properties
                    </Button>
                    {(searchLocation || searchType || searchBudget) && (
                      <Button onClick={resetSearch} variant="outline" className="w-full h-10 text-sm bg-transparent">
                        Clear Filters
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
              <div className="text-lg">Properties Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
              <div className="text-lg">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-lg">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-lg">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600">
              Discover our handpicked selection of premium properties that offer exceptional value and luxury living
            </p>
            {(searchLocation || searchType || searchBudget) && (
              <div className="mt-4 flex items-center justify-center">
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm">
                  {filteredProperties.length} properties found
                  {searchLocation && ` in ${searchLocation}`}
                  {searchType && ` • ${searchType}`}
                  {searchBudget && ` • ₹${searchBudget} range`}
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Properties Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any properties matching your search criteria. Try adjusting your filters.
                  </p>
                  <Button onClick={resetSearch} variant="outline">
                    Clear All Filters
                  </Button>
                </div>
              </div>
            ) : (
              filteredProperties.map((property) => (
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
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      <span>{property.bedrooms}</span>
                    </div>
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
          <div className="text-center mt-12">
            <Link href="/properties">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
                View All Properties
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive real estate solutions tailored to meet all your property needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-lg text-blue-100">
              Hear from our satisfied clients who found their dream homes with Guruji Real Estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-orange-400">
                        ⭐
                      </div>
                    ))}
                  </div>

                  <p className="text-blue-100 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Guruji Real Estate</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 15 years of excellence in the real estate industry, Guruji Real Estate has established itself
                as Mumbai's most trusted property consultant. We specialize in luxury residential and commercial
                properties, delivering exceptional service and unmatched expertise.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our team of certified professionals is committed to understanding your unique needs and providing
                personalized solutions that exceed expectations. From first-time buyers to seasoned investors, we guide
                you through every step of your real estate journey.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Home className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-600 mb-1">4.9</div>
                  <div className="text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Guruji Real Estate Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-6 -right-6 bg-orange-500 text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">₹500Cr+</div>
                <div className="text-sm">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to find your dream property? Contact our expert team today for personalized assistance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">+91 9711161007</p>
                    <p className="text-gray-600">+91 9313069464</p>
                    <p className="text-gray-600">+91 9873734102</p>
                    <p className="text-gray-600">+91 8448966285</p>
                    <Button onClick={handleWhatsApp} className="mt-2 bg-green-500 hover:bg-green-600">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-600">Gurujirealestate005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-gray-600">Shop No. F-15, I floor</p>
                    <p className="text-gray-600">Krishna Apra Plaza, Commercial Belt</p>
                    <p className="text-gray-600">Greater Noida, GB Nagar, Uttar Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8234567890123!2d77.4876543!3d28.5876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM1JzE1LjYiTiA3N8KwMjknMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=Shop+No.+F-15,+I+floor,+krishna+Apra+Plaza,+Commercial+belt,+greater+noida,+GB+nagar+uttar+pradesh"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Guruji Real Estate Office Location"
                  ></iframe>
                </div>
              </div>
            </div>


            <div>
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+91 9999999999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your property requirements..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
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
                  <p className="text-sm text-gray-400">Premium Properties</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner in finding the perfect property. Excellence in real estate since 2008.
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
                <p>+919313069464</p>
                <p>+919873734102</p>
                <p>+918448966285</p>
                <p>Gurujirealestate005@gmail.com</p>
                <p>Krishna Apra Plaza Commercial Belt , Greater Noida, UP</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy;  Guruji Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
