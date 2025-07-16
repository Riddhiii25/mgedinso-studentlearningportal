import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { 
  BookOpen, 
  Video, 
  FileText, 
  Clock, 
  Calendar, 
  BarChart3, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Users,
  Target,
  AlertCircle
} from "lucide-react"

const courseData = {
  "1": { title: "General Knowledge Comprehensive", subject: "General Knowledge" },
  "2": { title: "English Language Mastery", subject: "English" },
  "3": { title: "Quantitative Aptitude", subject: "Mathematics" },
  "4": { title: "Logical Reasoning", subject: "Reasoning" },
  "5": { title: "Current Affairs 2024", subject: "Current Affairs" }
}

const lectures = [
  { id: 1, title: "Introduction to General Knowledge", duration: "45 min", status: "completed" },
  { id: 2, title: "Indian History Overview", duration: "60 min", status: "in-progress" },
  { id: 3, title: "Geography Fundamentals", duration: "55 min", status: "not-started" },
  { id: 4, title: "Science and Technology", duration: "50 min", status: "not-started" },
  { id: 5, title: "Politics and Governance", duration: "40 min", status: "not-started" },
]

const tests = [
  { id: 1, title: "General Knowledge Mock Test 1", type: "Practice", duration: "60 min" },
  { id: 2, title: "Current Affairs Quiz", type: "Assessment", duration: "30 min" },
  { id: 3, title: "Comprehensive Test", type: "Final", duration: "120 min" },
]

export default function CourseDetail() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("lecture")
  const [currentPage, setCurrentPage] = useState(1)
  const [showLiveClassModal, setShowLiveClassModal] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedChapter, setSelectedChapter] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("")

  const course = courseData[courseId as keyof typeof courseData] || courseData["1"]
  const totalPages = Math.ceil(lectures.length / 3)
  const currentLectures = lectures.slice((currentPage - 1) * 3, currentPage * 3)

  const openTestReport = (testId: number) => {
    window.open(`/test-report/${testId}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.close()}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">{course.title}</h1>
          </div>
          
          {/* Dropdown Navigation */}
          <div className="flex gap-4">
            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general-knowledge">General Knowledge</SelectItem>
                <SelectItem value="current-affairs">Current Affairs</SelectItem>
                <SelectItem value="history">History</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedChapter} onValueChange={setSelectedChapter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Chapter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ch1">Chapter 1</SelectItem>
                <SelectItem value="ch2">Chapter 2</SelectItem>
                <SelectItem value="ch3">Chapter 3</SelectItem>
              </SelectContent>
            </Select>
            
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="topic1">Topic 1</SelectItem>
                <SelectItem value="topic2">Topic 2</SelectItem>
                <SelectItem value="topic3">Topic 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar - Analytics & Schedule */}
          <div className="col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Analytics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 bg-green-50 dark:bg-green-950 rounded">
                    <div className="text-lg font-bold text-green-600">8</div>
                    <div className="text-xs text-muted-foreground">Completed</div>
                  </div>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded">
                    <div className="text-lg font-bold text-blue-600">3</div>
                    <div className="text-xs text-muted-foreground">In Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Course Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-muted rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Live Session</div>
                    <div className="text-xs text-muted-foreground">Today 3:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Assignment Due</div>
                    <div className="text-xs text-muted-foreground">Tomorrow</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Mock Test</div>
                    <div className="text-xs text-muted-foreground">Dec 20</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center Panel */}
          <div className="col-span-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="lecture" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Lecture
                </TabsTrigger>
                <TabsTrigger 
                  value="live-class" 
                  className="flex items-center gap-2"
                  onClick={() => setShowLiveClassModal(true)}
                >
                  <Video className="w-4 h-4" />
                  Live Class
                </TabsTrigger>
                <TabsTrigger value="test" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Test
                </TabsTrigger>
              </TabsList>

              <TabsContent value="lecture" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Available Lectures</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </span>
                    <div className="flex gap-1">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        disabled={currentPage === 1}
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        disabled={currentPage === totalPages}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentLectures.map((lecture) => (
                    <Card key={lecture.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/10 rounded">
                              <Play className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium">{lecture.title}</h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="w-3 h-3" />
                                {lecture.duration}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Badge 
                              variant={lecture.status === 'completed' ? 'default' : 
                                      lecture.status === 'in-progress' ? 'secondary' : 'outline'}
                            >
                              {lecture.status.replace('-', ' ')}
                            </Badge>
                            <Button size="sm">Start</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="test" className="space-y-4">
                <h3 className="text-lg font-semibold">Available Tests</h3>
                <div className="space-y-3">
                  {tests.map((test) => (
                    <Card key={test.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded">
                              <FileText className="w-4 h-4 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium">{test.title}</h4>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {test.duration}
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {test.type}
                                </Badge>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openTestReport(test.id)}
                              className="gap-2"
                            >
                              <BarChart3 className="w-4 h-4" />
                              Analytics
                            </Button>
                            <Button size="sm">Start Test</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This comprehensive course covers all aspects of General Knowledge 
                  including History, Geography, Science, Current Affairs, and more. 
                  Perfect for competitive exam preparation with structured learning 
                  modules and regular assessments.
                </p>
                
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-muted-foreground" />
                    <span>1,234 students enrolled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span>85% success rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>40+ hours of content</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Suggested Lectures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 border rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <h4 className="font-medium text-sm">Fuzzy Logic</h4>
                  <p className="text-xs text-muted-foreground mt-1">Computer Science</p>
                  <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                    View Lecture
                  </Button>
                </div>
                
                <div className="p-3 border rounded-lg hover:shadow-sm transition-shadow cursor-pointer">
                  <h4 className="font-medium text-sm">Probability Theory</h4>
                  <p className="text-xs text-muted-foreground mt-1">Mathematics</p>
                  <Button variant="link" size="sm" className="p-0 h-auto mt-2">
                    View Lecture
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Live Class Modal */}
      <Dialog open={showLiveClassModal} onOpenChange={setShowLiveClassModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Live Class Not Available
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-muted-foreground">
              There are no live classes scheduled at the moment. Please check back later 
              or check the course schedule for upcoming sessions.
            </p>
          </div>
          <div className="flex justify-end">
            <Button onClick={() => setShowLiveClassModal(false)}>
              Understood
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}