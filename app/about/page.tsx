
import { TrendingUp, Users, Home, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import HeadNav from "@/components/head";
import FooterFun from "@/components/footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Faq02 from "@/components/faq";
import Head from "next/head";

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>About Guruji Real Estate | Trusted Property Dealer in Greater Noida</title>
        <meta name="description" content="Learn about Guruji Real Estate, Greater Noida's leading property dealer. Discover our experience, client satisfaction, and expertise in residential and commercial real estate." />
        <meta name="keywords" content="About Guruji Real Estate, Property Dealer, Greater Noida, Real Estate Consultant, Residential Properties, Commercial Properties, Investment, Client Satisfaction" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="About Guruji Real Estate | Trusted Property Dealer in Greater Noida" />
        <meta property="og:description" content="Meet Guruji Real Estate, the most trusted property consultant in Greater Noida. 15+ years experience, 1000+ happy clients, ₹500Cr+ properties sold." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gurujirealestate.com/about" />
        <meta property="og:image" content="/images/guruji-logo.png" />
      </Head>
      <section id="about" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                About Guruji Real Estate
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6">
                Guruji Real Estate is a leading real estate agency in Greater Noida, specializing in residential and commercial property sales, rentals, and investments. Our expert team provides end-to-end solutions for home buyers, sellers, and investors, ensuring transparency, trust, and satisfaction at every step.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                We offer a wide range of properties including luxury apartments, villas, commercial spaces, and investment opportunities. Our commitment to excellence and personalized service has made us the preferred choice for real estate in Greater Noida.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
                <strong>Why Choose Us?</strong> <br />
                • 15+ years of industry experience<br />
                • 1000+ satisfied clients<br />
                • ₹500Cr+ worth of properties sold<br />
                • 4.9/5 average client rating<br />
                • Certified property consultants<br />
                • Legal and documentation support<br />
                • Investment advisory and market research<br />
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
                Connect with us for property buying, selling, renting, and investment consulting in Greater Noida. Your dream home or perfect investment is just a call away!
              </p>
              <div className="flex gap-4 mb-8">
                <a
                  href="https://www.facebook.com/profile.php?id=61579362285948"
                  target="_blank"
                  rel="noopener"
                  aria-label="Facebook"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-blue-50 transition-all"
                >
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-pink-50 transition-all"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                  <span className="text-sm font-medium text-gray-700">Instagram</span>
                </a>
                <WhatsAppButton />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Home className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">1000+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">4.9</div>
                  <div className="text-xs sm:text-sm text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col gap-6 items-center">
              <Image
                src="/Greater-noida2.jpg"
                alt="Property Dealer In Greater Noida"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
              <Image
                src="/Greater-noida1.avif"
                alt="Greater Noida Property"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
              <Image
                src="/Greater-noida3.avif"
                alt="Luxury Apartment Greater Noida"
                width={600}
                height={400}
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
      <Faq02 />
    </div>
  );
}