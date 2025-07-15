import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Video, Calendar, Clock, Users, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const liveClasses = [
  {
    id: 1,
    title: "English Grammar Fundamentals",
    instructor: "Dr. Sarah Wilson",
    date: "2024-01-20",
    time: "10:00 AM",
    duration: "90 minutes",
    participants: 124,
    status: "upcoming",
    subject: "English"
  },
  {
    id: 2,
    title: "Quantitative Aptitude - Advanced",
    instructor: "Prof. Rajesh Kumar",
    date: "2024-01-20",
    time: "2:00 PM",
    duration: "120 minutes",
    participants: 89,
    status: "live",
    subject: "Mathematics"
  },
  {
    id: 3,
    title: "Current Affairs Discussion",
    instructor: "Ms. Priya Sharma",
    date: "2024-01-21",
    time: "11:00 AM",
    duration: "60 minutes",
    participants: 156,
    status: "upcoming",
    subject: "General Knowledge"
  }
]

export default function LiveClass() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Live Classes</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Live Status Alert */}
            <Alert className="mb-6 border-green-200 bg-green-50">
              <Video className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">
                1 live class is currently in progress. Join now to participate!
              </AlertDescription>
            </Alert>

            {/* Live Classes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveClasses.map((liveClass) => (
                <Card key={liveClass.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg line-clamp-2">{liveClass.title}</CardTitle>
                      {liveClass.status === 'live' ? (
                        <Badge className="bg-red-600 animate-pulse">LIVE</Badge>
                      ) : (
                        <Badge variant="outline">Upcoming</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">by {liveClass.instructor}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span>{liveClass.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{liveClass.time} ({liveClass.duration})</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span>{liveClass.participants} participants</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="w-fit">
                      {liveClass.subject}
                    </Badge>
                    
                    {liveClass.status === 'live' ? (
                      <Button className="w-full bg-red-600 hover:bg-red-700">
                        <Video className="w-4 h-4 mr-2" />
                        Join Live Class
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        Set Reminder
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Live Classes Alert */}
            <Card className="mt-6">
              <CardContent className="p-6 text-center">
                <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No More Live Classes Today</h3>
                <p className="text-muted-foreground">
                  Check back tomorrow or set reminders for upcoming classes.
                </p>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}