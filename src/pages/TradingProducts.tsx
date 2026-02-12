import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Truck, ShoppingCart, Award, Star, CheckCircle, MapPin } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import riceProduct from "@/assets/rice-product.jpg";
import seafoodProduct from "@/assets/seafood-product.jpg";
import cctvInstallation from "@/assets/cctv-installation.jpg";
import biometricSystem from "@/assets/biometric-system.jpg";
import homeAutomation from "@/assets/home-automation.jpg";
import riceBranImg from "@/assets/bran-rice.jpg";
import rejectionRiceImg from "@/assets/rejection-rice.jpg";

const TradingProducts = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Products", icon: Package },
    { id: "agro", name: "Agro Commodities", icon: Truck },
    { id: "seafood", name: "Seafood", icon: ShoppingCart },
    { id: "electronics", name: "Electronics & Security", icon: Award },
    { id: "automation", name: "Home Automation", icon: Star }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Basmati Rice",
      category: "agro",
      image: riceProduct,
      origin: "Pan India",
      specs: ["Export Quality", "HACCP Certified", "Long Grain", "Aromatic"],
      benefits: ["High Demand", "Repeat Orders", "Global Partners"],
    },
    {
      id: 2,
      name: "Fresh Seafood (Prawns & Fish)",
      category: "seafood",
      image: seafoodProduct,
      origin: "Pan India",
      specs: ["Flash Frozen", "Cold Chain", "Premium Quality"],
      benefits: ["Top Quality Rating", "International Exports"],
    },
    {
      id: 3,
      name: "Tender Coconuts",
      category: "agro",
      image: "https://images.pexels.com/photos/322483/pexels-photo-322483.jpeg?auto=compress&cs=tinysrgb&w=800",
      origin: "Pan India",
      specs: ["Natural", "Fresh", "Bulk Supply"],
      benefits: ["Healthy Beverage Market", "Steady Demand"],
    },
    {
      id: 4,
      name: "Maize (Corn)",
      category: "agro",
      image: "https://images.pexels.com/photos/33989638/pexels-photo-33989638.jpeg?auto=compress&cs=tinysrgb&w=800",
      origin: "Pan India",
      specs: ["Animal Feed", "Food Grade", "Bulk Shipping"],
      benefits: ["Competitive Pricing", "Reliable Supply"],
    },
    {
      id: 5,
      name: "CCTV Security Systems",
      category: "electronics",
      image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=800",
      origin: "Pan India",
      specs: ["HD Cameras", "Cloud Storage", "Remote Access"],
      benefits: ["High Security Standards", "Corporate Clients"],
    },
    {
      id: 6,
      name: "Biometric Attendance Systems",
      category: "electronics",
      image: "https://images.pexels.com/photos/17155842/pexels-photo-17155842.jpeg?auto=compress&cs=tinysrgb&w=800",
      origin: "Pan India",
      specs: ["Fingerprint & Face Recognition", "Payroll Integration"],
      benefits: ["Efficiency", "Accurate Attendance"],
    },
    {
      id: 7,
      name: "Smart Home Automation",
      category: "automation",
      image: homeAutomation,
      origin: "Pan India",
      specs: ["Smart Lighting", "Climate Control", "Voice Integration"],
      benefits: ["Energy Savings", "Luxury Appeal"],
    },
    {
      id: 8,
      name: "Electronic Goods",
      category: "electronics",
      image: biometricSystem,
      origin: "Pan India",
      specs: ["Security Systems", "PA Systems", "CCTV", "Automation Gadgets"],
      benefits: ["Diverse Product Line", "Trusted Brands"],
    },
    {
  id: 9,
  name: "Rice Bran",
  category: "agro",
  image: riceBranImg,
  origin: "Pan India",
  specs: ["Feed Grade", "High Oil Content", "Bulk Supply", "Export Quality"],
  benefits: ["Cattle Feed Industry", "Regular Supply", "Best Pricing"],
},
{
  id: 10,
  name: "Rejection Rice",
  category: "agro",
  image: rejectionRiceImg,
  origin: "Pan India",
  specs: ["Broken Rice", "Feed Grade", "Bulk Quantity", "Affordable"],
  benefits: ["Poultry Feed", "Cattle Feed", "High Volume"],
},
  ];

  const filtered = activeFilter === "all" ? products : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 hero-gradient text-white text-center">
        <Badge className="mb-6 bg-accent text-accent-foreground">Our Trading</Badge>
        <h1 className="font-heading text-5xl font-bold mb-6">
          Products We <span className="text-transparent bg-clip-text bg-gradient-gold">Trade</span>
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto">
          We specialize in exporting and importing top-quality agro commodities, seafood, and cutting-edge electronic security and automation products.
        </p>
      </section>

      {/* Filters */}
      <section className="py-8 bg-primary/5">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={activeFilter === cat.id ? "default" : "outline"}
              onClick={() => setActiveFilter(cat.id)}
              className={`${activeFilter === cat.id ? "btn-gold" : "hover:border-accent hover:text-accent-foreground"} flex items-center`}
            >
              <cat.icon className="mr-2 h-4 w-4" />
              {cat.name}
            </Button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(product => (
            <Card key={product.id} className="card-elegant overflow-hidden group">
              <div className="relative h-56">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-3 left-3 flex items-center text-sm text-white">
                  <MapPin className="h-4 w-4 mr-1" />{product.origin}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-2">{product.name}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Specs:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.specs.map((spec, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">{spec}</Badge>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                  {product.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-center text-xs mb-1">
                      <CheckCircle className="h-3 w-3 text-success mr-2" />{b}
                    </div>
                  ))}
                </div>
                <Link to="/contact">
                  <Button size="sm" className="btn-navy">Enquire Now</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <h2 className="font-heading text-4xl font-bold mb-6">Partner With Us for Quality Trading</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether it's agro commodities, seafood exports, or modern security systems, we ensure quality and reliability in every trade.
        </p>
        <Link to="/contact">
          <Button size="lg" className="btn-gold px-8 py-6">Contact Us</Button>
        </Link>
      </section>
    </div>
  );
};

export default TradingProducts;
