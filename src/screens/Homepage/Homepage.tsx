import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Button } from "../../components/ui/button";
import { Mail, Phone, MapPin, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Send } from "lucide-react";

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
    description: "Deep cleaning, vacuuming, and leather conditioning for a pristine interior.",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop",
  },
  {
    title: "Exterior Detailing",
    description: "Wash, polish, wax, and protection coating for a showroom shine.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
  },
  {
    title: "Full Detailing",
    description: "Complete inside-out service for your vehicle with premium care.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&h=600&fit=crop",
  },
  {
    title: "Ceramic Coating",
    description: "Long-lasting shine and superior surface protection for years to come.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop",
  },
];

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1449130015084-2dc954a6d1ae?w=600&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=600&fit=crop",
  },
  {
    before: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=600&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&h=600&fit=crop",
  },
  {
    before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=600&fit=crop",
  },
  {
    before: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=600&fit=crop",
    after: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&h=600&fit=crop",
  },
  {
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=600&fit=crop",
    after: "https://c.animaapp.com/mgjq4pouROb7EA/img/image.png",
  },
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
  {
    name: "Deluxe Detail",
    price: "$299",
    features: [
      "Everything in Premium",
      "Paint correction",
      "Scratch removal",
      "Trim restoration",
      "Undercarriage wash",
    ],
  },
  {
    name: "Ceramic Coating",
    price: "$499",
    features: [
      "Everything in Deluxe",
      "Ceramic coating application",
      "5-year protection",
      "Hydrophobic finish",
      "UV protection",
    ],
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

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center bg-black">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg border-b border-gray-800">
        <div className="flex w-full max-w-[1280px] mx-auto justify-between items-center px-6 py-4">
          <img
            src="https://c.animaapp.com/mgjq4pouROb7EA/img/whatsapp_image_2025-10-08_at_6-23-49_pm-removebg-preview.png"
            alt="Sutton Auto Details"
            className="h-16 object-contain"
          />

          <nav className="flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(item.to)}
                className={`relative text-white text-base font-medium cursor-pointer group transition-colors ${
                  activeSection === item.to ? "text-[#e50914]" : ""
                }`}
              >
                {item.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#e50914] transition-all duration-300 group-hover:w-full" />
                <span className="absolute inset-0 bg-[#e50914] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded" />
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen w-full flex items-center justify-center pt-20"
        style={{
          backgroundImage: "linear-gradient(rgba(229, 9, 20, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=1080&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Montgomery's Premier Auto Detailing Experts
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-white mb-4"
          >
            Interior, exterior, and ceramic coating services — delivered with precision and care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-white/90 mb-8 italic"
          >
            "Bringing your vehicle's shine back to life — inside and out."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Link to="services" smooth={true} offset={-80} duration={500}>
              <Button className="px-8 py-6 text-lg bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105">
                View Services
              </Button>
            </Link>
            <Link to="contact" smooth={true} offset={-80} duration={500}>
              <Button className="px-8 py-6 text-lg bg-white hover:bg-gray-100 text-[#e50914] rounded-lg transition-transform hover:scale-105">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              About <span className="text-[#e50914]">Us</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img
                src="https://c.animaapp.com/mgjq4pouROb7EA/img/image-removebg-preview_1.png"
                alt="Sutton Auto Details"
                className="w-full max-w-md rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                At <span className="font-bold text-[#e50914]">Sutton Auto Details</span>, we're passionate about making your vehicle look its absolute best. Based in Montgomery and serving surrounding areas, we bring professional-grade detailing services right to your doorstep.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With years of experience and a commitment to excellence, our team uses only premium products and proven techniques to restore and protect your vehicle's appearance. Whether it's a quick refresh or a complete transformation, we treat every car like it's our own.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                We believe in quality over quantity, attention to detail, and customer satisfaction above all else. Your vehicle deserves the best care, and that's exactly what we deliver.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-[#e50914]">Services</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto" />
          </motion.div>

          <div className="relative">
            <motion.div
              key={currentServiceIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-white mb-6">
                    {services[currentServiceIndex].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {services[currentServiceIndex].description}
                  </p>
                  <Link to="contact" smooth={true} offset={-80} duration={500}>
                    <Button className="px-8 py-4 bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105 w-fit">
                      Book Now
                    </Button>
                  </Link>
                </div>
                <div className="h-[400px] md:h-auto">
                  <img
                    src={services[currentServiceIndex].image}
                    alt={services[currentServiceIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <button
              onClick={prevService}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#e50914] hover:bg-[#b8070f] text-white p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextService}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#e50914] hover:bg-[#b8070f] text-white p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
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
      <section id="gallery" className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-[#e50914]">Work</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto mb-4" />
            <p className="text-xl text-gray-300">From the stitch to the signal, precision lives here.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer bg-gray-900 border border-gray-800"
              >
                <div className="relative h-64">
                  <img
                    src={item.before}
                    alt={`Before ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img
                    src={item.after}
                    alt={`After ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-bold">
                    BEFORE
                  </div>
                  <div className="absolute top-4 right-4 bg-[#e50914] text-white px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    AFTER
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-[#e50914] text-white px-6 py-2 rounded-full font-bold">
                      Hover to see After
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="text-[#e50914]">Pricing</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto mb-4" />
            <p className="text-xl text-gray-300">Choose the perfect package for your vehicle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-xl p-6 border-2 ${
                  plan.popular ? "border-[#e50914] transform scale-105" : "border-gray-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e50914] text-white px-4 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#e50914]">{plan.price}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-[#e50914] mt-0.5">✓</span>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#e50914]">Clients Say</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto" />
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-12 shadow-2xl border border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].name}
                  className="w-20 h-20 rounded-full mb-6 border-4 border-[#e50914]"
                />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                    <span key={i} className="text-[#e50914] text-2xl">★</span>
                  ))}
                </div>
                <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonialIndex].text}"
                </p>
                <h4 className="text-2xl font-bold text-white">
                  {testimonials[currentTestimonialIndex].name}
                </h4>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#e50914] hover:bg-[#b8070f] text-white p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#e50914] hover:bg-[#b8070f] text-white p-3 rounded-full transition-all hover:scale-110"
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center gap-2 mt-8">
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
      <section id="contact" className="w-full py-20 bg-black">
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Get In <span className="text-[#e50914]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-[#e50914] mx-auto mb-4" />
            <p className="text-xl text-gray-300">Ready to give your vehicle the care it deserves?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-4 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a href="tel:334-399-2277" className="text-gray-300 hover:text-[#e50914] transition-colors">
                    334-399-2277
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-4 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:suttonautodetails@gmail.com"
                    className="text-gray-300 hover:text-[#e50914] transition-colors"
                  >
                    suttonautodetails@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e50914] p-4 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Service Area</h3>
                  <p className="text-gray-300">Montgomery and surrounding areas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Service</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="full">Full Detailing</option>
                    <option value="ceramic">Ceramic Coating</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Plan</label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
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
                  <label className="block text-white mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black text-white border border-gray-700 focus:border-[#e50914] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle and service needs..."
                  />
                </div>
                <Button className="w-full py-4 bg-[#e50914] hover:bg-[#b8070f] text-white rounded-lg transition-transform hover:scale-105">
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-black border-t border-gray-800">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="https://c.animaapp.com/mgjq4pouROb7EA/img/whatsapp_image_2025-10-08_at_6-23-49_pm-removebg-preview.png"
                alt="Sutton Auto Details"
                className="h-16 object-contain mb-4"
              />
              <p className="text-gray-400 text-sm">
                Montgomery's premier auto detailing service. Bringing your vehicle's shine back to life.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="text-gray-400 hover:text-[#e50914] transition-colors cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>334-399-2277</li>
                <li>suttonautodetails@gmail.com</li>
                <li>Montgomery, AL</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">Subscribe for updates and special offers</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-[#e50914] focus:outline-none text-sm"
                />
                <Button className="bg-[#e50914] hover:bg-[#b8070f] text-white p-2 rounded-lg">
                  <Send size={20} />
                </Button>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#e50914] transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Sutton Auto Details. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
