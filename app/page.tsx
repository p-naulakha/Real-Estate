"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Home,
  DollarSign,
  Key,
  FileText,
  Users,
  TrendingUp,
  Phone,
  Mail,
  MessageCircle,
  Heart,
  Eye,
  Bed,
  Bath,
  Square,
  ArrowRight,
} from "lucide-react";

import Head from "next/head";
// Properties JSON
const properties = [
  {
    serial_no: 1,
    property_name: "Shakti Khand",
    location: "Indirapuram",
    property_size: "93 sq. yards",
    BHK: "3 BHK",
    Price: "Rs 90,00,000",
    Photos: "/placeholder-properties.jpg",
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
    Photos: "/Greater-noida2.jpg",
    brief_description:
      "Premium 300 sq. mtr. corner plot in YEIDA Sector 20, Yamuna Expressway. East-facing with dual 12 mtr. wide roads. Ideal for building your dream home near Jewar Airport — one of the fastest-growing real estate destinations in Greater Noida.",
    Construction_status: "Plot",
  },
  {
    serial_no: 4,
    property_name: "Greater Noida Delta 2",
    location: "Greater Noida",
    property_size: "120 sq. mtr.",
    BHK: "CC Plot",
    Price: "Rs 2,10,00,000",
    Photos: "/Greater-noida1.avif",
    brief_description:
      "Prime 120 sq. mtr. completion plot available in Delta 2, Greater Noida. Located near Delta 1 Metro Station and just 1 km from Pari Chowk. One of the best investment properties in Greater Noida with excellent metro and road connectivity.",
    Construction_status: "Plot",
  },
];

const services = [
  {
    icon: Home,
    title: "Buy Property in Greater Noida",
    description:
      "Find the best residential and commercial real estate in Greater Noida with our trusted property consultants. From affordable flats to luxury villas, we help you buy real estate in Greater Noida with ease and transparency.",
  },
  {
    icon: DollarSign,
    title: "Sell Property in Greater Noida",
    description:
      "Looking to sell your property in Greater Noida? Our real estate agents ensure maximum market exposure, professional negotiation, and the best price for your property through a trusted process.",
  },
  {
    icon: Key,
    title: "Property Rental & Leasing",
    description:
      "We connect landlords and tenants with verified rental and leasing options across Greater Noida. Whether it’s residential flats or commercial property, our rental services make the process quick and hassle-free.",
  },
  {
    icon: FileText,
    title: "Legal & Documentation Support",
    description:
      "Our real estate company in Greater Noida provides complete assistance with property registration, agreements, and legal documentation. Verified lawyers ensure a smooth and transparent property transaction.",
  },
  {
    icon: Users,
    title: "Real Estate Investment Consulting",
    description:
      "Want to invest in real estate projects in Greater Noida? Our advisors guide you through the best opportunities in residential and commercial real estate, helping you maximize ROI and long-term growth.",
  },
  {
    icon: TrendingUp,
    title: "Market Research & Property Valuation",
    description:
      "Get accurate real estate market analysis in Greater Noida with expert insights on property prices, trends, and investment hotspots. We help you make informed property decisions backed by data.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    image: "/women.webp",
    rating: 5,
    text: "I was looking to buy real estate in Greater Noida, and Guruji Real Estate made the process effortless. Their team of expert real estate agents in Greater Noida helped me find a spacious flat at the best price with complete legal support.",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Chandigarh",
    image: "/men.jpg",
    rating: 5,
    text: "Guruji Real Estate is truly the best real estate company in Greater Noida. They guided me through selling my commercial property with ease, ensuring great returns and handling all documentation professionally.",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Greater Noida",
    image: "/women.webp",
    rating: 5,
    text: "If you’re searching for trusted real estate consultants in Greater Noida, I highly recommend Guruji Real Estate. Their transparent advice and deep knowledge of real estate projects in Greater Noida helped me make the right investment.",
  },
];

import { useState } from "react";
import Faq02 from "@/components/faq";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [searchBudget, setSearchBudget] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/918448966285?text=Hello, I'm interested in your real estate services",
      "_blank"
    );
  };

  const handleSearch = () => {
    let filtered = properties;

    // Filter by location
    if (searchLocation && searchLocation !== "all") {
      filtered = filtered.filter((property) =>
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    // Filter by property type
    if (searchType && searchType !== "all") {
      filtered = filtered.filter(
        (property) => property.BHK.toLowerCase() === searchType.toLowerCase()
      );
    }

    // Filter by budget range
   

    setFilteredProperties(filtered);

    // Scroll to properties section
    document
      .getElementById("properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const resetSearch = () => {
    setSearchLocation("");
    setSearchType("");
    setSearchBudget("");
    setFilteredProperties(properties);
  };

  return (
    <>
      <Head>
        <title>Guruji Real Estate | Buy, Sell, Rent Properties in Greater Noida</title>
        <meta name="description" content="Find your dream home, plot, or commercial property in Greater Noida with Guruji Real Estate. Trusted consultants for buying, selling, and investing. Expert advice, legal support, and best deals." />
        <meta name="keywords" content="Real Estate, Greater Noida, Buy Property, Sell Property, Plots, Flats, Commercial, Investment, Guruji Real Estate" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Guruji Real Estate | Buy, Sell, Rent Properties in Greater Noida" />
        <meta property="og:description" content="Find your dream home, plot, or commercial property in Greater Noida with Guruji Real Estate. Trusted consultants for buying, selling, and investing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gurujirealestate.in/" />
        <meta property="og:image" content="/images/guruji-logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guruji Real Estate | Buy, Sell, Rent Properties in Greater Noida" />
        <meta name="twitter:description" content="Find your dream home, plot, or commercial property in Greater Noida with Guruji Real Estate." />
        <meta name="twitter:image" content="/images/guruji-logo.png" />
        <link rel="canonical" href="https://gurujirealestate.in/" />
      </Head>
      <div className="min-h-screen">


  {/* Hero Section */}
      <section
        className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-r from-black/50 to-black/50"
        style={{
          backgroundImage: 'url("/Greater-noida1.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/70"></div>
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold shadow-2xl mb-3 sm:mb-4">
              Find Your <span className="text-orange-500">Dream Home</span>
            </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
                Explore top residential and commercial properties in Greater Noida with Guruji Real Estate | Trusted real estate consultant for buying, selling, and investing in luxury apartments, villas, and commercial spaces. Find your perfect property and experience excellence in Greater Noida real estate.
            </p>

            {/* Search Form */}
            <Card className="hidden bg-white/95 backdrop-blur-sm p-4 sm:p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <Select
                    value={searchLocation}
                    onValueChange={setSearchLocation}
                  >
                    <SelectTrigger className="h-12">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <Select value={searchType} onValueChange={setSearchType}>
                    <SelectTrigger className="h-12">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range
                  </label>
                  <Select value={searchBudget} onValueChange={setSearchBudget}>
                    <SelectTrigger className="h-12">
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
                      className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-sm sm:text-base font-medium"
                    >
                      Search Properties
                    </Button>
                    {(searchLocation || searchType || searchBudget) && (
                      <Button
                        onClick={resetSearch}
                        variant="outline"
                        className="w-full h-10 text-xs sm:text-sm bg-transparent"
                      >
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
      <section className="bg-blue-600 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                1000+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Properties Sold
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold  text-white mb-2">
                1000+
              </div>
              <div className="t ext-sm sm:text-base md:text-lg">
                Happy Clients
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold  text-white mb-2">
                15+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold  text-white mb-2">
                50+
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                Team Members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                About Guruji Real Estate
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                With over 15 years of excellence in the real estate industry,
                Guruji Real Estate has established itself as Greater Noida's
                most trusted property consultant. We specialize in residential
                and commercial properties, delivering exceptional service and
                unmatched expertise.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                Our team of certified professionals is committed to
                understanding your unique needs and providing personalized
                solutions that exceed expectations. From first-time buyers to
                seasoned investors, we guide you through every step of your real
                estate journey.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                    15+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Properties Sold
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">
                    4.9
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">
                    Client Rating
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Guruji Real Estate Team"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-orange-500 text-white p-3 sm:p-4 rounded-lg">
                <div className="text-lg sm:text-2xl font-bold">₹500Cr+</div>
                <div className="text-xs sm:text-sm">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* News Section */}
  <section className="relative w-full h-[80vh] md:h-[100vh] flex items-center justify-end bg-black">
        <Image
          src="/news1.jpg"
          alt="Jewar Airport Boosts Property Prices"
          fill
          priority
          className="object-cover w-full h-full absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 w-full md:w-1/2 h-full flex items-center justify-end pr-8">
          <div className="bg-white/90 rounded-lg shadow-lg p-8 max-w-lg ml-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Real Estate News & Updates
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
              Stay updated with the latest trends, news, and insights in Greater Noida real estate.
            </p>
            <h3 className="text-xl font-bold mb-2 text-blue-700">DTR Group Secures Landmark Plot in Greater Noida</h3>
            <p className="text-sm text-gray-700 mb-3">We are proud to share that DTR Group has successfully secured a 2313 sq. mtr commercial plot in Delta II through the GNIDA auction.</p>
            <p className="text-sm text-gray-700 mb-3">This milestone marks the beginning of our maiden project in Greater Noida — a world-class development that will bring international design, luxury experiences, and modern infrastructure to the city.</p>
            <p className="text-sm text-gray-700 mb-3">Strategically located in Delta II, this upcoming project is set to redefine commercial and lifestyle spaces in one of India’s fastest-growing hubs.</p>
            <p className="text-sm text-gray-700 mb-3">👉 Official unveiling coming soon. Stay tuned!</p>
            <p className="text-sm text-gray-900 font-semibold mt-4">Delta II, Greater Noida – A New Chapter Begins</p>
          </div>
        </div>
      </section>


      {/* Featured Properties */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Properties
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Discover our exclusive listings and find your dream property.
          </p>
        </div> 
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <Home className="w-10 h-10 mx-auto text-gray-400 mb-3" />
              <h3 className="text-xl font-semibold">No Properties Found</h3>
                  <Button onClick={resetSearch} variant="outline" className="mt-4">Clear All Filters</Button>
                </div>
              ) : (
                filteredProperties.map((property) => (
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
            {/* show all button */}
            <div className="text-center mt-8">
              <Link href="/properties">
                <Button variant="outline">
                  Show All Properties
                </Button>
              </Link>
            </div>
      </section>
     

      {/* Services */}
      <section id="services" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Trusted real estate company in Greater Noida offering end-to-end
              property solutions for buying, selling, renting, and investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-blue-100">
              Hear from our satisfied clients who found their dream homes with
              Guruji Real Estate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14"
                    />
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-blue-200 text-xs sm:text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400"
                      >
                        ⭐
                      </div>
                    ))}
                  </div>

                  <p className="text-blue-100 italic text-xs sm:text-sm">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Get In Touch
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600">
              Invest smart in residential and commercial real estate in Greater Noida — get in touch with our experienced real estate agents in Greater Noida today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      +91 9711161007
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      +91 9313069464
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      +91 9873734102
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">
                      +91 8448966285
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base mb-2">
                      +91 9311538050
                    </p>
                    <Button
                      onClick={handleWhatsApp}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Us
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base break-all">
                      Gurujirealestate005@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Address</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Shop No. F-15, Ist floor
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Krishna Apra Plaza, Commercial Belt
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Greater Noida, GB Nagar, Uttar Pradesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden h-48 sm:h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3503.0!2d77.5110092!3d28.471035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDI4JzE1LjciTiA3N8KwMzAnMzkuNiJF!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Guruji Real Estate Office Location"
                    className="w-full h-full cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/28%C2%B028'15.7%22N+77%C2%B030'39.6%22E/@28.4705299,77.5092264,15.97z/data=!4m4!3m3!8m2!3d28.471035!4d77.5110092?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                        "_blank"
                      )
                    }
                  ></iframe>
                  {/* Mobile map overlay for better interaction */}
                  <div
                    className="absolute inset-0 bg-transparent cursor-pointer"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/28%C2%B028'15.7%22N+77%C2%B030'39.6%22E/@28.4705299,77.5092264,15.97z/data=!4m4!3m3!8m2!3d28.471035!4d77.5110092?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                        "_blank"
                      )
                    }
                  ></div>
                  <div className="absolute bottom-3 right-3">
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps/place/28%C2%B028'15.7%22N+77%C2%B030'39.6%22E/@28.4705299,77.5092264,15.97z/data=!4m4!3m3!8m2!3d28.471035!4d77.5110092?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                          "_blank"
                        )
                      }
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Open in Maps
                    </Button>
                  </div>
                </div>

                {/* Direct Google Maps link for mobile */}
                <div className="mt-3">
                  <Button
                    variant="outline"
                    className="w-full bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/place/28%C2%B028'15.7%22N+77%C2%B030'39.6%22E/@28.4705299,77.5092264,15.97z/data=!4m4!3m3!8m2!3d28.471035!4d77.5110092?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D",
                        "_blank"
                      )
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>

                {/* Coordinates display */}
                <div className="mt-3 text-sm text-gray-600 text-center">
                  <p>📍 Coordinates: 28°28'15.7"N 77°30'39.6"E</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="+91 9999999999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base resize-none"
                    placeholder="Tell us about your property requirements..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-sm sm:text-base"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* faq  */}
      <section>
        <Faq02 />
      </section>

 
    </div>
    </>
  );
}
