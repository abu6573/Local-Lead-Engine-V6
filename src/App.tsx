import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/ScrollToTop";
import { initializeAttribution } from "@/lib/attribution";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import BlogPage from "./pages/BlogPage";
import Contact from "./pages/Contact";
import FaqsPage from "./pages/FaqsPage";
import StrategyCall from "./pages/StrategyCall";
import TradeDetail from "./pages/TradeDetail";
import ContractorCategoryPage from "./pages/ContractorCategoryPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    initializeAttribution();
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/google-ads-for-local-service-contractors" element={<Services />} />
              <Route path="/services" element={<Navigate to="/google-ads-for-local-service-contractors" replace />} />
              <Route path="/trades/:slug" element={<TradeDetail />} />
              <Route path="/contractors/google-ads-for-:industry" element={<ContractorCategoryPage />} />
              <Route path="/contractors/:slug" element={<ContractorCategoryPage />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/faqs" element={<FaqsPage />} />
              <Route path="/faq" element={<Navigate to="/faqs" replace />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/strategy-call" element={<StrategyCall />} />
              <Route path="/book-strategy-call" element={<StrategyCall />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
