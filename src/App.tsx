import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HospitalizationBenefit from "./pages/HospitalizationBenefit";
import MaternityBenefit from "./pages/MaternityBenefit";
import MentorAppBenefit from "./pages/MentorAppBenefit";
import OPDWellnessBenefit from "./pages/OPDWellnessBenefit";
import FinancialSection from "./pages/FinancialSection";
import CorporateList from "./pages/CorporateList";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/employees" element={<Index />} />
          <Route path="/claim-list" element={<Index />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/corporates" element={<Index />} />
          <Route path="/users" element={<Index />} />
          <Route path="/reports" element={<Index />} />
          <Route path="/export" element={<Index />} />
          <Route path="/support" element={<Index />} />
          <Route path="/corporate-list" element={<CorporateList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
