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
      id: 1,
      title: "Luxury 3BHK Apartment",
      location: "Bandra West, Mumbai",
      price: "₹2.5 Crore",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      area: "1,450 sq ft",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Experience luxury living in this stunning 3BHK apartment located in the heart of Bandra West. This premium property offers modern amenities, spacious rooms, and breathtaking views of the city skyline. Features contemporary design with floating wooden stairs, open-plan living, and premium finishes throughout.",
      features: [
        "Premium location in Bandra West",
        "24/7 security and concierge",
        "Swimming pool and gym",
        "Covered parking space",
        "High-speed internet ready",
        "Modern modular kitchen",
        "Balcony with city views",
        "Power backup facility",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Gym" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "2": {
      id: 2,
      title: "Modern Villa with Garden",
      location: "Juhu, Mumbai",
      price: "₹8.5 Crore",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      area: "3,200 sq ft",
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "A magnificent modern villa with a beautiful garden, located in the prestigious Juhu area. This property combines contemporary design with traditional comfort, perfect for families seeking luxury and privacy.",
      features: [
        "Prime location in Juhu",
        "Private garden and pool",
        "4 spacious bedrooms",
        "Modern architecture",
        "High-end finishes",
        "Multiple parking spaces",
        "Servant quarters",
        "Terrace garden",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Pool" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "3": {
      id: 3,
      title: "Spacious 2BHK Flat",
      location: "Andheri East, Mumbai",
      price: "₹1.8 Crore",
      type: "Apartment",
      bedrooms: 2,
      bathrooms: 2,
      area: "1,100 sq ft",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "A well-designed 2BHK apartment in Andheri East, perfect for young professionals and small families. The property offers excellent connectivity and modern amenities at an affordable price with contemporary interiors and premium finishes.",
      features: [
        "Excellent connectivity",
        "Near metro station",
        "Shopping malls nearby",
        "Good schools in vicinity",
        "24/7 water supply",
        "Power backup",
        "Covered parking",
        "Children's play area",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Gym" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "4": {
      id: 4,
      title: "Premium Penthouse",
      location: "Worli, Mumbai",
      price: "₹12.5 Crore",
      type: "Penthouse",
      bedrooms: 4,
      bathrooms: 4,
      area: "2,800 sq ft",
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "An exclusive penthouse offering panoramic city and sea views from the prestigious Worli area. This ultra-luxury property features premium finishes, private terrace, and world-class amenities for the discerning buyer.",
      features: [
        "Panoramic city and sea views",
        "Private terrace garden",
        "Premium imported fixtures",
        "Smart home automation",
        "Private elevator access",
        "Jacuzzi and spa area",
        "Wine cellar",
        "Concierge services",
      ],
      amenities: [
        { icon: Car, name: "Valet Parking" },
        { icon: Wifi, name: "Smart Home" },
        { icon: Dumbbell, name: "Private Gym" },
        { icon: Shield, name: "24/7 Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "5": {
      id: 5,
      title: "Cozy 1BHK Studio",
      location: "Powai, Mumbai",
      price: "₹95 Lakh",
      type: "Studio",
      bedrooms: 1,
      bathrooms: 1,
      area: "650 sq ft",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "A perfectly designed 1BHK studio apartment in the IT hub of Powai. Ideal for young professionals and students, offering modern amenities and excellent connectivity to major IT parks and educational institutions.",
      features: [
        "IT hub location",
        "Near IIT Bombay",
        "Metro connectivity",
        "Shopping centers nearby",
        "Fully furnished option",
        "High-speed internet",
        "Modern kitchen",
        "Balcony with lake view",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Gym" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "6": {
      id: 6,
      title: "Luxury Duplex Villa",
      location: "Versova, Mumbai",
      price: "₹6.8 Crore",
      type: "Villa",
      bedrooms: 5,
      bathrooms: 4,
      area: "4,500 sq ft",
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "A stunning duplex villa in the serene locality of Versova, offering spacious living across two floors. Perfect for large families, featuring a private garden, multiple balconies, and premium amenities.",
      features: [
        "Duplex design with 2 floors",
        "Private garden and lawn",
        "5 spacious bedrooms",
        "Multiple balconies",
        "Servant quarters",
        "2-car garage",
        "Study room",
        "Prayer room",
      ],
      amenities: [
        { icon: Car, name: "Garage" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Garden" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "7": {
      id: 7,
      title: "Commercial Office Space",
      location: "BKC, Mumbai",
      price: "₹4.2 Crore",
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 2,
      area: "2,200 sq ft",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "Premium commercial office space in the heart of Bandra Kurla Complex, Mumbai's business district. Ideal for corporate offices, startups, and professional services with modern infrastructure and excellent connectivity.",
      features: [
        "Prime BKC location",
        "Grade A office building",
        "Central air conditioning",
        "High-speed elevators",
        "24/7 power backup",
        "Ample parking space",
        "Food court in building",
        "Metro connectivity",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Cafeteria" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "8": {
      id: 8,
      title: "Sea View 3BHK Apartment",
      location: "Marine Drive, Mumbai",
      price: "₹5.5 Crore",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 3,
      area: "1,800 sq ft",
      images: [
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "An exquisite 3BHK apartment with unobstructed sea views on the iconic Marine Drive. Wake up to the sound of waves and enjoy stunning sunsets from your living room. A rare opportunity to own a piece of Mumbai's heritage.",
      features: [
        "Unobstructed sea views",
        "Iconic Marine Drive location",
        "Heritage building",
        "High ceilings",
        "Large windows",
        "Vintage charm with modern amenities",
        "Walking distance to Oval Maidan",
        "Close to business district",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Sea View" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
    "9": {
      id: 9,
      title: "Independent House",
      location: "Thane West, Mumbai",
      price: "₹3.2 Crore",
      type: "House",
      bedrooms: 4,
      bathrooms: 3,
      area: "2,500 sq ft",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
      description:
        "A beautiful independent house in the peaceful locality of Thane West. Perfect for families seeking privacy and space, featuring a private garden, terrace, and modern amenities while maintaining affordability.",
      features: [
        "Independent house with privacy",
        "Private garden and terrace",
        "4 spacious bedrooms",
        "Separate entrance",
        "Car parking for 2 vehicles",
        "Good ventilation and natural light",
        "Near schools and hospitals",
        "Peaceful residential area",
      ],
      amenities: [
        { icon: Car, name: "Parking" },
        { icon: Wifi, name: "Internet" },
        { icon: Dumbbell, name: "Garden" },
        { icon: Shield, name: "Security" },
      ],
      agent: {
        name: "Guruji Real Estate",
        phone: "+91 9999267730",
        email: "Gurujirealestate005@gmail.com",
      },
    },
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
            <div>Greater Noida, Uttar Pradesh, India</div>
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
              <p className="text-sm text-gray-600">Premium Properties</p>
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
                    <p className="text-sm text-gray-600">Premium Properties</p>
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
