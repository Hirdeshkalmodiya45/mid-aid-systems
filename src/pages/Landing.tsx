import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import FeatureCard from "@/components/FeatureCard";
import { 
  Shield, 
  Activity, 
  Users, 
  BarChart3, 
  FileText, 
  Calendar,
  Heart,
  Database,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: "EMR Data Security",
      description: "Bank-level encryption and privacy for all electronic medical records with HIPAA compliance.",
      gradient: "bg-gradient-to-br from-primary/10 to-primary/20"
    },
    {
      icon: Activity,
      title: "Patient Health Tracking",
      description: "Real-time monitoring and comprehensive health analytics for better patient outcomes.",
      gradient: "bg-gradient-to-br from-accent/10 to-accent/20"
    },
    {
      icon: Database,
      title: "NAMASTE + ICD Integration",
      description: "Seamless integration with international diagnostic and treatment classification systems.",
      gradient: "bg-gradient-to-br from-warning/10 to-warning/20"
    },
    {
      icon: BarChart3,
      title: "Intuitive Dashboard",
      description: "User-friendly dashboard providing quick access to essential health and practice metrics.",
      gradient: "bg-gradient-to-br from-primary/10 to-accent/10"
    },
    {
      icon: FileText,
      title: "Insurance Claims",
      description: "Streamlined process for managing and submitting insurance claims with integrated billing.",
      gradient: "bg-gradient-to-br from-success/10 to-success/20"
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Efficient scheduling system with automated reminders and calendar synchronization.",
      gradient: "bg-gradient-to-br from-warning/10 to-primary/10"
    }
  ];

  const benefits = [
    "Integrate traditional healing practices with modern healthcare technology",
    "Comprehensive patient care management system",
    "Advanced analytics for better healthcare decisions",
    "Secure and compliant data handling",
    "Streamlined workflow for healthcare providers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Integrated
                <span className="block text-primary">Healthcare:</span>
                <span className="block">Advancing Wellness</span>
                <span className="block">with HealthConnect</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                HealthConnect harmonizes traditional healing practices with cutting-edge healthcare technology, 
                creating a comprehensive platform that bridges ancient wisdom with modern medical excellence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link to="/dashboard">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                <Link to="/doctors">View Doctors</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-primary/5 border-0 shadow-2xl">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Heart className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Dr. Emily Chen</h3>
                    <p className="text-muted-foreground">Integrative Medicine Specialist</p>
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-accent mb-2">Patient Status</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">John Doe</span>
                      <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">Approved</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Jane Smith</span>
                      <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">Pending</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Platform Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive healthcare management tools designed for modern medical practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Understanding Modern Healthcare
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform represents a breakthrough in healthcare technology, combining traditional healing wisdom 
                with advanced digital solutions. We believe in creating sustainable healthcare ecosystems that benefit 
                both practitioners and patients through innovative technology integration.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8" size="lg" asChild>
                <Link to="/patients">Learn More</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">15K+</div>
                    <div className="text-sm text-muted-foreground">Patients Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning">24/7</div>
                    <div className="text-sm text-muted-foreground">Support Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">500+</div>
                    <div className="text-sm text-muted-foreground">Healthcare Providers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Transform Your Healthcare Practice?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join thousands of healthcare providers who are already using HealthConnect 
              to deliver better patient care and streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link to="/dashboard">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">H</span>
                </div>
                <span className="font-bold text-lg">HealthConnect</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Bridging traditional healing with modern healthcare technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Features</div>
                <div>Doctors</div>
                <div>Dashboard</div>
                <div>Analytics</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Legal</div>
                <div>Contact Us</div>
                <div>Support</div>
                <div>Documentation</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>hello@healthconnect.com</div>
                <div>1-800-HEALTH</div>
                <div>24/7 Support</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 HealthConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;