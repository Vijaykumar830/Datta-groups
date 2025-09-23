import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Eye,
  Fingerprint,
  Mic,
  Home,
  Monitor,
  Wifi,
  Lock,
  CheckCircle,
  Phone,
  Settings
} from "lucide-react";
import cctvInstallation from "@/assets/cctv-installation.jpg";
import biometricSystem from "@/assets/biometric-system.jpg";
import homeAutomation from "@/assets/home-automation.jpg";

const Electronics = () => {
  const services = [
    {
      icon: Eye,
      title: "CCTV Installation & Services",
      image: cctvInstallation,
      description: "Professional surveillance systems for residential, commercial, and industrial properties with 24/7 monitoring capabilities.",
      features: ["HD/4K Cameras", "Night Vision", "Remote Monitoring", "Mobile App Access", "Cloud Storage", "Motion Detection"],
      applications: ["Offices", "Warehouses", "Retail Stores", "Residential", "Industrial"]
    },
    {
      icon: Fingerprint,
      title: "Biometric Access Control",
      image: biometricSystem,
      description: "Advanced biometric attendance and access control systems for enhanced security and efficient workforce management.",
      features: ["Fingerprint Scanner", "Face Recognition", "Card Access", "Time Attendance", "Payroll Integration", "Multi-location Support"],
      applications: ["Corporate Offices", "Manufacturing", "Educational Institutes", "Healthcare", "Government"]
    },
    {
      icon: Home,
      title: "Smart Home Automation", 
      image: homeAutomation,
      description: "Intelligent home automation solutions for lighting, climate, security, and entertainment systems control.",
      features: ["Smart Lighting", "Climate Control", "Voice Assistant", "Mobile Control", "Energy Management", "Security Integration"],
      applications: ["Luxury Homes", "Apartments", "Villa Projects", "Smart Communities", "Offices"]
    }
  ];

  const additionalServices = [
    {
      icon: Mic,
      title: "PA Systems",
      description: "Public address systems for clear communication in large spaces, events, and commercial establishments."
    },
    {
      icon: Wifi,
      title: "Networking Solutions", 
      description: "Complete network infrastructure setup including LAN, WiFi, and security network configurations."
    },
    {
      icon: Monitor,
      title: "Computer Sales & Services",
      description: "Desktop computers, laptops, servers, and comprehensive IT support services for businesses."
    },
    {
      icon: Phone,
      title: "Intercom Communications",
      description: "Building-wide intercom systems for seamless internal communication and visitor management."
    }
  ];

  const securityFeatures = [
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock surveillance and system monitoring for maximum security coverage."
    },
    {
      title: "Mobile Access",
      description: "Control and monitor all systems remotely through dedicated mobile applications."
    },
    {
      title: "Cloud Integration", 
      description: "Secure cloud storage and backup for footage, data, and system configurations."
    },
    {
      title: "Professional Installation",
      description: "Certified technicians ensure proper installation and optimal system performance."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Electronic Security Systems
            </Badge>
            <h1 className="font-heading text-5xl font-bold mb-6">
              Advanced Technology
              <span className="text-transparent bg-clip-text bg-gradient-gold block">
                Security Solutions
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Professional installation and maintenance of CCTV surveillance, biometric access control, 
              PA systems, and smart home automation solutions for residential and commercial properties.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Core Services</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Comprehensive Security & Automation
            </h2>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative overflow-hidden rounded-2xl card-elegant">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground">
                        <service.icon className="mr-2 h-4 w-4" />
                        Professional Installation
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-accent mr-4" />
                    <div>
                      <h3 className="font-heading text-3xl font-bold">{service.title}</h3>
                      <Badge className="mt-2">Advanced Technology</Badge>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-success mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((application, idx) => (
                        <Badge key={idx} variant="secondary">{application}</Badge>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="btn-navy">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Extended Services</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Complete Technology Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
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

      {/* Security Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Professional Security Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="card-elegant">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-heading text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Complete Security Ecosystem</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Integrated security solutions combining surveillance, access control, and automation 
              for comprehensive protection and convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Eye className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Surveillance</h3>
              <p className="text-primary-foreground/80">
                HD cameras with AI-powered analytics for intelligent monitoring and threat detection.
              </p>
            </div>
            <div className="text-center">
              <Lock className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Access Control</h3>
              <p className="text-primary-foreground/80">
                Multi-factor authentication with biometric verification for secure facility access.
              </p>
            </div>
            <div className="text-center">
              <Settings className="h-16 w-16 text-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold mb-3">Automation</h3>
              <p className="text-primary-foreground/80">
                Smart building controls for lighting, climate, and security system integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Man Power Services */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Additional Services</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Security Personnel Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive security personnel services including trained guards and skilled manpower 
              for complete security coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="card-elegant">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-accent mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  Security Guards (Armed & Unarmed)
                </h3>
                <p className="text-muted-foreground mb-6">
                  Professional security personnel with proper training and certifications 
                  for residential, commercial, and industrial security needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Licensed and trained personnel
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    24/7 availability
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Background verified guards
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Regular supervision and monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <Settings className="h-12 w-12 text-accent mb-6" />
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  Skilled & Unskilled Manpower
                </h3>
                <p className="text-muted-foreground mb-6">
                  Skilled technicians and support staff for various industrial, 
                  commercial, and residential service requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Technical specialists
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    General maintenance staff
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Flexible deployment options
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Comprehensive insurance coverage
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Secure Your Property Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free security assessment and customized solution designed 
            for your specific needs. Professional installation and ongoing support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Installations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;