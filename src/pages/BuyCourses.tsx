import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, X, IndianRupee, Calendar, BookOpen } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete SSC CGL Preparation",
    image: "/placeholder.svg",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    category: "Online Assessment",
    type: "Assessment",
    duration: "6 months"
  },
  {
    id: 2,
    title: "Banking Exam Masterclass",
    image: "/placeholder.svg",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    category: "Demo",
    type: "Lecture",
    duration: "4 months"
  },
  {
    id: 3,
    title: "UPSC Prelims Foundation",
    image: "/placeholder.svg",
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    category: "Online Assessment",
    type: "Live Class",
    duration: "12 months"
  },
  {
    id: 4,
    title: "Railway Group D Complete",
    image: "/placeholder.svg",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    category: "All",
    type: "Assessment",
    duration: "3 months"
  },
  {
    id: 5,
    title: "Police Constable Preparation",
    image: "/placeholder.svg",
    price: 1799,
    originalPrice: 2299,
    discount: 22,
    category: "Online Assessment",
    type: "Lecture",
    duration: "5 months"
  }
]

export default function BuyCourses() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Buy Courses</h1>
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
                    <Input placeholder="Search courses" className="pl-10 w-64" />
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
                <Card key={course.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-2 right-2 bg-green-600">
                      {course.discount}% OFF
                    </Badge>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg line-clamp-2">{course.title}</CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center text-2xl font-bold text-primary">
                        <IndianRupee className="w-5 h-5" />
                        {course.price}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground line-through">
                        <IndianRupee className="w-3 h-3" />
                        {course.originalPrice}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {course.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {course.type}
                      </Badge>
                    </div>
                    
                    <Button className="w-full">View Details</Button>
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