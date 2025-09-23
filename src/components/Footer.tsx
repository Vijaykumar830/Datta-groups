import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from "lucide-react";
import dattaLogo from "@/assets/datta-traders-logo.jpg";

const Footer = () => {
  const tradingProducts = [
    "Rice Export",
    "Seafood Trading",
    "Paddy Export",
    "Coconut Products",
    "Maize Trading",
  ];

  const electronicsServices = [
    "CCTV Installation",
    "Biometric Systems",
    "PA Systems",
    "Home Automation",
    "Security Solutions",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Industries Served", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Get insights on global trading trends, new technology solutions,
              and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="btn-gold shrink-0">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="https://i.postimg.cc/59HcL5nr/Whats-App-Image-2025-09-22-at-17-10-10-9e594546.jpg"
                alt="Datta Traders Logo"
                className="h-14 w-14 rounded-lg"
              />
              <div>
                <h2 className="font-heading font-bold text-xl">DATTA GROUPS</h2>
                <p className="text-sm text-accent">
                  Where Promise Meets Performance
                </p>
              </div>
            </Link>
            <p className="text-primary-foreground/80 mb-6 text-sm leading-relaxed">
              Leading global trading company specializing in agricultural
              products export-import and advanced electronics solutions.
              Committed to quality, reliability, and innovation.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Trading Products */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Trading Products
            </h3>
            <ul className="space-y-3">
              {tradingProducts.map((product, index) => (
                <li key={index}>
                  <Link
                    to="/trading"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Electronics Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Electronics Services
            </h3>
            <ul className="space-y-3">
              {electronicsServices.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/electronics"
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">
              Contact Information
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    D.No. 11-1136, 1st Floor, Peddagummuluru (Adduroad)
                  </p>
                  <p className="text-primary-foreground/80">
                    Near HP Petrol Bunk, (NH-16), S Rayavaram (M), Anakapalli - 531083
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919059814449" className="text-primary-foreground/80 hover:text-accent">+91 90598 14449</a>
        
                  <a href="tel:+919703462727" className="text-primary-foreground/80 hover:text-accent">+91 97034 62727</a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:aravindhdattagroups@gmail.com" className="text-primary-foreground/80 hover:text-accent">aravindhdattagroups@gmail.com</a>
                  <a href="mailto:sairamdattagroups@gmail.com" className="text-primary-foreground/80 hover:text-accent">sairamdattagroups@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-accent shrink-0" />
                <a href="https://www.dattagroups.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent">www.dattagroups.com</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-primary-foreground/60">
            <p>
              © 2024 Datta Traders. All rights reserved. | Privacy Policy | Terms of Service
            </p>
            <p className="mt-2 md:mt-0">
              Designed with excellence for global trading success.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
