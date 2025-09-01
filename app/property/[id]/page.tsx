"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Wifi,
  Dumbbell,
  Shield,
  ArrowLeft,
  Heart,
  Share2,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react"

// Mock property data - in a real app, this would come from a database
const getPropertyById = (id: string) => {
  const properties = {
  "1": {
    "id": 1,
    "title": "Spacious 3BHK Flat in Shakti Khand",
    "location": "Indirapuram, Ghaziabad",
    "price": "₹90,00,000",
    "type": "Apartment",
    "bedrooms": 3,
    "bathrooms": 2,
    "area": "93 sq. yards",
    "images": [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    "description": "Discover the best property in Indirapuram with this park-facing 3BHK flat in Shakti Khand, offering modern interiors, prime location, and ready-to-move convenience for families.",
    "features": [
      "Prime location in Indirapuram",
      "Park-facing property",
      "Spacious living areas",
      "Modern design",
      "Excellent connectivity",
      "Ready-to-move"
    ],
    "amenities": [
      { "icon": "Car", "name": "Parking" },
      { "icon": "Shield", "name": "Security" },
      { "icon": "Wifi", "name": "Internet Ready" }
    ],
    "agent": {
      "name": "Guruji Real Estate",
      "phone": "+91 9999267730",
      "email": "Gurujirealestate005@gmail.com"
    }
  },
  "2": {
    "id": 2,
    "title": "Corner Residential Plot in YEIDA Sector 20",
    "location": "Yamuna Expressway, Greater Noida",
    "price": "₹2,10,00,000",
    "type": "Residential Plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "area": "300 sq. mtr.",
    "images": [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    "description": "Invest in a premium 300 sq. mtr. east-facing corner plot in YEIDA Sector 20 near Jewar Airport, one of the best upcoming property hubs in Greater Noida with wide road access.",
    "features": [
      "Corner plot with dual 12m roads",
      "East-facing vastu compliant",
      "Near Jewar International Airport",
      "Rapid development zone",
      "Ideal for investment or self-use"
    ],
    "amenities": [
      { "icon": "Map", "name": "Wide Roads" },
      { "icon": "Shield", "name": "Gated Security" }
    ],
    "agent": {
      "name": "Guruji Real Estate",
      "phone": "+91 9999267730",
      "email": "Gurujirealestate005@gmail.com"
    }
  },
  "3": {
    "id": 3,
    "title": "Affordable Registered Plot in YEIDA Sector 18",
    "location": "Yamuna Expressway, Greater Noida",
    "price": "₹1,00,00,000",
    "type": "Residential Plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "area": "90 sq. mtr.",
    "images": [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    "description": "Secure your future with this affordable 90 sq. mtr. registered plot in Sector 18 YEIDA, just minutes from Jewar Airport, making it one of the best investment properties near Yamuna Expressway.",
    "features": [
      "Registered YEIDA plot",
      "Pocket 7E location",
      "Proximity to Jewar Airport",
      "Growing investment hub",
      "Ideal for residential use"
    ],
    "amenities": [
      { "icon": "Map", "name": "Wide Roads" },
      { "icon": "Tree", "name": "Green Surroundings" }
    ],
    "agent": {
      "name": "Guruji Real Estate",
      "phone": "+91 9999267730",
      "email": "Gurujirealestate005@gmail.com"
    }
  },
  "4": {
    "id": 4,
    "title": "Prime 120 sq. mtr. Plot in Delta 2",
    "location": "Greater Noida",
    "price": "₹2,10,00,000",
    "type": "Residential Plot",
    "bedrooms": 0,
    "bathrooms": 0,
    "area": "120 sq. mtr.",
    "images": [
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg",
      "/placeholder.jpg"
    ],
    "description": "Own a premium 120 sq. mtr. completion plot in Delta 2, Greater Noida, located near Pari Chowk and Delta 1 Metro, perfect for building your dream home in the best locality of Greater Noida.",
    "features": [
      "CC plot with clear title",
      "Near Pari Chowk metro station",
      "Excellent road and metro connectivity",
      "Developed residential area",
      "High investment potential"
    ],
    "amenities": [
      { "icon": "Train", "name": "Metro Nearby" },
      { "icon": "School", "name": "Schools Nearby" },
      { "icon": "Shield", "name": "Safe Locality" }
    ],
    "agent": {
      "name": "Guruji Real Estate",
      "phone": "+91 9999267730",
      "email": "Gurujirealestate005@gmail.com"
    }
  }
}


  return properties[id as keyof typeof properties] || null
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${property.title} located at ${property.location}. Price: ${property.price}. Can you provide more details?`
    window.open(`https://wa.me/919999267730?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+919999267730", "_self")
  }

  const handleEmail = () => {
    const subject = `Inquiry about ${property.title}`
    const body = `Hi,\n\nI'm interested in the following property:\n\nTitle: ${property.title}\nLocation: ${property.location}\nPrice: ${property.price}\n\nPlease provide more details.\n\nThank you.`
    window.open(
      `mailto:${property.agent.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self",
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9999267730</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Gurujirealestate005@gmail.com</span>
              </div>
            </div>
            <div>Shop No. F-15, Krishna Apra Plaza, Greater Noida, UP</div>
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
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Images */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Image
                    src={property.images[0] || "/placeholder.svg"}
                    alt={property.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                {property.images.slice(1, 4).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{property.location}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary">{property.type}</Badge>
                  <div className="flex items-center gap-6 text-gray-600">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-1" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-1" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-5 h-5 mr-1" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                </div>

                <div className="text-4xl font-bold text-blue-600 mb-6">{property.price}</div>

                <Separator className="my-6" />

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Description</h2>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                      <amenity.icon className="w-8 h-8 text-blue-600 mb-2" />
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <Card className="mb-8 sticky top-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>

                <div className="flex items-center gap-3 mb-6">
                  <Image
                    src="/images/guruji-logo.png"
                    alt="Guruji Real Estate Logo"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{property.agent.name}</h4>
        
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-600" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-600" />
                    <span className="text-sm">{property.agent.email}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleCall} className="w-full bg-transparent" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button onClick={handleWhatsApp} className="w-full bg-green-500 hover:bg-green-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button onClick={handleEmail} className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Property Summary */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Property Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type</span>
                    <span className="font-medium">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bedrooms</span>
                    <span className="font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bathrooms</span>
                    <span className="font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Area</span>
                    <span className="font-medium">{property.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location</span>
                    <span className="font-medium">{property.location}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-semibold">Price</span>
                    <span className="font-bold text-blue-600 text-lg">{property.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
