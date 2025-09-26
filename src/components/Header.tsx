import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Globe } from "lucide-react";
import dattaLogo from "@/assets/datta-groups-logo.jpg"; // ✅ Updated logo path

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Trading", href: "/trading" },
    { name: "Electronics", href: "/electronics" },
    { name: "Industries", href: "/industries" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm flex-wrap gap-2">
            <div className="flex items-center space-x-4 flex-wrap">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+919494375381" className="hover:text-accent">
                  +91 94943 75381
                </a>
                <a href="tel:+919703462727" className="hover:text-accent">
                  +91 97034 62727
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:aravindhdattagroups@gmail.com"
                  className="hover:text-accent"
                >
                  aravindhdattagroups@gmail.com
                </a>
                <a
                  href="mailto:sairamdattagroups@gmail.com"
                  className="hover:text-accent"
                >
                  sairamdattagroups@gmail.com
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Globe className="h-4 w-4" />
              <span>Global Trading Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://i.postimg.cc/59HcL5nr/Whats-App-Image-2025-09-22-at-17-10-10-9e594546.jpg"
              alt="Datta Groups Logo"
              className="h-14 w-14 rounded-lg"
            />
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">
                DATTA GROUPS
              </h1>
              <p className="text-xs text-accent font-medium">
                Where Promise Meets Performance
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  isActive(item.href) ? "active text-accent" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link to="/contact">
              <Button className="btn-gold font-medium">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link to="/contact">
                  <Button className="w-full btn-gold">Get Quote</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
