import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  Building2,
  Factory,
  GraduationCap,
  Home,
  ShoppingCart,
  Truck,
  Shield,
  Heart,
  Briefcase,
  Warehouse,
  Users,
  CheckCircle
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Comprehensive security and automation solutions for modern office buildings and business complexes.",
      services: ["CCTV Surveillance", "Access Control", "Biometric Attendance", "Intercom Systems", "Network Infrastructure"],
      benefits: ["Enhanced Security", "Automated Attendance", "Visitor Management", "Remote Monitoring"]
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Heavy-duty security systems and industrial automation for manufacturing plants and factories.",
      services: ["Industrial CCTV", "Perimeter Security", "Safety Monitoring", "Production Line Surveillance", "Warehouse Security"],
      benefits: ["Asset Protection", "Safety Compliance", "Theft Prevention", "Process Monitoring"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & Commercial",
      description: "Advanced retail security solutions including POS integration and customer analytics.",
      services: ["Store Surveillance", "Loss Prevention", "Customer Analytics", "POS Security", "Inventory Management"],
      benefits: ["Reduced Shrinkage", "Customer Insights", "Staff Monitoring", "Brand Protection"]
    },
    {
      icon: Home,
      title: "Residential Complexes",
      description: "Smart home automation and security systems for apartments, villas, and gated communities.",
      services: ["Smart Home Systems", "Community Security", "Visitor Management", "Gate Automation", "Parking Solutions"],
      benefits: ["Convenience", "Safety", "Property Value", "Energy Efficiency"]
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Comprehensive security and communication systems for schools, colleges, and universities.",
      services: ["Campus Security", "Student Attendance", "Emergency Communication", "Classroom Monitoring", "Visitor Control"],
      benefits: ["Student Safety", "Campus Monitoring", "Emergency Response", "Administrative Efficiency"]
    },
    {
      icon: Heart,
      title: "Healthcare Facilities",
      description: "Specialized security and monitoring systems for hospitals, clinics, and medical facilities.",
      services: ["Patient Monitoring", "Staff Access Control", "Pharmacy Security", "Emergency Systems", "Visitor Management"],
      benefits: ["Patient Safety", "Asset Security", "Compliance", "Emergency Response"]
    },
    {
      icon: Briefcase,
      title: "Government & Public",
      description: "High-security solutions for government buildings, public facilities, and critical infrastructure.",
      services: ["High-Security Access", "Surveillance Systems", "Emergency Communication", "Perimeter Protection", "Visitor Screening"],
      benefits: ["National Security", "Public Safety", "Asset Protection", "Compliance"]
    },
    {
      icon: Warehouse,
      title: "Logistics & Warehousing",
      description: "Comprehensive monitoring and security for warehouses, distribution centers, and logistics hubs.",
      services: ["Warehouse Security", "Loading Dock Monitoring", "Inventory Tracking", "Fleet Management", "Access Control"],
      benefits: ["Cargo Security", "Operational Efficiency", "Theft Prevention", "Supply Chain Visibility"]
    }
  ];

  const tradingIndustries = [
    {
      icon: Truck,
      title: "Food Processing",
      description: "Premium agricultural products for food processing companies worldwide.",
      products: ["Rice varieties", "Seafood", "Spices", "Grains"]
    },
    {
      icon: ShoppingCart,
      title: "Retail & Distribution",
      description: "Quality products for retail chains and distribution networks.",
      products: ["Packaged rice", "Frozen seafood", "Bulk commodities", "Private label products"]
    },
    {
      icon: Factory,
      title: "Export Companies",
      description: "Bulk supply to international export companies and trading houses.",
      products: ["Export grade rice", "Marine products", "Agricultural commodities", "General merchandise"]
    },
    {
      icon: Building2,
      title: "Restaurant Chains",
      description: "Consistent quality supplies for restaurant chains and food service providers.",
      products: ["Premium rice", "Fresh seafood", "Specialty ingredients", "Bulk supplies"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Industries We Serve
            </Badge>
            <h1 className="font-heading text-5xl font-bold mb-6">
              Trusted Solutions Across
              <span className="text-transparent bg-clip-text bg-gradient-gold block">
                Diverse Industries
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              From agricultural trading to advanced security systems, we deliver tailored solutions 
              that meet the unique needs of various industries worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Electronics Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Electronics & Security</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Advanced Technology Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security and automation systems designed for diverse industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="card-elegant group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <industry.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Key Services:</h4>
                    <div className="space-y-1">
                      {industry.services.slice(0, 3).map((service, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <CheckCircle className="h-3 w-3 text-success mr-2" />
                          {service}
                        </div>
                      ))}
                      {industry.services.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{industry.services.length - 3} more services
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {industry.benefits.slice(0, 2).map((benefit, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Link to="/contact">
                      <Button size="sm" className="w-full btn-navy text-sm">
                        Learn More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Industries */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Trading & Export</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Global Trading Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Premium agricultural products serving diverse industries across international markets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradingIndustries.map((industry, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-8">
                  <industry.icon className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="font-heading text-xl font-semibold mb-4">{industry.title}</h3>
                  <p className="text-muted-foreground mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    {industry.products.map((product, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs mx-1">
                        {product}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Industry Impact</h2>
            <p className="text-primary-foreground/90 text-lg">
              Trusted by leading companies across multiple sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Building2 className="h-16 w-16 text-accent mx-auto mb-4" />
              <div className="font-heading text-3xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">Corporate Clients</div>
            </div>
            <div>
              <Factory className="h-16 w-16 text-accent mx-auto mb-4" />
              <div className="font-heading text-3xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">Industrial Projects</div>
            </div>
            <div>
              <Home className="h-16 w-16 text-accent mx-auto mb-4" />
              <div className="font-heading text-3xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Residential Installations</div>
            </div>
            <div>
              <Truck className="h-16 w-16 text-accent mx-auto mb-4" />
              <div className="font-heading text-3xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">States Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Success Stories</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Industry Success Stories
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <Factory className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Manufacturing Excellence
                </h3>
                <p className="text-muted-foreground mb-4">
                  Implemented comprehensive security system for 50,000 sq ft manufacturing facility, 
                  resulting in 95% reduction in security incidents.
                </p>
                <Badge variant="secondary">Industrial Security</Badge>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <ShoppingCart className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Retail Chain Success
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deployed integrated security solutions across 25 retail outlets, 
                  achieving 80% reduction in inventory shrinkage.
                </p>
                <Badge variant="secondary">Retail Security</Badge>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <Truck className="h-12 w-12 text-accent mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Global Trading Success
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supplied premium rice to 15 countries with zero quality complaints, 
                  establishing long-term partnerships with major food processors.
                </p>
                <Badge variant="secondary">Agricultural Export</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Partner With Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients across diverse industries. 
            Get customized solutions designed for your specific industry needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Discuss Your Needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;