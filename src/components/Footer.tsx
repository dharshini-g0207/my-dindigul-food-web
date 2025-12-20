import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-xl">DF</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Dindigul Foods</h3>
                <p className="text-sm opacity-80">Authentic South Indian Cuisine</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Experience the rich flavors of South India with our authentic recipes passed down through generations.
              Famous for our Dindigul-style biryani and traditional breakfast items.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:9363940672" className="text-sm opacity-80 hover:opacity-100 transition-all">
                  +91 93639 40672
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@dindigulfoods.com" className="text-sm opacity-80 hover:opacity-100 transition-all">
                  info@dindigulfoods.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm opacity-80">
                  Dindigul District, Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-sm opacity-80">
                  <p>Mon - Sun: 6:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>

            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Dindigul Foods. All rights reserved. | Delivery available only within Dindigul District.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
