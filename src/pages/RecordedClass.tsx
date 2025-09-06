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
    title: "SSC CGL - Quantitative Aptitude Master Class",
    description: "Complete coverage of quantitative aptitude topics including arithmetic, algebra, geometry, and data interpretation for SSC CGL exam.",
    duration: "58 min",
    uploadDate: "2024-03-15",
    subject: "SSC CGL",
    instructor: "Rajesh Kumar",
    views: 2850,
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "UPSC Prelims - Indian Polity and Constitution",
    description: "Comprehensive coverage of Indian Constitution, fundamental rights, directive principles, and governance structure for UPSC preparation.",
    duration: "72 min",
    uploadDate: "2024-03-12",
    subject: "UPSC",
    instructor: "Dr. Priya Sharma",
    views: 3200,
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Railway Group D - General Science Concepts",
    description: "Essential physics, chemistry, and biology concepts for Railway Group D exam with practice questions and shortcuts.",
    duration: "45 min",
    uploadDate: "2024-03-10",
    subject: "Railways",
    instructor: "Amit Singh",
    views: 1890,
    thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Banking PO - English Language and Comprehension",
    description: "Complete English preparation for banking exams including reading comprehension, grammar, vocabulary, and writing skills.",
    duration: "50 min",
    uploadDate: "2024-03-08",
    subject: "Banking",
    instructor: "Neha Gupta",
    views: 2150,
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "SSC CGL - General Awareness Current Affairs",
    description: "Latest current affairs, important dates, awards, sports, and national/international events for SSC CGL preparation.",
    duration: "42 min",
    uploadDate: "2024-03-05",
    subject: "SSC CGL",
    instructor: "Vikash Mishra",
    views: 2680,
    thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "UPSC Mains - Essay Writing Strategy",
    description: "Master the art of essay writing for UPSC mains with structure, content development, and time management techniques.",
    duration: "65 min",
    uploadDate: "2024-03-03",
    subject: "UPSC",
    instructor: "Dr. Suresh Chandra",
    views: 2950,
    thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "Railway ALP - Technical Drawing and Engineering",
    description: "Technical drawing basics, engineering concepts, and mechanical principles for Railway Assistant Loco Pilot exam.",
    duration: "55 min",
    uploadDate: "2024-03-01",
    subject: "Railways",
    instructor: "Rahul Tiwari",
    views: 1560,
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Banking Clerk - Numerical Ability",
    description: "Complete numerical ability preparation for banking clerk exams with shortcuts, tricks, and practice problems.",
    duration: "48 min",
    uploadDate: "2024-02-28",
    subject: "Banking",
    instructor: "Kiran Desai",
    views: 1950,
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
  }
]

export default function RecordedClass() {
  const [selectedSubject, setSelectedSubject] = useState("All")
  
  const subjects = ["All", "SSC CGL", "UPSC", "Railways", "Banking"]
  
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