import { useState } from "react";
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
      title: "Intelligent Code Lookup",
      description: "Real-time suggestions for NAMASTE and ICD-11 codes as clinicians type diagnoses, improving efficiency and accuracy.",
      gradient: "bg-gradient-to-br from-primary/10 to-primary/20"
    },
    {
      icon: ArrowRight,
      title: "Bidirectional Code Translation",
      description: "Seamless translation between NAMASTE and ICD-11 codes - enter one system and automatically get the corresponding code.",
      gradient: "bg-gradient-to-br from-accent/10 to-accent/20"
    },
    {
      icon: Database,
      title: "Secure FHIR Integration",
      description: "Upload FHIR Bundles containing patient data with both NAMASTE and ICD-11 codes for comprehensive dual-coding.",
      gradient: "bg-gradient-to-br from-warning/10 to-warning/20"
    },
    {
      icon: Heart,
      title: "Ayurvedic Treatment Plans",
      description: "Digital prescription tools for traditional Ayurvedic medicines, doshas, and personalized treatment protocols.",
      gradient: "bg-gradient-to-br from-success/10 to-success/20"
    },
    {
      icon: Activity,
      title: "Dosha Assessment Integration",
      description: "Digital Prakriti and Vikriti analysis tools integrated with modern diagnostic workflows.",
      gradient: "bg-gradient-to-br from-primary/10 to-accent/10"
    },
    {
      icon: FileText,
      title: "Traditional Medicine Documentation",
      description: "Comprehensive documentation system for Panchakosha, Tridosha principles, and classical Ayurvedic texts.",
      gradient: "bg-gradient-to-br from-warning/10 to-primary/10"
    }
  ];

  const benefits = [
    "Bridge 5000+ years of Ayurvedic wisdom with modern digital healthcare systems",
    "Dual-coding system supporting both NAMASTE and ICD-11 classification standards",
    "Sanskrit terminology and classical text integration for authentic practice",
    "FHIR-compliant data exchange ensuring global healthcare interoperability",
    "Evidence-based traditional medicine documentation and research support"
  ];
 const [namasteCode, setNamasteCode] = useState("");
  const [ayurvedaTerm, setAyurvedaTerm] = useState("");
  const [icd11Code, setIcd11Code] = useState("");
  const [error, setError] = useState("");

  const handleConvert = async () => {
    setError("");
    setIcd11Code("");
    const code = namasteCode.trim().toUpperCase();

    // Simulated lookup (replace with real API call)
    const namasteToIcd11Map = {
      "NAMASTE-A001": "ICD11-1A01.0",
      "NAMASTE-A002": "ICD11-1A02.1",
      "NAMASTE-B001": "ICD11-2B41.0",
      "NAMASTE-B002": "ICD11-2B41.1",
      "NAMASTE-C001": "ICD11-3C80.0",
      "NAMASTE-D001": "ICD11-4D90.0",
    };
if (namasteToIcd11Map[code]) {
      setIcd11Code(namasteToIcd11Map[code]);
    } else {
      setError("NAMASTE code not found in our database.");
    }
  };

  const handleAyurvedaSearch = async () => {
    setError("");
    setIcd11Code("");

    const term = ayurvedaTerm.trim().toLowerCase();

    // Simulated Ayurveda term to NAMASTE code map
    const termToNamasteMap = {
      "kaphaja kasa": "NAMASTE-A001",
      "pittaja jvara": "NAMASTE-A002",
      "vataja shirahshoola": "NAMASTE-B001",
      "pittaja shirahshoola": "NAMASTE-B002",
      "vatavyadhi": "NAMASTE-C001",
      "jathara roga": "NAMASTE-D001",
    };

    const resolvedCode = termToNamasteMap[term];

    if (resolvedCode) {
      setNamasteCode(resolvedCode);
      const namasteToIcd11Map = {
 "NAMASTE-A001": "ICD11-1A01.0",
        "NAMASTE-A002": "ICD11-1A02.1",
        "NAMASTE-B001": "ICD11-2B41.0",
        "NAMASTE-B002": "ICD11-2B41.1",
        "NAMASTE-C001": "ICD11-3C80.0",
        "NAMASTE-D001": "ICD11-4D90.0",
      };
      setIcd11Code(namasteToIcd11Map[resolvedCode]);
    } else {
      setError("Ayurveda term not found. Try a different one.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Modern
                <span className="block text-primary">Āyurveda:</span>
                <span className="block">Bridging Ancient</span>
                <span className="block">Wisdom with Digital Healthcare</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                The world's first comprehensive digital platform integrating traditional Ayurvedic practices with 
                modern healthcare technology, featuring dual NAMASTE-ICD11 coding for authentic traditional medicine documentation.
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
                    <h3 className="font-semibold text-lg">Dr. Rajesh Sharma</h3>
                    <p className="text-muted-foreground">Ayurvedic Medicine Specialist (BAMS, MD)</p>
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
              Advanced digital tools for authentic Ayurvedic practice with modern healthcare integration
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
  
    <section id="converter" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Code Converter</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert NAMASTE codes or Ayurveda terms to ICD-11 codes.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="p-8 w-full max-w-lg shadow-xl">
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="namaste-code" className="text-sm font-medium">
                  Enter NAMASTE Code:
                </label>
                <input
                  id="namaste-code"
                  type="text"
                  className="input"
                  placeholder="e.g., NAMASTE-A001"
                  value={namasteCode}
                  onChange={(e) => setNamasteCode(e.target.value)}
                />
                <Button onClick={handleConvert} className="w-full">
                  Convert NAMASTE to ICD-11
                </Button>
              </div>

              <div className="space-y-2 pt-6 border-t">
                <label htmlFor="ayurveda-term" className="text-sm font-medium">
                  Or search by Ayurveda term:
                </label>
                <input
                  id="ayurveda-term"
                  type="text"
                  className="input"
                  placeholder="e.g., Pittaja jvara"
                  value={ayurvedaTerm}
                  onChange={(e) => setAyurvedaTerm(e.target.value)}
                />
                <Button onClick={handleAyurvedaSearch} className="w-full">
                  Search Ayurveda Term
                </Button>
              </div>

              {icd11Code && (
              <div className="mt-4 bg-primary/10 text-black p-4 rounded-lg text-center font-bold text-lg">
                  ICD-11 Code: {icd11Code}
                </div>
              )}
              {error && (
                <div className="mt-4 bg-red-500/10 text-red-500 p-4 rounded-lg text-center">
                  {error}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Understanding Ayurvedic Digital Healthcare
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our platform revolutionizes traditional Ayurveda by seamlessly integrating ancient Vedic principles 
                with contemporary healthcare standards. Experience the harmony of time-tested wisdom and cutting-edge 
                technology, designed to preserve authenticity while enhancing clinical outcomes.
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
                    <div className="text-3xl font-bold text-primary">5000+</div>
                    <div className="text-sm text-muted-foreground">Years of Tradition</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent">2000+</div>
                    <div className="text-sm text-muted-foreground">NAMASTE Codes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-warning">Sanskrit</div>
                    <div className="text-sm text-muted-foreground">Text Integration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">FHIR</div>
                    <div className="text-sm text-muted-foreground">Compliant</div>
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
              Ready to Digitize Your Ayurvedic Practice?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join the revolution of traditional medicine practitioners embracing digital transformation 
              while preserving the authentic essence of Ayurveda.
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
                  <span className="font-bold text-lg">AyurvedaConnect</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Preserving ancient wisdom through modern digital healthcare technology.
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
            © 2024 AyurvedaConnect. All rights reserved. | सर्वे भवन्तु सुखिनः
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;