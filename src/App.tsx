import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MyCourses from "./pages/MyCourses";
import BuyCourses from "./pages/BuyCourses";
import CourseDetail from "./pages/CourseDetail";
import BuyCourseDetail from "./pages/BuyCourseDetail";
import LiveClass from "./pages/LiveClass";
import HomeAssignment from "./pages/HomeAssignment";
import OnlineAssignment from "./pages/OnlineAssignment";
import Attendance from "./pages/Attendance";
import DoubtForm from "./pages/DoubtForm";
import TestReport from "./pages/TestReport";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/portal" element={<Index />} />
          <Route path="/my-courses" element={<MyCourses />} />
          <Route path="/course-detail/:courseId" element={<CourseDetail />} />
          <Route path="/buy-courses" element={<BuyCourses />} />
          <Route path="/buy-course-detail/:courseId" element={<BuyCourseDetail />} />
          <Route path="/live-class" element={<LiveClass />} />
          <Route path="/home-assignment" element={<HomeAssignment />} />
          <Route path="/online-assignment" element={<OnlineAssignment />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/doubt-form" element={<DoubtForm />} />
          <Route path="/test-report/:testId" element={<TestReport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
