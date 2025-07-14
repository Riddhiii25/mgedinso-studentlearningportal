import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { WelcomeBanner } from "@/components/WelcomeBanner"
import { QuickActions } from "@/components/QuickActions"
import { EnrolledCourses } from "@/components/EnrolledCourses"
import { UpcomingEvents } from "@/components/UpcomingEvents"
import { PerformanceSnapshot } from "@/components/PerformanceSnapshot"
import { Footer } from "@/components/Footer"
import { Bell, Search, Plus, MessageSquare, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                    placeholder="Search courses, content, or instructors..." 
                    className="pl-10 w-80"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageSquare className="w-4 h-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" alt="@johndoe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>Help</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Welcome Banner */}
            <WelcomeBanner />
            
            {/* Quick Action Tiles */}
            <QuickActions />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Enrolled Courses */}
              <div className="lg:col-span-2">
                <EnrolledCourses />
              </div>
              
              {/* Right Column - Upcoming Events & Performance */}
              <div className="lg:col-span-1 space-y-6">
                <UpcomingEvents />
                <PerformanceSnapshot />
              </div>
            </div>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
