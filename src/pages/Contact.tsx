import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Globe,
  User,
  Building2,
  Package,
  Shield,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 90598 14449", "+91 97034 62727"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["aravindhdattagroups@gmail.com", "sairamdattagroups@gmail.com"],
      action: "Send Email"
    },
    {
      icon: MapPin,
      title: "Office Address", 
      details: [
        "D.No. 11-1136, 1st Floor, Peddagummuluru (Adduroad)",
        "Near HP Petrol Bunk, (NH-16), S Rayavaram (M),",
        "Anakapalli - 531083, Andhra Pradesh, India"
      ],
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Saturday: 9:00 AM - 7:00 PM",
        "Sunday: 10:00 AM - 4:00 PM",
        "24/7 Emergency Support Available"
      ],
      action: "Schedule Meeting"
    }
  ];

  const services = [
    "CCTV Installation & Services",
    "Biometric Access Control",
    "Home Automation",
    "PA Systems",
    "Rice Export",
    "Seafood Trading",
    "Agricultural Products",
    "Security Personnel",
    "General Inquiry"
  ];

  const features = [
    { icon: CheckCircle, title: "Free Consultation", description: "Expert advice at no cost" },
    { icon: CheckCircle, title: "Quick Response", description: "24-hour response guarantee" },
    { icon: CheckCircle, title: "Custom Solutions", description: "Tailored to your needs" },
    { icon: CheckCircle, title: "Professional Support", description: "Ongoing assistance included" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      return;
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via phone or email.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">Get In Touch</Badge>
            <h1 className="font-heading text-5xl font-bold mb-6">
              Contact Our
              <span className="text-transparent bg-clip-text bg-gradient-gold block">Expert Team</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Ready to discuss your trading or technology needs? Our experienced team is here to provide personalized solutions and expert guidance for your business success.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 section-alternate">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <info.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, idx) => {
                      const isPhone = detail.startsWith("+");
                      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(detail);
                      const href = isPhone ? `tel:${detail}` : isEmail ? `mailto:${detail}` : undefined;
                      return (
                        <p key={idx} className="text-sm text-muted-foreground">
                          {href ? (
                            <a href={href} target={isEmail ? "_blank" : undefined} rel={isEmail ? "noopener noreferrer" : undefined} className="hover:underline hover:text-accent transition-colors">
                              {detail}
                            </a>
                          ) : detail}
                        </p>
                      );
                    })}
                  </div>
                  <Button size="sm" variant="outline" className="text-xs" onClick={() => {
                    if (info.title === "Email Address") window.location.href = `mailto:${info.details[0]}`;
                    else if (info.title === "Phone Numbers") window.location.href = `tel:+919059814449`;
                    else if (info.title === "Office Address") window.open("https://www.google.com/maps/dir/?api=1&destination=D.No.+11-1136,+1st+Floor,+Peddagummuluru,+Anakapalli,+Andhra+Pradesh,+531083,+India", "_blank");
                    else if (info.title === "Business Hours") window.location.href = `tel:+919703462727`;
                  }}>
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Badge className="mb-4">Send Message</Badge>
                <h2 className="font-heading text-3xl font-bold mb-4">Let's Discuss Your Requirements</h2>
                <p className="text-muted-foreground">Fill out the form below and our team will get back to you within 24 hours with a customized solution for your needs.</p>
              </div>

              <Card className="card-elegant">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="pl-10" required />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter your email" className="pl-10" required />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter your phone number" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input type="text" name="company" value={formData.company} onChange={handleInputChange} placeholder="Enter company name" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Service Interest</label>
                      <Select onValueChange={handleServiceChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service}>{service}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Describe your requirements, timeline, and any specific questions you have..." rows={6} required />
                    </div>

                    <Button type="submit" size="lg" className="btn-gold w-full">
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-6 flex items-center">
                    <MessageSquare className="mr-2 h-5 w-5 text-accent" />
                    Quick Contact
                  </h3>

                  <div className="space-y-4">
                    {/* Call Now */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-medium">+91 90598 14449</p>
                          <p className="text-sm text-muted-foreground">Call Now</p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => window.location.href = "tel:+919059814449"}>Call</Button>
                    </div>

                    {/* Schedule Meeting */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-medium">+91 97034 62727</p>
                          <p className="text-sm text-muted-foreground">Schedule Meeting</p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => window.location.href = "tel:+919703462727"}>Call</Button>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-medium">aravindhdattagroups@gmail.com</p>
                          <p className="text-sm text-muted-foreground">Send Email</p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => window.location.href = "mailto:aravindhdattagroups@gmail.com"}>Email</Button>
                    </div>

                    {/* Get Directions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-medium">Anakapalli, India</p>
                          <p className="text-sm text-muted-foreground">Get Directions</p>
                        </div>
                      </div>
                      <Button size="sm" onClick={() => window.open(
                        "https://www.google.com/maps/dir/?api=1&destination=D.No.+11-1136,+1st+Floor,+Peddagummuluru,+Anakapalli,+Andhra+Pradesh,+531083,+India",
                        "_blank"
                      )}>Directions</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-6">Why Choose Us?</h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <feature.icon className="h-5 w-5 text-success mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{feature.title}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Services Overview */}
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-6">Our Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Shield className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Security Solutions</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Global Trading</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 text-accent mr-2" />
                      <span className="text-sm">Export-Import</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Visit Us</Badge>
            <h2 className="font-heading text-3xl font-bold mb-4">Our Office Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in Anakapalli, Andhra Pradesh, we're easily accessible and welcome visitors during business hours.
            </p>
          </div>

          <Card className="card-elegant overflow-hidden">
            <CardContent className="p-0">
              <div className="h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    D.No. 11-1136, 1st Floor, Peddagummuluru (Adduroad)
                    <br />
                    Near HP Petrol Bunk, (NH-16), S Rayavaram (M)
                    <br />
                    Anakapalli - 531083, Andhra Pradesh, India
                  </p>
                  <Button className="mt-4 btn-gold" onClick={() => window.open(
                    "https://www.google.com/maps/dir/?api=1&destination=D.No.+11-1136,+1st+Floor,+Peddagummuluru,+Anakapalli,+Andhra+Pradesh,+531083,+India",
                    "_blank"
                  )}>
                    <Globe className="mr-2 h-4 w-4" /> Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
