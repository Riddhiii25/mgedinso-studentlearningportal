import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { LMSSidebar } from "@/components/LMSSidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Calendar, CheckCircle, XCircle, Clock } from "lucide-react"

const attendanceRecords = [
  {
    id: 1,
    sno: 1,
    courseName: "English Grammar Fundamentals",
    attendanceDate: "2024-01-20",
    meetingName: "Present Tense Rules",
    status: "present",
    duration: "90 minutes",
    instructor: "Dr. Sarah Wilson"
  },
  {
    id: 2,
    sno: 2,
    courseName: "Quantitative Aptitude",
    attendanceDate: "2024-01-19",
    meetingName: "Percentage Problems",
    status: "absent",
    duration: "120 minutes",
    instructor: "Prof. Rajesh Kumar"
  },
  {
    id: 3,
    sno: 3,
    courseName: "Current Affairs",
    attendanceDate: "2024-01-18",
    meetingName: "Weekly News Discussion",
    status: "present",
    duration: "60 minutes",
    instructor: "Ms. Priya Sharma"
  },
  {
    id: 4,
    sno: 4,
    courseName: "Logical Reasoning",
    attendanceDate: "2024-01-17",
    meetingName: "Pattern Recognition",
    status: "late",
    duration: "90 minutes",
    instructor: "Mr. Amit Singh"
  },
  {
    id: 5,
    sno: 5,
    courseName: "General Knowledge",
    attendanceDate: "2024-01-16",
    meetingName: "History Overview",
    status: "present",
    duration: "75 minutes",
    instructor: "Dr. Neha Gupta"
  }
]

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'present':
      return (
        <Badge variant="outline" className="text-green-600 border-green-600">
          <CheckCircle className="w-3 h-3 mr-1" />
          Present
        </Badge>
      )
    case 'absent':
      return (
        <Badge variant="destructive">
          <XCircle className="w-3 h-3 mr-1" />
          Absent
        </Badge>
      )
    case 'late':
      return (
        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
          <Clock className="w-3 h-3 mr-1" />
          Late
        </Badge>
      )
    default:
      return <Badge variant="secondary">{status}</Badge>
  }
}

export default function Attendance() {
  const presentCount = attendanceRecords.filter(r => r.status === 'present').length
  const absentCount = attendanceRecords.filter(r => r.status === 'absent').length
  const lateCount = attendanceRecords.filter(r => r.status === 'late').length
  const attendancePercentage = ((presentCount + lateCount) / attendanceRecords.length * 100).toFixed(1)

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <LMSSidebar />
        
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-full items-center justify-between px-6">
              <SidebarTrigger className="md:hidden" />
              <h1 className="text-2xl font-bold">Attendance</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Classes</p>
                      <p className="text-2xl font-bold">{attendanceRecords.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Present</p>
                      <p className="text-2xl font-bold">{presentCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <XCircle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Absent</p>
                      <p className="text-2xl font-bold">{absentCount}</p>
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
                      <p className="text-sm text-muted-foreground">Attendance %</p>
                      <p className="text-2xl font-bold">{attendancePercentage}%</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card className="mb-6">
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex gap-2">
                    <Input 
                      type="date" 
                      placeholder="From Date"
                      className="w-48"
                    />
                    <Input 
                      type="date" 
                      placeholder="To Date"
                      className="w-48"
                    />
                  </div>
                  
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Select attendance status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Status</SelectItem>
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input placeholder="Search by meeting..." className="pl-10 w-64" />
                  </div>
                  
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Clear
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Attendance Table */}
            <Card>
              <CardHeader>
                <CardTitle>Attendance Records</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No</TableHead>
                      <TableHead>Course Name</TableHead>
                      <TableHead>Attendance Date</TableHead>
                      <TableHead>Meeting Name</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceRecords.map((record) => (
                      <TableRow key={record.id}>
                        <TableCell>{record.sno}</TableCell>
                        <TableCell className="font-medium">{record.courseName}</TableCell>
                        <TableCell>{record.attendanceDate}</TableCell>
                        <TableCell>{record.meetingName}</TableCell>
                        <TableCell>{record.duration}</TableCell>
                        <TableCell>{record.instructor}</TableCell>
                        <TableCell>{getStatusBadge(record.status)}</TableCell>
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