import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { WelcomeBanner } from "@/components/WelcomeBanner"
import { StudentQuickActions } from "@/components/StudentQuickActions"
import { SubmittedTestsTable } from "@/components/SubmittedTestsTable"
import { TestStatistics } from "@/components/TestStatistics"
import { UpcomingEvents } from "@/components/UpcomingEvents"
import { PaperWisePerformance } from "@/components/PaperWisePerformance"
import { QuestionWiseAnalytics } from "@/components/QuestionWiseAnalytics"
import { Footer } from "@/components/Footer"
import { Bell, Search, Plus, MessageSquare, Settings, HelpCircle, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              
              {/* Center Search Bar */}
              <div className="flex-1 max-w-md mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input 
                    placeholder="Search courses, content, instructors..." 
                    className="pl-10 w-full"
                  />
                </div>
              </div>
              
              {/* Right Icons */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
                </Button>
                
                <Button variant="ghost" size="icon">
                  <MessageSquare className="w-5 h-5" />
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Help
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
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
            
            {/* Quick Action Tiles - Test Statistics */}
            <StudentQuickActions />
            
            {/* Test Statistics Cards */}
            <TestStatistics />
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column - Submitted Tests Table */}
              <div className="lg:col-span-2">
                <SubmittedTestsTable />
              </div>
              
              {/* Right Column - Upcoming Events */}
              <div className="lg:col-span-1">
                <UpcomingEvents />
              </div>
            </div>
            
            {/* Paper-wise Performance Charts */}
            <PaperWisePerformance />
            
            {/* Question-wise Analytics */}
            <QuestionWiseAnalytics />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
