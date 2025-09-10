import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { 
  Search, 
  Plus, 
  Eye,
  Edit,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  Shield,
  Heart,
  Activity,
  Droplet,
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const mockLoggedInPatientId = "EMR-20250908-000123";
const Myrecord = () => {
     const { toast } = useToast();

  const patients = [
    {
      id: "EMR-20250908-000123",
      name: "John Doe",
      doctor: "",
      mrn: "JD12345",
      phone: "(555) 123-4567",
      email: "john.doe@example.com",
      address: "123 Main St, City, State 12345",
      avatar: "",
      problems: [
        { date: "2023-10-26", disease: "Essential Hypertension", namaste: "NM-CV-007", icd: "BA00.Z", notes: "Managed with ACE inhibitors." },
        { date: "2022-05-10", disease: "Type 2 Diabetes Mellitus", namaste: "NM-EN-005", icd: "8A11.0", notes: "On metformin, diet controlled." },
        { date: "2024-01-15", disease: "Migraine with aura", namaste: "NM-NE-012", icd: "8A01.1", notes: "Occasional attacks, managed with medication." }
      ],
      consent: "Granted",
      lastVisit: "2024-03-01 10:30 AM",
      nextAppointment: "2024-03-15 14:00 PM",
      healthMetrics: {
        bloodPressure: "120/80 mmHg",
        bloodSugar: "110 mg/dL (fasting)",
        weight: "185 lbs"
      }
    },
    // Only the patient with the matching ID will be displayed. Other data is ignored.
    {
      id: "EMR-20250908-000124",
      name: "Jane Smith",
      doctor: "Dr. Michael Chen, MD",
      // ... other data
    },
    {
      id: "EMR-20250908-000125",
      name: "Robert Johnson",
      doctor: "Dr. Sarah Wilson, BHMS",
      // ... other data
    }
  ];

  // Find the single patient record that matches the logged-in user's ID
  const patient = patients.find(p => p.id === mockLoggedInPatientId);

  // If the patient record is not found, display a message.
  if (!patient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20">
        <Card className="p-8 text-center">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">You do not have a patient record associated with this account.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Define the missing handleLogout function
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-sans">
      <Header isLoggedIn onLogout={handleLogout} />
      
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My report</h1>
            <p className="text-muted-foreground"></p>
          </div>
        </div>
      <div className="container mx-auto p-6 space-y-8">
        {/* Patient Profile Section */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-primary/10 flex-row items-center gap-4 p-6">
            <Avatar className="h-16 w-16 shadow-lg border-2 border-white">
              <AvatarImage src={patient.avatar} alt={patient.name} />
              <AvatarFallback className="text-lg font-semibold bg-primary text-white">
                {patient.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h2 className="text-2xl font-bold">{patient.name}</h2>
              <p className="text-sm text-muted-foreground">MRN: {patient.mrn}</p>
            </div>
          </CardHeader>
          <CardContent className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="font-medium">{patient.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium">{patient.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Address</span>
                <span className="font-medium">{patient.address}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Last Visit</span>
                <span className="font-medium">{patient.lastVisit}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Next Appointment</span>
                <span className="font-medium">{patient.nextAppointment}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <div className="flex flex-col">
                <span className="text-sm text-muted-foreground">Consent Status</span>
                <Badge className="bg-success/20 text-success border-success/30 mt-1 self-start">{patient.consent}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* My Health Summary and Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Health Summary</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex flex-col space-y-2">
                <span className="text-sm font-normal text-muted-foreground">Blood Pressure</span>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-rose-500" />
                  <span className="text-xl font-semibold">{patient.healthMetrics.bloodPressure}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Last checked 2 days ago
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Sugar</CardTitle>
              <Droplet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex flex-col space-y-2">
                <span className="text-sm font-normal text-muted-foreground">Fasting</span>
                <div className="flex items-center">
                  <span className="text-xl font-semibold">{patient.healthMetrics.bloodSugar}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Last checked 1 week ago
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Weight</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold flex flex-col space-y-2">
                <span className="text-sm font-normal text-muted-foreground">Current</span>
                <div className="flex items-center">
                  <span className="text-xl font-semibold">{patient.healthMetrics.weight}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Last checked 1 month ago
              </p>
            </CardContent>
          </Card>
        </div>

        {/* My Medical History Section */}
        <Card>
          <CardHeader>
            <CardTitle>My Medical History</CardTitle>
            <p className="text-sm text-muted-foreground">A summary of your diagnosed conditions.</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {patient.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 p-4 border rounded-lg bg-card transition-all hover:shadow-md">
                <FileText className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-lg">{problem.disease}</span>
                    <span className="text-sm text-muted-foreground">{problem.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <Badge variant="outline" className="border-primary/20 bg-primary/10 text-primary">NAMASTE: {problem.namaste}</Badge>
                    <Badge variant="outline" className="border-secondary/20 bg-secondary/10 text-secondary">ICD-11: {problem.icd}</Badge>
                  </div>
                  <p className="text-sm text-foreground/80">{problem.notes}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

      </div>
    </div>
     {/* QR Code Centered Section */}
    <div className="flex justify-center items-center py-8">
      <Card className="p-6 flex flex-col items-center">
        <CardTitle className="mb-4 text-lg">My QR Code</CardTitle>
        {/* Replace the src below with a real QR code generator or image as needed */}
        <img
        src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(patient.id)}`}
        alt="Patient QR Code"
        className="rounded shadow-md"
        width={180}
        height={180}
        />
        <p className="mt-2 text-xs text-muted-foreground">Scan to access my record</p>
      </Card>
    </div>
   

      </div>

  );
}

export default Myrecord;