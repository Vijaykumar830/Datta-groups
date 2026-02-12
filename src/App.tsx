import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

// Layout
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import TradingProducts from "./pages/TradingProducts";
import Electronics from "./pages/Electronics";
import Industries from "./pages/Industries";
import Contact from "./pages/Contact";
import Trading from "./pages/Trading";
import NotFound from "./pages/NotFound";

// 🎆 Festival System
import FestivalAnimator from "./components/FestivalAnimator";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* 🔔 Global Toasts */}
        <Toaster />
        <Sonner />

        <BrowserRouter>
          {/* 🎉 Festival Banner (fixed) */}
          <FestivalAnimator />

          {/* 🌍 MAIN APP LAYOUT */}
          <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<TradingProducts />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/trading" element={<Trading />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
