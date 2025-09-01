import { Card, CardContent } from "@/components/ui/card";
import Head from "next/head";
import {
  MapPin,
  Home,
  DollarSign,
  Key,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";


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
export default function ServicesPage() {

  return (
    <>
      <Head>
        <title>Real Estate Services in Greater Noida | Buy, Sell, Rent, Invest | Guruji Real Estate</title>
        <meta name="description" content="Discover top real estate services in Greater Noida. Buy, sell, rent, or invest in residential and commercial properties with Guruji Real Estate. Expert consultants, legal support, and market research for your property needs." />
        <meta name="keywords" content="Real Estate Services, Greater Noida, Buy Property, Sell Property, Rent Property, Investment, Property Consultant, Legal Documentation, Market Research, Guruji Real Estate" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Real Estate Services in Greater Noida | Guruji Real Estate" />
        <meta property="og:description" content="Buy, sell, rent, or invest in Greater Noida properties with Guruji Real Estate. Trusted consultants for residential and commercial real estate." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gurujirealestate.com/services" />
        <meta property="og:image" content="/images/guruji-logo.png" />
      </Head>
      <main>
        {/* Services */}
        <section id="services" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Our Services
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">
                Trusted real estate company in Greater Noida offering end-to-end property solutions for buying, selling, renting, and investment.
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
                Hear from our satisfied clients who found their dream homes with Guruji Real Estate
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

      </main>
    </>
  );
}
