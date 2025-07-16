import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, X, BookOpen, Clock, Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const courses = [
  {
    id: 1,
    title: "General Knowledge Comprehensive",
    progress: 75,
    expiryDays: 15,
    category: "Online Assessment",
    type: "Assessment"
  },
  {
    id: 2,
    title: "English Language Mastery",
    progress: 60,
    expiryDays: 22,
    category: "Demo",
    type: "Lecture"
  },
  {
    id: 3,
    title: "Quantitative Aptitude",
    progress: 90,
    expiryDays: 8,
    category: "Online Assessment",
    type: "Live Class"
  },
  {
    id: 4,
    title: "Logical Reasoning",
    progress: 45,
    expiryDays: 30,
    category: "All",
    type: "Assessment"
  },
  {
    id: 5,
    title: "Current Affairs 2024",
    progress: 85,
    expiryDays: 12,
    category: "Online Assessment",
    type: "Lecture"
  }
]

export default function MyCourses() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">My Courses</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Filters */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">All</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Online Assessment</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Demo</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Badge variant="secondary" className="cursor-pointer">Lecture</Badge>
                  <Badge variant="secondary" className="cursor-pointer">Assessment</Badge>
                  <Badge variant="secondary" className="cursor-pointer">Live Class</Badge>
                </div>
                
                <div className="flex gap-2 ml-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search by course name" className="pl-10 w-64" />
                  </div>
                  <Button variant="outline" size="icon">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {course.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Expiring in {course.expiryDays} days</span>
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => window.open(`/course-detail/${course.id}`, '_blank')}
                    >
                      View Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}