import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  CheckCircle,
  Star,
  Truck,
  Shield,
  Award,
  Package
} from "lucide-react";
import riceProduct from "@/assets/rice-product.jpg";
import seafoodProduct from "@/assets/seafood-product.jpg";

const Trading = () => {
  const products = [
    {
      name: "Premium Rice",
      image: riceProduct,
      description: "High-quality rice varieties including Basmati, Jasmine, and Long Grain rice for global export.",
      varieties: ["Basmati Rice", "Jasmine Rice", "Long Grain", "Short Grain", "Brown Rice"],
      features: ["Export Quality", "Pest Free", "Moisture Controlled", "International Standards"],
      markets: ["Andhra Pradesh", "Telangana", "Karnataka", "Kerala", "Tamil Nadu"],
    },
    {
      name: "Fresh Seafood", 
      image: seafoodProduct,
      description: "Premium frozen and fresh seafood including prawns, fish, crab, and shellfish for international markets.",
      varieties: ["Tiger Prawns", "White Prawns", "Fish Fillets", "Crab Meat", "Shellfish"],
      features: ["Flash Frozen", "HACCP Certified", "Traceable Source", "Premium Grade"],
      markets: ["Andhra Pradesh", "Telangana", "Karnataka", "Kerala", "Tamil Nadu"],
    }
  ];

  const commodities = [
    { name: "Paddy", icon: Package, description: "Premium paddy varieties for processing and export" },
    { name: "Coconut", icon: Package, description: "Fresh coconuts and coconut products" },
    { name: "Maize", icon: Package, description: "High-quality maize for animal feed and food industry" },
    { name: "General Merchants", icon: Package, description: "Various agricultural and industrial products" }
  ];

  const services = [
    {
      icon: Globe,
      title: "Global Logistics", 
      description: "Comprehensive logistics solutions including shipping, documentation, and customs clearance."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring products meet international standards."
    },
    {
      icon: Award,
      title: "Certifications",
      description: "ISO, HACCP, and other international certifications for food safety and quality."
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "End-to-end supply chain management from sourcing to delivery."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Global Trading Solutions
            </Badge>
            <h1 className="font-heading text-5xl font-bold mb-6">
              Premium Agricultural Products
              <span className="text-transparent bg-clip-text bg-gradient-gold block">
                For Global Markets
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Connecting farmers to global markets with premium rice, seafood, paddy, coconut, 
              and maize exports. Quality assured, sustainably sourced, delivered worldwide.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Request Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Products</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Export Quality Products
            </h2>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        Premium Export
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="font-heading text-3xl font-bold mb-4">{product.name}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Product Varieties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.varieties.map((variety, idx) => (
                        <Badge key={idx} variant="secondary">{variety}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Quality Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-success mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Export Markets:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.markets.map((market, idx) => (
                        <Badge key={idx} className="bg-accent/10 text-accent border-accent">
                          <Globe className="mr-1 h-3 w-3" />
                          {market}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="btn-navy">
                      Inquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Commodities */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Additional Products</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Diverse Agricultural Commodities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commodities.map((commodity, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-8">
                  <commodity.icon className="h-16 w-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">{commodity.name}</h3>
                  <p className="text-muted-foreground">{commodity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Services</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Complete Trading Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Quality Certifications</h2>
            <p className="text-primary-foreground/90 text-lg">
              Our products meet the highest international standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Award className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">ISO 22000</h3>
              <p className="text-sm text-primary-foreground/80">Food Safety Management</p>
            </div>
            <div>
              <Shield className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">HACCP</h3>
              <p className="text-sm text-primary-foreground/80">Hazard Analysis Critical Control</p>
            </div>
            <div>
              <CheckCircle className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">FSSAI</h3>
              <p className="text-sm text-primary-foreground/80">Food Safety & Standards</p>
            </div>
            <div>
              <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Export License</h3>
              <p className="text-sm text-primary-foreground/80">Government Approved</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Export Premium Products?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us for reliable, quality-assured agricultural products 
            delivered to global markets with complete logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Get Export Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Export Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trading;
