import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Myrecord from "./pages/Myrecord";
import P from "./pages/p";
import MRDForm from "./pages/MRDForm";
import Namasteicd11 from "./pages/Namasteicd11";

const queryClient = new QueryClient();

// ✅ Wrapper to extract patient from router state
const MRDFormWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const patient = location.state?.patient;

  if (!patient) {
    return (
      <div className="text-center mt-10 text-red-500">
        No patient data found. Please go back and select a patient.
      </div>
    );
  }

  return <MRDForm patient={patient} onClose={() => navigate(-1)} />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/mid-aid-systems">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/p" element={<P />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/myreport" element={<Myrecord />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/MRDform" element={<MRDFormWrapper />} />
          <Route path="/namaste-icd-11" element={<Namasteicd11 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
