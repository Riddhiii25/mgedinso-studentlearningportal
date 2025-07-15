import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Plus, MessageCircle, Paperclip, Eye } from "lucide-react"

const doubtQueries = [
  {
    id: 1,
    sno: 1,
    title: "Quadratic Equation Solving Method",
    subject: "Mathematics",
    assignedTo: "Prof. Rajesh Kumar",
    status: "answered",
    replies: 3,
    attachment: true,
    submittedOn: "2024-01-18",
    priority: "medium"
  },
  {
    id: 2,
    sno: 2,
    title: "English Grammar - Present Perfect Tense",
    subject: "English",
    assignedTo: "Dr. Sarah Wilson",
    status: "pending",
    replies: 0,
    attachment: false,
    submittedOn: "2024-01-20",
    priority: "high"
  },
  {
    id: 3,
    sno: 3,
    title: "Constitutional Amendment Process",
    subject: "Polity",
    assignedTo: "Ms. Priya Sharma",
    status: "in-progress",
    replies: 1,
    attachment: true,
    submittedOn: "2024-01-19",
    priority: "low"
  },
  {
    id: 4,
    sno: 4,
    title: "Photosynthesis Chemical Equation",
    subject: "Science",
    assignedTo: "Dr. Neha Gupta",
    status: "answered",
    replies: 2,
    attachment: false,
    submittedOn: "2024-01-17",
    priority: "medium"
  },
  {
    id: 5,
    sno: 5,
    title: "World War II Timeline Confusion",
    subject: "History",
    assignedTo: "Mr. Amit Singh",
    status: "pending",
    replies: 0,
    attachment: true,
    submittedOn: "2024-01-20",
    priority: "low"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'answered':
      return <Badge variant="outline" className="text-green-600 border-green-600">Answered</Badge>
    case 'pending':
      return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>
    case 'in-progress':
      return <Badge variant="outline" className="text-blue-600 border-blue-600">In Progress</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function DoubtForm() {
  const answeredCount = doubtQueries.filter(q => q.status === 'answered').length
  const pendingCount = doubtQueries.filter(q => q.status === 'pending').length
  const inProgressCount = doubtQueries.filter(q => q.status === 'in-progress').length

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Question Queries</h1>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Ask Question
              </Button>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Queries</p>
                      <p className="text-2xl font-bold">{doubtQueries.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Answered</p>
                      <p className="text-2xl font-bold">{answeredCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold">{pendingCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">In Progress</p>
                      <p className="text-2xl font-bold">{inProgressCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      <SelectItem value="mathematics">Mathematics</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="history">History</SelectItem>
                      <SelectItem value="polity">Polity</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Topics</SelectItem>
                      <SelectItem value="algebra">Algebra</SelectItem>
                      <SelectItem value="grammar">Grammar</SelectItem>
                      <SelectItem value="constitution">Constitution</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="answered">Answered</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search queries..." className="pl-10 w-64" />
                  </div>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Queries Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Question Queries</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Replies</TableHead>
                      <TableHead>Attachment</TableHead>
                      <TableHead>Submitted On</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {doubtQueries.map((query) => (
                      <TableRow key={query.id}>
                        <TableCell>{query.sno}</TableCell>
                        <TableCell className="font-medium max-w-xs truncate">
                          {query.title}
                        </TableCell>
                        <TableCell>{query.subject}</TableCell>
                        <TableCell>{query.assignedTo}</TableCell>
                        <TableCell>{getStatusBadge(query.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4 text-muted-foreground" />
                            {query.replies}
                          </div>
                        </TableCell>
                        <TableCell>
                          {query.attachment ? (
                            <Paperclip className="w-4 h-4 text-blue-600" />
                          ) : (
                            <span className="text-muted-foreground">-</span>
                          )}
                        </TableCell>
                        <TableCell>{query.submittedOn}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </TableCell>
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