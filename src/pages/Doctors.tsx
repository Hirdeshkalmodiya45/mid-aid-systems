import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import { 
  Search, 
  Plus, 
  Star,
  Calendar,
  Phone,
  Mail,
  MapPin,
  User,
  Stethoscope,
  Award,
  Clock,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [isAddDoctorOpen, setIsAddDoctorOpen] = useState(false);
  const { toast } = useToast();

  const doctors = [
    {
      id: "DR001",
      name: "Dr. Emily Chen",
      specialization: "Integrative Medicine",
      qualification: "MD, BHMS",
      experience: "12 years",
      rating: 4.9,
      patients: 1247,
      phone: "(555) 123-4567",
      email: "emily.chen@healthconnect.com",
      address: "City Medical Center, Downtown",
      avatar: "",
      status: "Available",
      nextAvailable: "Today 2:30 PM",
      consultationFee: "$150",
      languages: ["English", "Mandarin", "Hindi"],
      specialties: ["Chronic Disease Management", "Preventive Care", "Holistic Treatment"],
      education: ["Harvard Medical School", "National Institute of Homeopathy"],
      about: "Dr. Chen specializes in integrative medicine, combining conventional medical treatments with complementary therapies to provide comprehensive patient care."
    },
    {
      id: "DR002",
      name: "Dr. Michael Green",
      specialization: "Homeopathy",
      qualification: "BHMS, MD (Hom)",
      experience: "8 years",
      rating: 4.7,
      patients: 892,
      phone: "(555) 987-6543",
      email: "michael.green@healthconnect.com",
      address: "Northside Clinic, Uptown",
      avatar: "",
      status: "Busy",
      nextAvailable: "Tomorrow 10:00 AM",
      consultationFee: "$120",
      languages: ["English", "Spanish"],
      specialties: ["Respiratory Disorders", "Digestive Health", "Mental Health"],
      education: ["California College of Homeopathy", "American Medical College"],
      about: "Dr. Green has extensive experience in classical homeopathy and focuses on treating the root cause of diseases through natural remedies."
    },
    {
      id: "DR003",
      name: "Dr. Priya Mishra",
      specialization: "Ayurveda",
      qualification: "BAMS, MD (Ayu)",
      experience: "15 years",
      rating: 4.8,
      patients: 1089,
      phone: "(555) 456-7890",
      email: "priya.mishra@healthconnect.com",
      address: "Wellness Center, Medical District",
      avatar: "",
      status: "Available",
      nextAvailable: "Today 4:00 PM",
      consultationFee: "$130",
      languages: ["English", "Hindi", "Sanskrit"],
      specialties: ["Panchakarma", "Women's Health", "Stress Management"],
      education: ["All India Institute of Ayurveda", "Banaras Hindu University"],
      about: "Dr. Mishra is a renowned Ayurvedic practitioner specializing in traditional healing methods and modern wellness approaches."
    },
    {
      id: "DR004",
      name: "Dr. Sarah Wilson",
      specialization: "Unani Medicine",
      qualification: "BUMS, MD (Unani)",
      experience: "10 years",
      rating: 4.6,
      patients: 756,
      phone: "(555) 321-0987",
      email: "sarah.wilson@healthconnect.com",
      address: "Heritage Medical Center, Old Town",
      avatar: "",
      status: "Available",
      nextAvailable: "Today 11:30 AM",
      consultationFee: "$110",
      languages: ["English", "Arabic", "Urdu"],
      specialties: ["Cardiac Health", "Liver Disorders", "Joint Pain"],
      education: ["Jamia Hamdard University", "International Unani College"],
      about: "Dr. Wilson combines traditional Unani medicine with contemporary diagnostic methods for comprehensive patient care."
    }
  ];

  const specialties = ["All", "Integrative Medicine", "Homeopathy", "Ayurveda", "Unani Medicine"];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "all" || 
                            doctor.specialization.toLowerCase() === selectedSpecialty.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleAddDoctor = () => {
    toast({
      title: "Doctor Added",
      description: "New doctor has been added to the system successfully",
    });
    setIsAddDoctorOpen(false);
  };

  const handleBookAppointment = (doctor: any) => {
    toast({
      title: "Appointment Booking",
      description: `Redirecting to book appointment with ${doctor.name}`,
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Available":
        return <Badge className="bg-success/20 text-success border-success/30">Available</Badge>;
      case "Busy":
        return <Badge className="bg-warning/20 text-warning border-warning/30">Busy</Badge>;
      default:
        return <Badge variant="secondary">Offline</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header isLoggedIn onLogout={handleLogout} />
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Doctor Directory</h1>
            <p className="text-muted-foreground">Find and connect with healthcare professionals</p>
          </div>
          
          <Dialog open={isAddDoctorOpen} onOpenChange={setIsAddDoctorOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
                <Plus className="h-4 w-4 mr-2" />
                Add New Doctor
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>Add New Doctor</DialogTitle>
                <DialogDescription>
                  Enter doctor information to add them to the system.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="doctorName">Full Name</Label>
                  <Input id="doctorName" placeholder="Dr. John Smith" />
                </div>
                <div>
                  <Label htmlFor="qualification">Qualification</Label>
                  <Input id="qualification" placeholder="MD, BHMS" />
                </div>
                <div>
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="integrative">Integrative Medicine</SelectItem>
                      <SelectItem value="homeopathy">Homeopathy</SelectItem>
                      <SelectItem value="ayurveda">Ayurveda</SelectItem>
                      <SelectItem value="unani">Unani Medicine</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="experience">Experience (Years)</Label>
                  <Input id="experience" type="number" placeholder="5" />
                </div>
                <div>
                  <Label htmlFor="doctorPhone">Phone</Label>
                  <Input id="doctorPhone" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <Label htmlFor="doctorEmail">Email</Label>
                  <Input id="doctorEmail" type="email" placeholder="doctor@example.com" />
                </div>
                <div>
                  <Label htmlFor="consultationFee">Consultation Fee</Label>
                  <Input id="consultationFee" placeholder="$150" />
                </div>
                <div>
                  <Label htmlFor="clinic">Clinic/Hospital</Label>
                  <Input id="clinic" placeholder="Medical Center Name" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <Button variant="outline" onClick={() => setIsAddDoctorOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleAddDoctor}>
                  Add Doctor
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
                  placeholder="Search doctors by name or specialization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Filter by specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase()}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button variant="outline">Export</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Stethoscope className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{doctors.length}</p>
                  <p className="text-sm text-muted-foreground">Total Doctors</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">{doctors.filter(d => d.status === "Available").length}</p>
                  <p className="text-sm text-muted-foreground">Available Now</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Star className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">4.7</p>
                  <p className="text-sm text-muted-foreground">Avg Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">4</p>
                  <p className="text-sm text-muted-foreground">Specializations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDoctors.map((doctor) => (
            <Card key={doctor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={doctor.avatar} alt={doctor.name} />
                      <AvatarFallback className="text-lg">
                        {doctor.name.split(' ').map(n => n[1] || n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{doctor.name}</h3>
                      <p className="text-muted-foreground">{doctor.qualification}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="outline">{doctor.specialization}</Badge>
                        {getStatusBadge(doctor.status)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-warning text-warning" />
                      <span className="font-semibold">{doctor.rating}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{doctor.patients} patients</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span>{doctor.consultationFee}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{doctor.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{doctor.address}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                    {doctor.languages.map((language, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground mb-3">{doctor.about}</p>
                  
                  <div className="flex gap-2">
                    <Button 
                      className="flex-1" 
                      onClick={() => handleBookAppointment(doctor)}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">
                          <User className="h-4 w-4 mr-2" />
                          View Profile
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Doctor Profile - {doctor.name}</DialogTitle>
                          <DialogDescription>
                            Complete professional information and credentials
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-20 w-20">
                              <AvatarImage src={doctor.avatar} alt={doctor.name} />
                              <AvatarFallback className="text-xl">
                                {doctor.name.split(' ').map(n => n[1] || n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="text-2xl font-semibold">{doctor.name}</h3>
                              <p className="text-muted-foreground">{doctor.qualification}</p>
                              <div className="flex items-center space-x-2 mt-2">
                                <Star className="h-4 w-4 fill-warning text-warning" />
                                <span className="font-semibold">{doctor.rating}</span>
                                <span className="text-muted-foreground">({doctor.patients} patients)</span>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="font-medium">Specialization</Label>
                              <p className="text-muted-foreground">{doctor.specialization}</p>
                            </div>
                            <div>
                              <Label className="font-medium">Experience</Label>
                              <p className="text-muted-foreground">{doctor.experience}</p>
                            </div>
                            <div>
                              <Label className="font-medium">Consultation Fee</Label>
                              <p className="text-muted-foreground">{doctor.consultationFee}</p>
                            </div>
                            <div>
                              <Label className="font-medium">Next Available</Label>
                              <p className="text-muted-foreground">{doctor.nextAvailable}</p>
                            </div>
                          </div>

                          <div>
                            <Label className="font-medium">Education</Label>
                            <ul className="list-disc list-inside text-muted-foreground mt-1">
                              {doctor.education.map((edu, index) => (
                                <li key={index}>{edu}</li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <Label className="font-medium">Contact Information</Label>
                            <div className="space-y-2 mt-1">
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>{doctor.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <span>{doctor.email}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>{doctor.address}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3 mt-6">
                          <Button className="flex-1" onClick={() => handleBookAppointment(doctor)}>
                            <Calendar className="h-4 w-4 mr-2" />
                            Book Appointment
                          </Button>
                          <Button variant="outline">
                            <Mail className="h-4 w-4 mr-2" />
                            Send Message
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  {doctor.status === "Available" && (
                    <p className="text-sm text-success mt-2">
                      Next available: {doctor.nextAvailable}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredDoctors.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Stethoscope className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No doctors found</h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm || selectedSpecialty !== "all" ? 'Try adjusting your search criteria' : 'Add doctors to get started'}
              </p>
              <Button onClick={() => setIsAddDoctorOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Doctor
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Doctors;