import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin } from "lucide-react";

// High On Burgers SEO Data
const PHONE = "+919899116202";
const PHONE_DISPLAY = "+91 98991 16202";
const ADDRESS = "96, Moti Bagh II, Satya Niketan, South Moti Bagh, New Delhi, 110021";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=High+On+Burgers+Satya+Niketan&query_place_id=ChIJ7eH8tXMDDTkR_0CBrTn-Mwo";

const Footer = () => (
  <footer className="bg-foreground text-background relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
    <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
    
    <div className="container py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl font-bold mb-4 uppercase tracking-tighter">
            <span className="text-primary">High On</span> Burgers
          </h3>
          <p className="text-background/60 text-sm leading-relaxed mb-6">
            Serving Satya Niketan's most addictive burgers, legendary tandoori twists, and late-night cravings until 4:00 AM.
          </p>
          <div className="flex gap-3">
            <a href="https://www.instagram.com/highonburger/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Navigate</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/menu", label: "Full Menu" },
              { to: "/about", label: "Our Journey" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Find Us" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-background/60 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Our Bestsellers</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>Fried Tandoori Chicken Burger</li>
            <li>Cheese Bomb Burger</li>
            <li>Fried Chicken Popcorn</li>
            <li>Peri Peri Fries</li>
            <li>Tiramisu Shake</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-background/40">Satya Niketan</h4>
          <ul className="space-y-3 text-sm text-background/60">
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-accent transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                {ADDRESS}
              </a>
            </li>
            <li>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone size={16} className="shrink-0 text-primary" />
                {PHONE_DISPLAY}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-background/40 font-medium">
          © {new Date().getFullYear()} High On Burgers. All rights reserved.
        </p>
        <p className="text-xs text-background/40 font-bold uppercase tracking-widest text-primary">
          Open Daily: 11:00 AM – 4:00 AM
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;