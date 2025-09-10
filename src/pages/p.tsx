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
 const p = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logged out");
  };

  return(
  <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-sans">
      <Header isLoggedIn onLogout={handleLogout} />

    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Patient Card */}
      <Card className="flex-1">
        <CardHeader>
            <Avatar className="w-16 h-16 mb-4">
              <AvatarImage src="/avatars/patient.png" alt="Patient" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            <CardTitle>Patient</CardTitle>
            <CardDescription>Access your medical records, appointments, and more.</CardDescription>
        </CardHeader>
        <CardContent>
            <Button
              className="w-full"
              variant="default"
              onClick={() => {
                window.location.href = "/myreport";
                // You can add additional logic here if needed after redirect
              }}
            >
              Go to Patient Portal
            </Button>
        </CardContent>
      </Card>

        {/* Doctor Card */}
        <Card className="flex-1">
          <CardHeader>
            <Avatar className="w-16 h-16 mb-4">
                <AvatarImage src="/avatars/doctor.png" alt="Doctor" />
                <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <CardTitle>Doctor</CardTitle>
            <CardDescription>Manage patients, appointments, and prescriptions.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              className="w-full"
              variant="default"
              onClick={() => {
                window.location.href = "/patients";
              }}
            >
              Go to Doctor Portal
            </Button>
          </CardContent>
        </Card>
    </div>
  </div>
  )
};
export default p;