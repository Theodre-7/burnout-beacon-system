
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Dashboard
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Journal from "./pages/Journal";
import MoodTracking from "./pages/MoodTracking";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Admin
import Admin from "./pages/Admin";
import AdminHome from "./pages/AdminHome";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminAlerts from "./pages/AdminAlerts";
import AdminReports from "./pages/AdminReports";
import AdminTeam from "./pages/AdminTeam";
import AdminSettings from "./pages/AdminSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route path="journal" element={<Journal />} />
            <Route path="mood" element={<MoodTracking />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            {/* Add other dashboard routes as needed */}
          </Route>
          
          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminHome />} />
            <Route path="analytics" element={<AdminAnalytics />} />
            <Route path="alerts" element={<AdminAlerts />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="team" element={<AdminTeam />} />
            <Route path="settings" element={<AdminSettings />} />
            {/* Add other admin routes as needed */}
          </Route>
          
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
