import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Clock, Play, Eye } from "lucide-react"

const onlineAssignments = [
  {
    id: 1,
    title: "Quantitative Aptitude Test 1",
    startTime: "2024-01-20 10:00 AM",
    endTime: "2024-01-20 12:00 PM",
    duration: "120 minutes",
    status: "upcoming",
    questions: 50,
    marks: 100
  },
  {
    id: 2,
    title: "English Comprehension Quiz",
    startTime: "2024-01-19 2:00 PM",
    endTime: "2024-01-19 3:30 PM",
    duration: "90 minutes",
    status: "completed",
    questions: 30,
    marks: 60,
    score: 45
  },
  {
    id: 3,
    title: "General Knowledge Assessment",
    startTime: "2024-01-21 11:00 AM",
    endTime: "2024-01-21 12:30 PM",
    duration: "90 minutes",
    status: "upcoming",
    questions: 40,
    marks: 80
  },
  {
    id: 4,
    title: "Logical Reasoning Test",
    startTime: "2024-01-18 3:00 PM",
    endTime: "2024-01-18 4:00 PM",
    duration: "60 minutes",
    status: "missed",
    questions: 25,
    marks: 50
  },
  {
    id: 5,
    title: "Current Affairs Mock Test",
    startTime: "2024-01-22 9:00 AM",
    endTime: "2024-01-22 10:30 AM",
    duration: "90 minutes",
    status: "live",
    questions: 35,
    marks: 70
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'upcoming':
      return <Badge variant="outline" className="text-blue-600 border-blue-600">Upcoming</Badge>
    case 'live':
      return <Badge className="bg-red-600 animate-pulse">Live</Badge>
    case 'completed':
      return <Badge variant="outline" className="text-green-600 border-green-600">Completed</Badge>
    case 'missed':
      return <Badge variant="destructive">Missed</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

const getActionButton = (assignment: any) => {
  switch (assignment.status) {
    case 'live':
      return (
        <Button size="sm" className="bg-red-600 hover:bg-red-700">
          <Play className="w-4 h-4 mr-1" />
          Start Test
        </Button>
      )
    case 'upcoming':
      return (
        <Button size="sm" variant="outline">
          <Clock className="w-4 h-4 mr-1" />
          Set Reminder
        </Button>
      )
    case 'completed':
      return (
        <Button size="sm" variant="outline">
          <Eye className="w-4 h-4 mr-1" />
          View Result
        </Button>
      )
    case 'missed':
      return (
        <Button size="sm" variant="outline" disabled>
          Missed
        </Button>
      )
    default:
      return null
  }
}

export default function OnlineAssignment() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Online Assignments</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search assignments..." className="pl-10 w-64" />
                  </div>
                  
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="upcoming">Upcoming</SelectItem>
                      <SelectItem value="live">Live</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="missed">Missed</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Upcoming</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <Play className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Live</p>
                      <p className="text-2xl font-bold">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Eye className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="text-2xl font-bold">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assignments Table */}
            <Card>
              <CardHeader>
                <CardTitle>Online Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {onlineAssignments.map((assignment, index) => (
                      <TableRow key={assignment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">{assignment.title}</TableCell>
                        <TableCell>{assignment.startTime}</TableCell>
                        <TableCell>{assignment.endTime}</TableCell>
                        <TableCell>{assignment.duration}</TableCell>
                        <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                        <TableCell>{getActionButton(assignment)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}