import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Eye, Clock } from "lucide-react"

const assignments = [
  {
    id: 1,
    name: "English Essay Writing",
    subject: "English",
    dueDate: "2024-01-25",
    status: "pending",
    marks: 50,
    submissionDate: null
  },
  {
    id: 2,
    name: "Mathematics Problem Set 1",
    subject: "Mathematics",
    dueDate: "2024-01-22",
    status: "submitted",
    marks: 45,
    submissionDate: "2024-01-20"
  },
  {
    id: 3,
    name: "General Knowledge Quiz",
    subject: "GK",
    dueDate: "2024-01-28",
    status: "pending",
    marks: 30,
    submissionDate: null
  },
  {
    id: 4,
    name: "Logical Reasoning Practice",
    subject: "Reasoning",
    dueDate: "2024-01-30",
    status: "graded",
    marks: 40,
    submissionDate: "2024-01-19",
    grade: "A"
  },
  {
    id: 5,
    name: "Current Affairs Analysis",
    subject: "Current Affairs",
    dueDate: "2024-01-24",
    status: "overdue",
    marks: 35,
    submissionDate: null
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'pending':
      return <Badge variant="outline" className="text-yellow-600 border-yellow-600">Pending</Badge>
    case 'submitted':
      return <Badge variant="outline" className="text-blue-600 border-blue-600">Submitted</Badge>
    case 'graded':
      return <Badge variant="outline" className="text-green-600 border-green-600">Graded</Badge>
    case 'overdue':
      return <Badge variant="destructive">Overdue</Badge>
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function HomeAssignment() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Home Assignments</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
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
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Download className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Submitted</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Overdue</p>
                      <p className="text-2xl font-bold">1</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assignments Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Assignments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Assignment Name</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Max Marks</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {assignments.map((assignment, index) => (
                      <TableRow key={assignment.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">{assignment.name}</TableCell>
                        <TableCell>{assignment.subject}</TableCell>
                        <TableCell>{assignment.dueDate}</TableCell>
                        <TableCell>{assignment.marks}</TableCell>
                        <TableCell>{getStatusBadge(assignment.status)}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                            {assignment.status === 'pending' && (
                              <Button size="sm">
                                <Download className="w-4 h-4 mr-1" />
                                Submit
                              </Button>
                            )}
                          </div>
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