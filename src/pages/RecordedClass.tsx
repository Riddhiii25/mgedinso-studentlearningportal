import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Calendar, BookOpen, Users } from "lucide-react"
import { LMSSidebar } from "@/components/LMSSidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

const recordedVideos = [
  {
    id: 1,
    title: "Mathematics - Algebra Fundamentals",
    description: "Learn the basics of algebra including linear equations, quadratic equations, and polynomial operations.",
    duration: "45 min",
    uploadDate: "2024-03-15",
    subject: "Mathematics",
    instructor: "Dr. Sarah Johnson",
    views: 1250,
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Physics - Newton's Laws of Motion",
    description: "Comprehensive explanation of Newton's three laws of motion with real-world examples and applications.",
    duration: "38 min",
    uploadDate: "2024-03-12",
    subject: "Physics",
    instructor: "Prof. Michael Chen",
    views: 890,
    thumbnail: "https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Chemistry - Periodic Table Deep Dive",
    description: "Detailed exploration of the periodic table, chemical properties, and element relationships.",
    duration: "52 min",
    uploadDate: "2024-03-10",
    subject: "Chemistry",
    instructor: "Dr. Emily Rodriguez",
    views: 743,
    thumbnail: "https://images.unsplash.com/photo-1532634922-8fe0b757fb13?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "English Literature - Shakespeare's Hamlet",
    description: "Analysis of themes, characters, and literary devices in Shakespeare's masterpiece Hamlet.",
    duration: "41 min",
    uploadDate: "2024-03-08",
    subject: "English",
    instructor: "Ms. Victoria Adams",
    views: 567,
    thumbnail: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Biology - Cell Structure and Function",
    description: "Explore the basic unit of life - cells, their components, and how they function in living organisms.",
    duration: "47 min",
    uploadDate: "2024-03-05",
    subject: "Biology",
    instructor: "Dr. James Wilson",
    views: 932,
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "History - World War II Overview",
    description: "Comprehensive overview of World War II causes, major events, and global impact.",
    duration: "55 min",
    uploadDate: "2024-03-03",
    subject: "History",
    instructor: "Prof. Robert Martinez",
    views: 1100,
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=400&h=250&fit=crop"
  }
]

export default function RecordedClass() {
  const [selectedSubject, setSelectedSubject] = useState("All")
  
  const subjects = ["All", "Mathematics", "Physics", "Chemistry", "English", "Biology", "History"]
  
  const filteredVideos = selectedSubject === "All" 
    ? recordedVideos 
    : recordedVideos.filter(video => video.subject === selectedSubject)

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 px-4 border-b">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <Play className="h-5 w-5 text-primary" />
              <h1 className="text-xl font-semibold">Recorded Classes</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Subject Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-3">Filter by Subject</h2>
              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <Button
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSubject(subject)}
                  >
                    {subject}
                  </Button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button size="lg" className="rounded-full">
                        <Play className="h-5 w-5 mr-2" />
                        Play Video
                      </Button>
                    </div>
                    <Badge 
                      className="absolute top-2 right-2 bg-background/90 text-foreground"
                      variant="secondary"
                    >
                      {video.duration}
                    </Badge>
                  </div>
                  
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{video.subject}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {video.views}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{video.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {video.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <BookOpen className="h-3 w-3 mr-2" />
                        {video.instructor}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        {new Date(video.uploadDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-2" />
                        {video.duration}
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4" variant="outline">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-12">
                <Play className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No videos found</h3>
                <p className="text-muted-foreground">
                  No recorded classes available for the selected subject.
                </p>
              </div>
            )}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}