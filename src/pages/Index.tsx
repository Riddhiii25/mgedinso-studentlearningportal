import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { DashboardStats } from "@/components/DashboardStats"
import { RecentActivity } from "@/components/RecentActivity"
import { CourseProgress } from "@/components/CourseProgress"
import { UpcomingDeadlines } from "@/components/UpcomingDeadlines"
import { Bell, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-card px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <SidebarTrigger />
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Welcome back, John! Here's what's happening with your courses.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search courses, students..." 
                    className="pl-10 w-64"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Course
                </Button>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Stats Grid */}
            <DashboardStats />
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Recent Activity */}
              <div className="lg:col-span-1">
                <RecentActivity />
              </div>
              
              {/* Middle Column - Course Progress */}
              <div className="lg:col-span-1">
                <CourseProgress />
              </div>
              
              {/* Right Column - Upcoming Deadlines */}
              <div className="lg:col-span-1">
                <UpcomingDeadlines />
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
