import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Activity,
  Plus,
  Search,
  Filter,
  Download,
  BarChart3
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import {Link} from "react-router-dom";
const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedSystem, setSelectedSystem] = useState("homeopathy");

  // Sample data for charts
  const monthlyStats = [
    { month: "Jan", patients: 1200, appointments: 800, revenue: 45000 },
    { month: "Feb", patients: 1100, appointments: 750, revenue: 42000 },
    { month: "Mar", patients: 1300, appointments: 900, revenue: 48000 },
    { month: "Apr", patients: 1400, appointments: 950, revenue: 52000 },
    { month: "May", patients: 1250, appointments: 850, revenue: 46000 },
    { month: "Jun", patients: 1600, appointments: 1100, revenue: 58000 },
    { month: "Jul", patients: 1500, appointments: 1000, revenue: 55000 },
    { month: "Aug", patients: 1350, appointments: 920, revenue: 50000 }
  ];

  const systemData = [
    { name: "Homeopathy", value: 188, color: "#059669" },
    { name: "Ayurveda", value: 156, color: "#2563eb" },
    { name: "Unani", value: 142, color: "#dc2626" },
    { name: "Allopathy", value: 98, color: "#7c3aed" }
  ];

  const diseaseStats = [
    { disease: "JVARAH", system: "Ayurveda", count: 188, code: "EC-3" },
    { disease: "Vitiligo", system: "Homeopathy", count: 188, code: "LRO" },
    { disease: "Daphal-Dam Gavi", system: "Unani", count: 185, code: "E-28" },
    { disease: "Wajai-Zahir", system: "Unani", count: 185, code: "L-1" },
    { disease: "Ishthal-al-Shari", system: "Unani", count: 181, code: "J-18" }
  ];

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header isLoggedIn onLogout={handleLogout} />
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">DASHBOARD</h1>
            <p className="text-muted-foreground"><Link to="/">    Home</Link> / Dashboard</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button className="bg-success hover:bg-success/90">
              <Plus className="h-4 w-4 mr-2" />
              Add Patient
            </Button>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Patients"
            value="15,847"
            change="+12.5%"
            changeType="positive"
            icon={Users}
            description="from last month"
          />
          <StatCard
            title="Appointments Today"
            value="142"
            change="+8.2%"
            changeType="positive"
            icon={Calendar}
            description="scheduled"
          />
          <StatCard
            title="Revenue This Month"
            value="$58,420"
            change="+15.3%"
            changeType="positive"
            icon={TrendingUp}
            description="vs last month"
          />
          <StatCard
            title="Active Treatments"
            value="1,247"
            change="+5.7%"
            changeType="positive"
            icon={Activity}
            description="ongoing cases"
          />
        </div>

        {/* Control Panel */}
        <Card className="bg-success/5 border-success/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button className="bg-success hover:bg-success/90">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Month Wise Statistics
                </Button>
                <Button variant="outline">Consolidated Statistics</Button>
                <Button variant="outline">Time Trend Statistics</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Medical System *</label>
                <Select value={selectedSystem} onValueChange={setSelectedSystem}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homeopathy">Homeopathy</SelectItem>
                    <SelectItem value="ayurveda">Ayurveda</SelectItem>
                    <SelectItem value="unani">Unani</SelectItem>
                    <SelectItem value="allopathy">Allopathy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Report *</label>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    OPD
                  </Button>
                  <Button variant="outline" size="sm">IPD</Button>
                  <Button variant="outline" size="sm">OPD Others</Button>
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Month-Year *</label>
                <Input type="month" className="w-full" defaultValue="2024-08" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Statistics Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Month wise Statistics Chart
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </CardTitle>
              <CardDescription>Previous Month Dashboard - 8 - 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="patients" fill="#2563eb" name="Patients" />
                  <Bar dataKey="appointments" fill="#059669" name="Appointments" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* System Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Medical System Distribution</CardTitle>
              <CardDescription>Patient distribution across medical systems</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={systemData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                  >
                    {systemData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {systemData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm">{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disease Statistics Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Month wise Statistics Details
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search..." className="pl-10" />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 bg-success/10 font-medium">Sr. No.</th>
                    <th className="text-left p-3 bg-success/10 font-medium">NAMC SYSTEM</th>
                    <th className="text-left p-3 bg-success/10 font-medium">DISEASE ID</th>
                    <th className="text-left p-3 bg-success/10 font-medium">DIS CODE</th>
                    <th className="text-left p-3 bg-success/10 font-medium">DIS NAME</th>
                    <th className="text-left p-3 bg-success/10 font-medium">COUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {diseaseStats.map((disease, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3">{String(index + 1).padStart(2, '0')}</td>
                      <td className="p-3">{disease.system}</td>
                      <td className="p-3">undefined</td>
                      <td className="p-3">{disease.code}</td>
                      <td className="p-3">{disease.disease}</td>
                      <td className="p-3 font-medium">{disease.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button variant="outline" size="sm">First</Button>
              <Button variant="outline" size="sm">&lt;</Button>
              <Button variant="outline" size="sm">5</Button>
              <Button variant="default" size="sm" className="bg-success hover:bg-success/90">6</Button>
              <Button variant="outline" size="sm">7</Button>
              <Button variant="outline" size="sm">&gt;</Button>
              <Button variant="outline" size="sm">Last</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;