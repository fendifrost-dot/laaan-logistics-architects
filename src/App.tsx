import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Markets from "./pages/Markets";
import Investors from "./pages/Investors";
import Contact from "./pages/Contact";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { ScrollToHash } from "./components/ScrollToHash";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
