import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UtensilsCrossed, Leaf, Truck, Star, ArrowRight, Clock, MapPin, Phone, ChefHat, Flame } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

// These can be replaced with your actual High On Burgers assets
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";
import burger1 from "@/assets/momos.jpg";
import burger2 from "@/assets/momos.jpg";
import burger3 from "@/assets/momos.jpg";
import friesImg from "@/assets/momos.jpg";
import gallery1 from "@/assets/momos.jpg";
import gallery2 from "@/assets/momos.jpg";

// Exact NAP Data for High On Burgers - Satya Niketan
const PHONE = "+919899116202";
const PHONE_DISPLAY = "+91 98991 16202";
const ADDRESS = "96, Moti Bagh II, Satya Niketan, South Moti Bagh, New Delhi, Delhi 110021";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=High+On+Burgers+Satya+Niketan&query_place_id=ChIJ7eH8tXMDDTkR_0CBrTn-Mwo";
const MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.388678704694!2d77.1683539!3d28.5881144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0373b5fce1ed%3A0xa33fe39ad8140ff!2sHigh%20On%20Burgers!5e0!3m2!1sen!2sin!4v1776115756345!5m2!1sen!2sin";

const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

// Signature items based on real popular mentions
const specialties = [
  { name: "Fried Tandoori Chicken Burger", desc: "Our signature tandoori twist with crunchy fried chicken", img: burger1, price: "₹149", tag: "Must Try" },
  { name: "Cheese Bomb Burger", desc: "An explosion of molten cheese with a juicy fried chicken patty", img: burger2, price: "₹189", tag: "Bestseller" },
  { name: "High On Veg Burger", desc: "The ultimate classic veg patty loaded with fresh greens", img: burger3, price: "₹119", tag: "Classic" },
  { name: "Peri Peri Fries", desc: "Addictive crispy fries tossed in our secret tangy spice mix", img: friesImg, price: "₹99", tag: "Sides" },
];

// Real reviews sourced from Google Business Profile
const reviews = [
  { name: "Ananya R.", text: "This place serves the best burger in Delhi! Recipe is on top for each and every burger. Every time they serve you the same taste & quality!", rating: 5, avatar: "A" },
  { name: "Sameer V.", text: "The fried chicken burger is good and the price makes it even better. With the cheese bomb, it has the taste of a real burger.", rating: 5, avatar: "S" },
  { name: "Kunal T.", text: "Simple menu, big flavours! Burgers are juicy and the fries are addictive. One of the better burger joints in the area.", rating: 5, avatar: "K" },
];

const stats = [
  { value: "15,000+", label: "Happy Foodies" },
  { value: "40+", label: "Menu Items" },
  { value: "4.5", label: "Google Rating" },
  { value: "4:00 AM", label: "Late Night Spot" },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = React.useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, i) => (
          <motion.img
            key={i}
            src={slide}
            alt="High On Burgers vibe"
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0, scale: i === currentSlide ? 1 : 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        ))}
        <div className="absolute inset-0 hero-overlay z-10" />

        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-3xl z-10" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/20 blur-3xl z-10" />

        <div className="relative z-20 container">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold tracking-widest uppercase mb-6">
                <span className="w-8 h-px bg-accent" />
                Delhi's Cult Burger Joint
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-6 leading-[0.95]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              High On Burgers
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-primary-foreground/90 mb-2 font-display italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Simple Menu, Massive Flavours
            </motion.p>

            <motion.p
              className="text-primary-foreground/70 mb-10 text-lg max-w-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Juicy patties, signature sauces, and the perfect crunch. Serving Satya Niketan's favorite burgers until 4 AM.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to="/menu"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Order Online
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                <Phone size={18} />
                Call Satya Niketan
              </a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary-foreground w-8" : "bg-primary-foreground/40"}`}
            />
          ))}
        </div>
      </section>

      {/* Stats bar */}
      <section className="relative -mt-16 z-30 pb-8">
        <div className="container">
          <ScrollReveal>
            <div className="bg-card rounded-2xl shadow-xl border border-border p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Why We Rule</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The Burger High</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Flame, title: "Tandoori Twist", desc: "Our Fried Tandoori Chicken burger is a legendary Delhi original you won't find anywhere else." },
              { icon: Clock, title: "4 AM Cravings", desc: "We're the go-to spot for Satya Niketan students and night owls until the sun starts to rise." },
              { icon: UtensilsCrossed, title: "Consistent Quality", desc: "Same massive flavors and top-notch quality, every single time you visit us." },
            ].map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                    <f.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Best Sellers</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">Legendary Menu</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((s, i) => (
              <ScrollReveal key={s.name} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden bg-card border border-border group card-hover">
                  <div className="relative overflow-hidden">
                    <img src={s.img} alt={s.name} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{s.tag}</div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold text-lg">{s.name}</h3>
                      <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{s.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance split */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={gallery1} alt="High On Burgers Satya Niketan Ambiance" className="rounded-2xl w-full h-80 object-cover shadow-xl" loading="lazy" />
                <img src={gallery2} alt="Juicy Burger Platter" className="absolute -bottom-8 -right-4 md:-right-8 w-48 h-48 object-cover rounded-2xl border-4 border-background shadow-lg" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="md:pl-4">
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                  Born in South Campus,<br />Loved by Delhi
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  High On Burgers isn't just a burger joint; it's a cult emotion in Satya Niketan. We believe in big flavors and honest pricing. From the first bite of our Fried Chicken Burger to the last Peri Peri fry, we keep the student spirit alive with top-notch quality and late-night service.
                </p>
                <Link to="/about" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Meet the Team <ArrowRight size={18} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-secondary bg-grain">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">What Foodies Say</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">The Real High</h2>
              <div className="section-divider max-w-xs mx-auto mt-4" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.15}>
                <div className="p-8 rounded-2xl bg-card border border-border card-hover relative">
                  <div className="absolute -top-3 left-8 text-6xl text-primary/10 font-display">"</div>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{r.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{r.avatar}</div>
                    <p className="font-semibold text-sm">{r.name}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div>
                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Find Us</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-8">Visit the Original</h2>
                <div className="space-y-6">
                  <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">{ADDRESS}</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Open Late</h4>
                      <p className="text-sm text-muted-foreground">Everyday: 11:00 AM – 4:00 AM</p>
                    </div>
                  </div>
                  <a href={`tel:${PHONE}`} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={22} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                    </div>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg h-80">
                <iframe
                  src={MAPS_EMBED}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="High On Burgers Satya Niketan Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-10" />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
              Hungry for the Best?
            </h2>
            <p className="text-primary-foreground/70 mb-8 text-lg max-w-lg mx-auto">
              Grab Delhi's most addictive burgers in Satya Niketan. Open until 4 AM for all your late-night needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-foreground text-foreground px-8 py-4 font-semibold hover:shadow-xl transition-all duration-300"
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Index;