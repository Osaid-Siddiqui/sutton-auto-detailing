import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "../../components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", to: "home" },
  { label: "About Us", to: "about" },
  { label: "Services", to: "services" },
  { label: "Gallery", to: "gallery" },
  { label: "Pricing", to: "pricing" },
  { label: "Testimonials", to: "testimonials" },
  { label: "Contact", to: "contact" },
];

const services = [
  {
    title: "Interior Detailing",
    value: "interior",
    description: "Deep cleaning, vacuuming, and leather conditioning for a pristine interior.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop",
  },
  {
    title: "Exterior Detailing",
    value: "exterior",
    description: "Wash, polish, wax, and protection coating for a showroom shine.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
  },
  {
    title: "Full Detailing",
    value: "full",
    description: "Complete inside-out service for your vehicle with premium care.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  },
  {
    title: "Ceramic Coating",
    value: "ceramic",
    description: "Long-lasting shine and superior surface protection for years to come.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
  },
];

const galleryImages = [
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2Fd1c9da1f326d4092984306e18b35c97b?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F760b4cd23f004939b7f9bcc34212cd8f?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2Fc66abd2976d147df94f9030a056c2776?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2Fbe76906aa10f492093de7afb9a219d6e?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F63cd67eadf7a443386d88c8c494285fb?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F4ec3c28f8bd34d3db04d97ef5aaadd87?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F1e5aa21de4cc43e5b4a0809e2438dbb5?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F704af9fd64f9467797f8ef19e4ebb72c?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2Ffabe0480989f49398a9a3935578daa48?format=webp&width=800&height=1200",
  "https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2F9a05208d3aa14d47bb0e19497f054047?format=webp&width=800&height=1200",
];

const pricingPlans = [
  {
    name: "Basic Detail",
    price: "$99",
    features: [
      "Exterior wash & dry",
      "Tire shine",
      "Window cleaning",
      "Interior vacuum",
      "Dashboard wipe down",
    ],
  },
  {
    name: "Standard Detail",
    price: "$149",
    features: [
      "Everything in Basic",
      "Clay bar treatment",
      "Wax application",
      "Deep interior cleaning",
      "Leather conditioning",
    ],
  },
  {
    name: "Premium Detail",
    price: "$199",
    features: [
      "Everything in Standard",
      "Engine bay cleaning",
      "Headlight restoration",
      "Pet hair removal",
      "Odor elimination",
    ],
    popular: true,
  },
];

const testimonials = [
  {
    name: "John Smith",
    rating: 5,
    text: "Absolutely amazing service! My car looks brand new. The attention to detail is incredible and the team was very professional.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sarah Johnson",
    rating: 5,
    text: "Best detailing service in Montgomery! They transformed my SUV completely. Highly recommend the ceramic coating package.",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    name: "Michael Brown",
    rating: 5,
    text: "Outstanding work! The before and after difference is night and day. Will definitely be coming back for regular maintenance.",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    name: "Emily Davis",
    rating: 5,
    text: "Professional, punctual, and perfect results. My car has never looked this good. Worth every penny!",
    image: "https://i.pravatar.cc/150?img=47",
  },
];

export const Homepage = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="flex flex-col items-center bg-black">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b border-gray-800">
        <div className="flex w-full mx-auto justify-between items-center px-4 md:px-6 py-3 md:py-4">
          <img
            src="https://c.animaapp.com/mgjq4pouROb7EA/img/whatsapp_image_2025-10-08_at_6-23-49_pm-removebg-preview.png"
            alt="Sutton Auto Details"
            className="h-16 md:h-24 object-contain"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(item.to)}
                className={`relative text-white text-sm lg:text-base font-medium cursor-pointer group transition-colors ${
                  activeSection === item.to ? "text-[#e50914]" : ""
                }`}
              >
                {item.label}
                <span className={`absolute bottom-[-4px] left-0 h-0.5 bg-[#e50914] transition-all duration-300 ${
                  activeSection === item.to ? "w-full" : "w-0 group-hover:w-full"
                }`} />
                <span className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => {
                    setActiveSection(item.to);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-white text-base font-medium cursor-pointer px-4 py-2 rounded transition-colors ${
                    activeSection === item.to
                      ? "bg-[#e50914] text-white"
                      : "hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </header>

      {/* Desktop Contact Button */}
      <Link to="contact" smooth={true} offset={-80} duration={500}>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-[#e50914] text-black px-5 py-3 rounded-l-xl shadow-2xl cursor-pointer hover:brightness-110"
        >
          Contact Us
        </motion.div>
      </Link>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center pt-28 md:pt-20 px-4 md:px-6"
        style={{
          backgroundImage: "linear-gradient(rgba(229, 9, 20, 0.5), rgba(0, 0, 0, 0.6)), url('https://cdn.builder.io/api/v1/image/assets%2F5ea4b1680de74be58c62aa3fdc28c495%2Fbab6dea48bcc42e08e008f6fb3ad3b3a?format=webp&width=800&height=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6"
          >
            Montgomery's Premier Auto Detailing Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white mb-3 md:mb-4"
          >
            Interior, exterior, and ceramic coating services — delivered with precision and care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 italic"
          >
            "Bringing your vehicle's shine back to life — inside and out."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          >
            <Link to="services" smooth={true} offset={-80} duration={500}>
              <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105">
                View Services
              </Button>
            </Link>
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg bg-white hover:bg-gray-100 text-[#e50914] rounded-lg transition-transform hover:scale-105">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              About <span className="text-[#e50914]">Us</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto mb-6 md:mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center order-2 md:order-1"
            >
              <img
                src="https://c.animaapp.com/mgjq4pouROb7EA/img/image-removebg-preview_1.png"
                alt="Sutton Auto Details"
                className="w-full max-w-xs md:max-w-md rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:space-y-6 order-1 md:order-2"
            >
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                At <span className="font-bold text-[#e50914]">Sutton Auto Details</span>, we're passionate about making your vehicle look its absolute best. Based in Montgomery and serving surrounding areas, we bring professional-grade detailing services right to your doorstep.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                With years of experience and a commitment to excellence, our team uses only premium products and proven techniques to restore and protect your vehicle's appearance. Whether it's a quick refresh or a complete transformation, we treat every car like it's our own.
              </p>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                We believe in quality over quantity, attention to detail, and customer satisfaction above all else. Your vehicle deserves the best care, and that's exactly what we deliver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Our <span className="text-[#e50914]">Services</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto" />
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-6 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                    {services[currentServiceIndex].title}
                  </h3>
                  <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                    {services[currentServiceIndex].description}
                  </p>
                  <Link to="contact" smooth={true} offset={-80} duration={500}>
                    <Button
                      onClick={() => setSelectedService(services[currentServiceIndex].value)}
                      className="px-6 md:px-8 py-3 md:py-4 bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105 w-fit text-base md:text-base"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
                <div className="h-64 md:h-full">
                  <img
                    src={services[currentServiceIndex].image}
                    alt={services[currentServiceIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>



            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentServiceIndex ? "bg-[#e50914] w-8" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Before & After */}
      <section id="gallery" className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Our <span className="text-[#e50914]">Work</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto mb-3 md:mb-4" />
            <p className="text-base md:text-xl text-gray-300">From the stitch to the signal, precision lives here.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-16 md:py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Our <span className="text-[#e50914]">Pricing</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto mb-3 md:mb-4" />
            <p className="text-base md:text-xl text-gray-300">Choose the perfect package for your vehicle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative w-full bg-gradient-to-b from-gray-900 to-black rounded-xl md:rounded-2xl shadow-xl p-6 border-2 ${
                  plan.popular ? "border-[#e50914] md:transform md:scale-105" : "border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e50914] text-white px-4 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#e50914]">{plan.price}</span>
                </div>
                <ul className="space-y-2 md:space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                      <span className="text-[#e50914] mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="contact" smooth={true} offset={-80} duration={500}>
                  <Button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 rounded-lg transition-transform hover:scale-105 ${
                      plan.popular
                        ? "bg-[#e50914] hover:bg-[#b8070f] text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
                    }`}
                  >
                    Book Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2 bg-[#e50914] text-white px-4 py-2 rounded-l-full shadow-2xl"
          >
            <span className="font-extrabold tracking-wide">Limited Time Offer</span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-16 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              What Our <span className="text-[#e50914]">Clients Say</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto" />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-6 md:p-12 shadow-2xl border border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].name}
                  className="w-16 md:w-20 h-16 md:h-20 rounded-full mb-4 md:mb-6 border-4 border-[#e50914]"
                />
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <span key={i} className="text-[#e50914] text-xl md:text-2xl">★</span>
                  ))}
                </div>
                <p className="text-base md:text-xl text-gray-300 mb-4 md:mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonialIndex].text}"
                </p>
                <h4 className="text-lg md:text-2xl font-bold text-white">
                  {testimonials[currentTestimonialIndex].name}
                </h4>
              </div>
            </motion.div>



            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonialIndex ? "bg-[#e50914] w-8" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">
              Get In <span className="text-[#e50914]">Touch</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-[#e50914] mx-auto mb-3 md:mb-4" />
            <p className="text-base md:text-xl text-gray-300">Ready to give your vehicle the care it deserves?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 md:space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-3 md:p-4 rounded-lg flex-shrink-0">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Phone</h3>
                  <a href="tel:334-399-2277" className="text-sm md:text-base text-gray-300 hover:text-[#e50914] transition-colors">
                    334-399-2277
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-3 md:p-4 rounded-lg flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Email</h3>
                  <a
                    href="mailto:suttonautodetails@gmail.com"
                    className="text-sm md:text-base text-gray-300 hover:text-[#e50914] transition-colors break-all"
                  >
                    suttonautodetails@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-3 md:p-4 rounded-lg flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white mb-1 md:mb-2">Service Area</h3>
                  <p className="text-sm md:text-base text-gray-300">Montgomery and surrounding areas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black p-6 md:p-8 rounded-xl md:rounded-2xl border border-gray-800"
            >
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Service</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="full">Full Detailing</option>
                    <option value="ceramic">Ceramic Coating</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Plan</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  >
                    <option value="">Select a plan</option>
                    {pricingPlans.map((plan) => (
                      <option key={plan.name} value={plan.name}>
                        {plan.name} - {plan.price}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors text-base"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-white mb-1 md:mb-2 font-medium text-sm md:text-base">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors resize-none text-base"
                    placeholder="Tell us about your vehicle and service needs..."
                  />
                </div>
                <Button className="w-full py-3 md:py-4 bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105 text-base">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-10 md:py-12 bg-black border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div>
              <img
                src="https://c.animaapp.com/mgjq4pouROb7EA/img/whatsapp_image_2025-10-08_at_6-23-49_pm-removebg-preview.png"
                alt="Sutton Auto Details"
                className="h-16 md:h-20 object-contain mb-4"
              />
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                Montgomery's premier auto detailing service. Bringing your vehicle's shine back to life.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-gray-400 hover:text-[#e50914] transition-colors cursor-pointer text-xs md:text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                <li>334-399-2277</li>
                <li className="break-all">suttonautodetails@gmail.com</li>
                <li>Montgomery, AL</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Newsletter</h4>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Subscribe for updates and special offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 md:px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#e50914] focus:outline-none text-xs md:text-sm"
                />
                <Button className="bg-[#e50914] hover:bg-[#b8070f] text-white p-2 rounded-lg flex-shrink-0">
                  <Send size={18} />
                </Button>
              </div>
              <div className="flex gap-4 mt-4 md:mt-6">
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-xs md:text-sm">
              © 2025 Sutton Auto Details. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
