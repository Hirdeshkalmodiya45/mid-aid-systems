import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import StatCard from "@/components/StatCard";
import { 
  TrendingUp, 
  Users, 
  Calendar, 
  DollarSign,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Pie, Cell, AreaChart, Area } from 'recharts';

const Analytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [selectedSystem, setSelectedSystem] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "2024-01", to: "2024-08" });

  // Sample data for analytics
  const revenueData = [
    { month: "Jan", revenue: 45000, patients: 1200, appointments: 800 },
    { month: "Feb", revenue: 42000, patients: 1100, appointments: 750 },
    { month: "Mar", revenue: 48000, patients: 1300, appointments: 900 },
    { month: "Apr", revenue: 52000, patients: 1400, appointments: 950 },
    { month: "May", revenue: 46000, patients: 1250, appointments: 850 },
    { month: "Jun", revenue: 58000, patients: 1600, appointments: 1100 },
    { month: "Jul", revenue: 55000, patients: 1500, appointments: 1000 },
    { month: "Aug", revenue: 60000, patients: 1650, appointments: 1150 }
  ];

  const systemDistribution = [
    { name: "Homeopathy", value: 35, patients: 5250, color: "#059669" },
    { name: "Ayurveda", value: 30, patients: 4500, color: "#2563eb" },
    { name: "Unani", value: 20, patients: 3000, color: "#dc2626" },
    { name: "Allopathy", value: 15, patients: 2250, color: "#7c3aed" }
  ];

  const doctorPerformance = [
    { name: "Dr. Emily Chen", patients: 1247, revenue: 187050, rating: 4.9, consultations: 856 },
    { name: "Dr. Priya Mishra", patients: 1089, revenue: 141570, rating: 4.8, consultations: 743 },
    { name: "Dr. Michael Green", patients: 892, revenue: 107040, rating: 4.7, consultations: 612 },
    { name: "Dr. Sarah Wilson", patients: 756, revenue: 83160, rating: 4.6, consultations: 498 }
  ];

  const treatmentEffectiveness = [
    { treatment: "Chronic Pain Management", successRate: 89, patients: 324 },
    { treatment: "Digestive Disorders", successRate: 92, patients: 298 },
    { treatment: "Respiratory Issues", successRate: 85, patients: 267 },
    { treatment: "Mental Health", successRate: 78, patients: 189 },
    { treatment: "Skin Conditions", successRate: 94, patients: 156 }
  ];

  const appointmentTrends = [
    { day: "Mon", appointments: 45, cancellations: 3, noShows: 2 },
    { day: "Tue", appointments: 52, cancellations: 4, noShows: 1 },
    { day: "Wed", appointments: 48, cancellations: 2, noShows: 3 },
    { day: "Thu", appointments: 56, cancellations: 5, noShows: 2 },
    { day: "Fri", appointments: 49, cancellations: 3, noShows: 1 },
    { day: "Sat", appointments: 38, cancellations: 2, noShows: 1 },
    { day: "Sun", appointments: 25, cancellations: 1, noShows: 0 }
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  const handleExportData = () => {
    console.log("Exporting analytics data...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header isLoggedIn onLogout={handleLogout} />
      
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Analytics Dashboard</h1>
            <p className="text-muted-foreground">Comprehensive healthcare analytics and insights</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={handleExportData}>
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>

        {/* Filter Controls */}
        <Card>
          <CardHeader>
            <CardTitle>Analytics Filters</CardTitle>
            <CardDescription>Customize your analytics view</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="period">Time Period</Label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="system">Medical System</Label>
                <Select value={selectedSystem} onValueChange={setSelectedSystem}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select system" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Systems</SelectItem>
                    <SelectItem value="homeopathy">Homeopathy</SelectItem>
                    <SelectItem value="ayurveda">Ayurveda</SelectItem>
                    <SelectItem value="unani">Unani</SelectItem>
                    <SelectItem value="allopathy">Allopathy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="dateFrom">From Date</Label>
                <Input 
                  type="month" 
                  value={dateRange.from}
                  onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="dateTo">To Date</Label>
                <Input 
                  type="month" 
                  value={dateRange.to}
                  onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Revenue"
            value="$416,050"
            change="+18.2%"
            changeType="positive"
            icon={DollarSign}
            description="vs last period"
          />
          <StatCard
            title="Total Patients"
            value="15,984"
            change="+12.5%"
            changeType="positive"
            icon={Users}
            description="unique patients"
          />
          <StatCard
            title="Appointments"
            value="6,515"
            change="+8.7%"
            changeType="positive"
            icon={Calendar}
            description="completed"
          />
          <StatCard
            title="Success Rate"
            value="87.3%"
            change="+2.1%"
            changeType="positive"
            icon={TrendingUp}
            description="treatment success"
          />
        </div>

        {/* Revenue and Patient Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Patient Trends</CardTitle>
              <CardDescription>Monthly revenue and patient growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Area yAxisId="left" type="monotone" dataKey="revenue" stroke="#2563eb" fill="#2563eb" fillOpacity={0.2} name="Revenue ($)" />
                  <Line yAxisId="right" type="monotone" dataKey="patients" stroke="#059669" strokeWidth={3} name="Patients" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical System Distribution</CardTitle>
              <CardDescription>Patient distribution across medical systems</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={systemDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {systemDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Doctor Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Doctor Performance Analytics</CardTitle>
            <CardDescription>Detailed performance metrics for healthcare providers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 bg-primary/5 font-medium">Doctor</th>
                    <th className="text-left p-3 bg-primary/5 font-medium">Total Patients</th>
                    <th className="text-left p-3 bg-primary/5 font-medium">Revenue Generated</th>
                    <th className="text-left p-3 bg-primary/5 font-medium">Consultations</th>
                    <th className="text-left p-3 bg-primary/5 font-medium">Rating</th>
                    <th className="text-left p-3 bg-primary/5 font-medium">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {doctorPerformance.map((doctor, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{doctor.name}</td>
                      <td className="p-3">{doctor.patients.toLocaleString()}</td>
                      <td className="p-3">${doctor.revenue.toLocaleString()}</td>
                      <td className="p-3">{doctor.consultations}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-1">
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-warning">★</span>
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${(doctor.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Effectiveness and Appointment Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Effectiveness</CardTitle>
              <CardDescription>Success rates by treatment type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {treatmentEffectiveness.map((treatment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{treatment.treatment}</span>
                      <span className="text-muted-foreground">{treatment.patients} patients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-success h-2 rounded-full" 
                          style={{ width: `${treatment.successRate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium w-12">{treatment.successRate}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Appointment Trends</CardTitle>
              <CardDescription>Appointments, cancellations, and no-shows</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={appointmentTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="appointments" fill="#2563eb" name="Appointments" />
                  <Bar dataKey="cancellations" fill="#dc2626" name="Cancellations" />
                  <Bar dataKey="noShows" fill="#7c3aed" name="No Shows" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Additional Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="h-5 w-5 mr-2" />
                Patient Satisfaction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">92.4%</div>
                <p className="text-muted-foreground">Average satisfaction rating</p>
                <div className="mt-4 text-sm">
                  <div className="flex justify-between mb-1">
                    <span>Excellent</span>
                    <span>68%</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Good</span>
                    <span>24%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fair</span>
                    <span>8%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="h-5 w-5 mr-2" />
                Peak Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>10:00 AM - 12:00 PM</span>
                  <span className="font-medium">35%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>2:00 PM - 4:00 PM</span>
                  <span className="font-medium">28%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>4:00 PM - 6:00 PM</span>
                  <span className="font-medium">22%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>8:00 AM - 10:00 AM</span>
                  <span className="font-medium">15%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="h-5 w-5 mr-2" />
                Top Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Hypertension</span>
                  <span className="font-medium">18%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Diabetes</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Anxiety</span>
                  <span className="font-medium">12%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Arthritis</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Migraine</span>
                  <span className="font-medium">8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Analytics;