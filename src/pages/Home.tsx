import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Truck, 
  Award,
  TrendingUp,
  Users,
  CheckCircle,
  Star
} from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import riceProduct from "@/assets/rice-product.jpg";
import seafoodProduct from "@/assets/seafood-product.jpg";
import cctvInstallation from "@/assets/cctv-installation.jpg";
import biometricSystem from "@/assets/biometric-system.jpg";
import homeAutomation from "@/assets/home-automation.jpg";

const Home = () => {
  const stats = [
    { icon: Globe, value: "10+", label: "States Served" },
    { icon: TrendingUp, value: "1000+", label: "Tons Exported" },
    { icon: Shield, value: "100+", label: "Security Installations" },
    { icon: Users, value: "100+", label: "Satisfied Clients" },
  ];

  const services = [
    {
      title: "Global Trading",
      description: "Premium agricultural products export-import including rice, seafood, paddy, coconut, and maize.",
      image: riceProduct,
      link: "/trading",
      features: ["Export-Import", "Quality Assurance", "Global Logistics"]
    },
    {
      title: "Electronics Solutions", 
      description: "Advanced security and automation systems including CCTV, biometric access, and smart home technology.",
      image: cctvInstallation,
      link: "/electronics",
      features: ["CCTV Systems", "Biometric Access", "Home Automation"]
    }
  ];

  const products = [
    { name: "Premium Rice", image: riceProduct, category: "Trading" },
    { name: "Fresh Seafood", image: seafoodProduct, category: "Trading" },
    { name: "CCTV Systems", image: cctvInstallation, category: "Electronics" },
    { name: "Biometric Access", image: biometricSystem, category: "Electronics" },
    { name: "Smart Homes", image: homeAutomation, category: "Electronics" },
  ];

  const testimonials = [
    {
      name: "DALVKOT BIO FUELS Private Limited",
      company: "DALVKOT",
      message: "Excellent quality rice exports and timely delivery. Datta Traders has been our trusted partner for 3 years.",
      rating: 5
    },
    {
      name: "Vijay Kumar", 
      company: "",
      message: "Professional CCTV installation with great after-sales support. Highly recommended for security solutions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBanner} 
            alt="Global trading and technology solutions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-6 bg-accent text-accent-foreground">
            <Award className="mr-2 h-4 w-4" />
            Where Promise Meets Performance
          </Badge>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Global Trading &<br />
            <span className="text-transparent bg-clip-text bg-gradient-gold">
              Technology Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up">
            Leading provider of premium agricultural exports and advanced electronics solutions 
            serving clients worldwide with excellence and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link to="/trading">
              <Button size="lg" className="btn-gold text-black text-lg px-8 py-6">
                Explore Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/electronics">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-black hover:bg-white hover:text-primary">
                Electronics Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-scale">
                <stat.icon className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="font-heading text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Comprehensive Business Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From global agricultural trading to cutting-edge technology installations, 
              we deliver excellence across diverse industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">
                      {service.title}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={service.link}>
                    <Button className="btn-navy w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Products</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Quality Products & Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="card-elegant group cursor-pointer">
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">{product.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Success</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.message}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Whether you need agricultural products or advanced technology solutions, 
            we're here to deliver excellence that exceeds expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg text-black px-8 py-6">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/industries">
              <Button size="lg" variant="outline" className="text-lg px-8 text-black py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-black">
                View Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;