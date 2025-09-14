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
import MRDForm from "@/pages/MRDForm";
import { Link } from "react-router-dom";
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
  Clock,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Patients = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<any>(null);
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
  const { toast } = useToast();
const [diagnosisSearch, setDiagnosisSearch] = useState("");
const [showTreatmentForm, setShowTreatmentForm] = useState(false);
const [selectedDiagnosis, setSelectedDiagnosis] = useState({
  namasteCode: "",
  icd11Code: "",
  treatmentName: "",
});
const diagnosisMap = {
  "pittaja jvara": {
    namasteCode: "NAMASTE-A002",
    icd11Code: "ICD11-1A02.1",
  },
  "vatavyadhi": {
    namasteCode: "NAMASTE-C001",
    icd11Code: "ICD11-3C80.0",
  },
  // Add more mappings as needed
};
const handleAddToProblemList = () => {
  const term = diagnosisSearch.trim().toLowerCase();
  const match = diagnosisMap[term];

  if (match) {
    setSelectedDiagnosis({
      namasteCode: match.namasteCode,
      icd11Code: match.icd11Code,
      treatmentName: "",
    });
    setShowTreatmentForm(true);
  } else {
    alert("Diagnosis not found. Please try a valid NAMASTE/ICD-11 term.");
  }
};
  const patients = [
    {
      id: "EMR-20250908-000123",
      name: "John Doe",
      doctor: "Dr. Priya Mishra, BAMS",
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
      nextAppointment: "2024-03-15 14:00 PM"
    },
    {
      id: "EMR-20250908-000124",
      name: "Jane Smith",
      doctor: "Dr. Michael Chen, MD",
      mrn: "JS67890",
      phone: "(555) 987-6543",
      email: "jane.smith@example.com",
      address: "456 Oak Ave, City, State 54321",
      avatar: "",
      problems: [
        { date: "2023-08-15", disease: "Chronic Fatigue Syndrome", namaste: "NM-IM-015", icd: "8E49", notes: "Ongoing treatment with supplements." }
      ],
      consent: "Pending",
      lastVisit: "2024-02-28 09:15 AM",
      nextAppointment: "2024-03-20 11:30 AM"
    },
    {
      id: "EMR-20250908-000125",
      name: "Robert Johnson",
      doctor: "Dr. Sarah Wilson, BHMS",
      mrn: "RJ54321",
      phone: "(555) 456-7890",
      email: "robert.j@example.com",
      address: "789 Pine St, City, State 67890",
      avatar: "",
      problems: [
        { date: "2023-12-01", disease: "Anxiety Disorder", namaste: "NM-PS-008", icd: "6B00", notes: "Cognitive behavioral therapy recommended." }
      ],
      consent: "Granted",
      lastVisit: "2024-03-05 16:45 PM",
      nextAppointment: "2024-03-18 10:00 AM"
    }
  ];

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleRequestPatient = (patient: any) => {
    toast({
      title: "Patient Requested",
      description: `Access request sent for ${patient.name}`,
    });
  };


  const handleAddPatient = () => {
    toast({
      title: "Patient Added",
      description: "New patient has been added successfully",
    });
    setIsAddPatientOpen(false);
  };

  const getConsentBadge = (status: string) => {
    if (status === "Granted") {
      return <Badge className="bg-success/20 text-success border-success/30">Granted</Badge>;
    }
    return <Badge className="bg-warning/20 text-warning border-warning/30">Pending</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header isLoggedIn onLogout={handleLogout} />
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Patient Management</h1>
            <p className="text-muted-foreground">Manage patient records and medical information</p>
          </div>
          
          <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add New Patient
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Patient</DialogTitle>
                <DialogDescription>
                  Enter patient information to create a new medical record.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="Enter full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="patient@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" placeholder="Enter full address" />
                </div>
                <div>
                  <Label htmlFor="insurance">Insurance Provider</Label>
                  <Input id="insurance" placeholder="Insurance company" />
                </div>
                <div>
                  <Label htmlFor="policy">Policy Number</Label>
                  <Input id="policy" placeholder="Policy number" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setIsAddPatientOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddPatient}>
                  Add Patient
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search patients by name, ID, or doctor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Patients</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">Export</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Patient Cards */}
        <div className="grid gap-6">
          {filteredPatients.map((patient) => (
            <Card key={patient.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Patient Info */}
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Patient ID</Label>
                      <Input value={patient.id} readOnly className="mt-1" />
                    </div>
                    
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleRequestPatient(patient)}
                    >
                      Request Patient
                    </Button>
                           <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => handleRequestPatient(patient)}
                    >
                     Emergency  Request Patient
                    </Button>
                       <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                    >  
                     <Link to="/MRDform" state={{ patient: patient }}>
          Entry MRD DATA
        </Link>
                    </Button>
                   

                    <div className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{patient.name}</h3>
                        <p className="text-sm text-muted-foreground">{patient.doctor}</p>
                        <p className="text-sm text-muted-foreground">MRN: {patient.mrn}</p>
                      </div>
                    </div>
                  </div>

                  {/* Diagnosis Entry */}
                  <div className="space-y-4">
               <h3 className="font-semibold text-lg">Diagnosis Entry</h3>

  <div className="relative">
    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
    <Input
      placeholder="Search diagnosis eg pittaja jvara"
      className="pl-10"
      value={diagnosisSearch}
      onChange={(e) => setDiagnosisSearch(e.target.value)}
    />
  </div>

  <Button variant="outline" className="w-full" onClick={handleAddToProblemList}>
    Add to Problem List
  </Button>
{showTreatmentForm && (
  <div className="mt-6 space-y-4 border-t pt-6">
    <h4 className="font-semibold text-md">Treatment Details</h4>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="text-sm font-medium">NAMASTE Code</label>
        <Input value={selectedDiagnosis.namasteCode} disabled />
      </div>
      <div>
        <label className="text-sm font-medium">ICD-11 Code</label>
        <Input value={selectedDiagnosis.icd11Code} disabled />
      </div>
    </div>

    <div>
      <label className="text-sm font-medium">Treatment Name</label>
      <Input
        placeholder="Enter treatment name"
        value={selectedDiagnosis.treatmentName}
        onChange={(e) =>
          setSelectedDiagnosis((prev) => ({
            ...prev,
            treatmentName: e.target.value,
          }))
        }
      />
    </div>

    <Button className="w-full">Save Diagnosis & Treatment</Button>
  </div>
)}

                    {/* Problem List */}
                    <div>
                      <h4 className="font-medium mb-3">Problem List</h4>
                      <div className="space-y-3">
                        {patient.problems.map((problem, index) => (
                          <div key={index} className="text-sm space-y-1 p-3 bg-card border rounded-lg">
                            <div className="flex justify-between">
                              <span className="font-medium">{problem.disease}</span>
                              <span className="text-muted-foreground">{problem.date}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                              <span>NAMASTE: {problem.namaste}</span>
                              <span>ICD-11: {problem.icd}</span>
                            </div>
                            <p className="text-xs text-muted-foreground">{problem.notes}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Patient Details & Actions */}
                  <div className="space-y-4">
                    {/* Consent & Security */}
                    <div className="p-4 bg-card border rounded-lg">
                      <h4 className="font-medium mb-3 flex items-center">
                        <Shield className="h-4 w-4 mr-2" />
                        Consent & Security
                      </h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Patient Consent Status:</span>
                          {getConsentBadge(patient.consent)}
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          Request Consent
                        </Button>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <FileText className="h-4 w-4 mr-2" />
                            Review Medical History
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>Medical History - {patient.name}</DialogTitle>
                            <DialogDescription>
                              Browse patient's comprehensive medical record.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Phone</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Phone className="h-4 w-4" />
                                  <span>{patient.phone}</span>
                                </div>
                              </div>
                              <div>
                                <Label>Email</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Mail className="h-4 w-4" />
                                  <span>{patient.email}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <Label>Address</Label>
                              <div className="flex items-center gap-2 mt-1">
                                <MapPin className="h-4 w-4" />
                                <span>{patient.address}</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label>Last Visit</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Clock className="h-4 w-4" />
                                  <span>{patient.lastVisit}</span>
                                </div>
                              </div>
                              <div>
                                <Label>Next Appointment</Label>
                                <div className="flex items-center gap-2 mt-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{patient.nextAppointment}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Full History
                          </Button>
                        </DialogContent>
                      </Dialog>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Appointment
                      </Button>
                      
                      <Button variant="outline" className="w-full justify-start">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Patient Info
                      </Button>
                    </div>

                    {/* Audit Log Preview */}
                    <div className="p-3 bg-muted/30 rounded-lg">
                      <h4 className="font-medium mb-2 text-sm">Recent Activity</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div>{patient.lastVisit} - Patient record accessed by {patient.doctor.split(',')[0]}</div>
                        <div>2024-03-01 09:15 AM - Consent status updated to {patient.consent}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredPatients.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <User className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No patients found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm ? 'Try adjusting your search terms' : 'Add your first patient to get started'}
              </p>
              <Button onClick={() => setIsAddPatientOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Patient
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Patients;