import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Globe, 
  Shield, 
  Award,
  Users,
  Target,
  Eye,
  Heart,
  CheckCircle,
  TrendingUp
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensure every product meets international standards."
    },
    {
      icon: Globe,
      title: "Global Reach", 
      description: "Serving clients across 50+ countries with reliable logistics and timely delivery."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service and dedicated support."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Continuous innovation and improvement in all aspects of our business operations."
    }
  ];

  const milestones = [
    { year: "2024", title: "Company Founded", description: "Started as a small trading business with big dreams" },
    { year: "2024", title: "Electronics Division", description: "Expanded into security and automation solutions" },
    { year: "2024", title: "Technology Leader", description: "Became regional leader in smart security solutions" },
  
  ];

  const team = [
    {
      name: "Aravindh Thetakali",
      position: "Founder & CEO", 
      description: "Visionary leader with over 5+ years in international trade and technology solutions.",
      expertise: ["Global Trading", "Technology Innovation"]
    },
    {
      name: "Veesam Sai ram",
      position: "Founder & CEO", 
      description: "Visionary leader with over 5+ years in international trade and technology solutions.",
      expertise: ["Business Strategy", "Technology Innovation"]
    }
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              About Datta Traders
            </Badge>
            <h1 className="font-heading text-5xl font-bold mb-6">
              Building Bridges Between
              <span className="text-transparent bg-clip-text bg-gradient-gold block">
                Global Markets & Technology
              </span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Since 2020, we've been connecting the world through premium
              agricultural products and cutting-edge technology solutions,
              serving clients across 10+ States with unwavering commitment to
              quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-accent mr-4" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold">
                      Our Mission
                    </h2>
                    <Badge className="mt-2">Driving Excellence</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To be the global leader in agricultural trading and technology
                  solutions by delivering exceptional quality products and
                  services that exceed client expectations, while fostering
                  sustainable growth and innovation in every market we serve.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Quality-first approach in all operations
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Sustainable and ethical business practices
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Customer satisfaction as top priority
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-12 w-12 text-accent mr-4" />
                  <div>
                    <h2 className="font-heading text-2xl font-bold">
                      Our Vision
                    </h2>
                    <Badge className="mt-2">Future Ready</Badge>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To revolutionize global trade and technology integration by
                  creating seamless connections between agricultural markets and
                  advanced electronics solutions, empowering businesses
                  worldwide with innovative, reliable, and sustainable
                  solutions.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Innovation-driven technology solutions
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Global market leadership
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-success mr-2" />
                    Sustainable business ecosystem
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Principles That Guide Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every decision we make and every
              relationship we build, ensuring consistent excellence in all our
              endeavors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-elegant text-center group">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <value.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Milestones of Excellence
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent/20 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background hidden md:block z-10"></div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "md:pr-8 md:text-right"
                        : "md:pl-8 md:text-left"
                    }`}
                  >
                    <Card className="card-elegant">
                      <CardContent className="p-6">
                        <Badge className="mb-2">{milestone.year}</Badge>
                        <h3 className="font-heading text-xl font-semibold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Leadership</Badge>
            <h2 className="font-heading text-4xl font-bold mb-6">
              Meet Our Leadership
            </h2>
          </div>

          <div className="max-w-4xl mx-auto flex flex-wrap gap-6 justify-center">
            {team.map((member, index) => (
              <Card key={index} className="card-elegant w-full sm:w-[48%]">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="h-12 w-12 text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-4">{member.position}</Badge>
                  <p className="text-muted-foreground mb-6">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="font-heading text-4xl font-bold mb-2">
                1000+
              </div>
              <div className="text-primary-foreground/80">Tons Exported</div>
            </div>
            <div>
              <Globe className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="font-heading text-4xl font-bold mb-2">10+</div>
              <div className="text-primary-foreground/80">States Served</div>
            </div>
            <div>
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="font-heading text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">
                Security Installations
              </div>
            </div>
            <div>
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="font-heading text-4xl font-bold mb-2">100+</div>
              <div className="text-primary-foreground/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-alternate">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Partner With Excellence
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Datta Traders for
            their trading and technology needs. Let's build success together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-gold text-lg px-8 py-6">
                Start Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/industries">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;