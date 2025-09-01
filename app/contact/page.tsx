"use client";
import Head from "next/head";
import Image from "next/image";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeadNav from "@/components/head";
import Footer from "@/components/footer";  
import Faq02 from "@/components/faq";

export default function ContactPage() {
	const handleWhatsApp = () => {
		window.open("https://wa.me/918448966285?text=Hello, I'm interested in your real estate services", "_blank");
	};

	return (
		<div className="min-h-screen bg-gray-50">
			<Head>
				<title>Contact Us | Guruji Real Estate - Greater Noida Property Consultant</title>
				<meta name="description" content="Contact Guruji Real Estate for expert property buying, selling, and rental services in Greater Noida. Get in touch for personalized real estate solutions." />
				<meta name="keywords" content="Real Estate, Greater Noida, Property Consultant, Buy Property, Sell Property, Rent Property, Investment, Legal Documentation, Market Analysis" />
			</Head>
            <HeadNav />
			<section className="py-12 sm:py-16">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center mb-8 sm:mb-12">
						<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-3">Contact Guruji Real Estate</h1>
						<p className="text-sm sm:text-base md:text-lg text-gray-600">
							Ready to find your dream property in Greater Noida? Reach out to our expert team for personalized assistance and real estate solutions.
						</p>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
						<div>
							<Card className="p-6 mb-8">
								<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Contact Information</h2>
								<div className="space-y-4">
									<div className="flex items-center gap-3 text-gray-700">
										<Phone className="w-5 h-5 text-blue-600" />
										<span className="font-medium">+91 9711161007</span>
									</div>
									<div className="flex items-center gap-3 text-gray-700">
										<Mail className="w-5 h-5 text-blue-600" />
										<span className="font-medium">Gurujirealestate005@gmail.com</span>
									</div>
									<div className="flex items-center gap-3 text-gray-700">
										<MapPin className="w-5 h-5 text-blue-600" />
										<span className="font-medium">Greater Noida, Uttar Pradesh, India</span>
									</div>
								</div>
								<div className="mt-8">
									<Button onClick={handleWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
										<MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Us
									</Button>
								</div>
							</Card>
							<div className="rounded-lg overflow-hidden shadow-lg">
								<Image
									src="/images/guruji-logo.png"
									alt="Guruji Real Estate Logo"
									width={120}
									height={120}
									className="mx-auto mb-4 rounded-lg"
								/>
								<p className="text-center text-gray-500 text-sm mb-4">
									Your trusted partner in property buying, selling, and rental in Greater Noida.
								</p>
							</div>
						</div>
						<div>
							<Card className="p-6">
								<h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Send Us a Message</h2>
								<form className="space-y-6">
									<div>
										<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
										<input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
									</div>
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
										<input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Email" />
									</div>
									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
										<input type="tel" id="phone" name="phone" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" />
									</div>
									<div>
										<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
										<textarea id="message" name="message" rows={4} required className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?" />
									</div>
									<Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Send Message</Button>
								</form>
							</Card>
						</div>
					</div>
				</div>
			</section>
            <section>
				<Faq02 />
            </section>
            <Footer />
		</div>
	);
}
