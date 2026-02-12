import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/index";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

/**
 * Root App Component
 * Sets up the global providers and routing for the iTechwx Microsoft 365 Security Webinar landing page.
 * © 2026 iTechwx & Technova - Trusted Partners of Microsoft. Bảo lưu mọi quyền.

 */
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route 
                path={ROUTE_PATHS.HOME} 
                element={<Home />} 
              />
              {/* Catch-all route for any undefined paths, redirecting to home for this single-page webinar application */}
              <Route 
                path="*" 
                element={<Home />} 
              />
            </Routes>
          </Layout>
        </BrowserRouter>
        {/* Feedback components for form submissions and UI interactions */}
        <Toaster />
        <Sonner 
          position="top-right" 
          expand={false} 
          richColors 
          closeButton
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
