import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Clock, Users, MapPin, FileText, Trophy, Target, CheckCircle, XCircle, Minus, Search, Globe } from "lucide-react"

export default function TestReport() {
  const { testId } = useParams()
  const [searchParams] = useSearchParams()
  const paperName = searchParams.get('paper') || 'English Comprehensive'
  const [selectedSubject, setSelectedSubject] = useState('current-affairs')
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('english')

  // Mock data - in real app this would come from API
  const testInfo = {
    testName: paperName,
    duration: "120 min",
    centerName: "Delhi Center",
    candidatesAppeared: 1247
  }

  const overviewData = {
    score: 42,
    total: 50,
    overallRank: 156,
    centerRank: 23,
    courseRank: 89,
    percentile: 84.5,
    totalQuestions: 50,
    accuracy: 84,
    attempted: 47
  }

  const timeSpentData = [
    { subject: "Current Affairs", time: "25 min", percentage: 21 },
    { subject: "English", time: "35 min", percentage: 29 },
    { subject: "Math", time: "45 min", percentage: 38 },
    { subject: "Reasoning", time: "15 min", percentage: 12 }
  ]

  const questionOutcomeData = [
    { name: "Correct", value: 42, color: "#22c55e" },
    { name: "Incorrect", value: 5, color: "#ef4444" },
    { name: "Skipped", value: 3, color: "#94a3b8" }
  ]

  const performanceData = [
    { name: "You", score: 84 },
    { name: "Topper", score: 96 },
    { name: "Average", score: 72 }
  ]

  const topicData = [
    { topic: "History", totalQ: 10, attempted: 9, correct: 8, accuracy: 89, timeSpent: "12 min" },
    { topic: "Geography", totalQ: 8, attempted: 8, correct: 6, accuracy: 75, timeSpent: "8 min" },
    { topic: "Politics", totalQ: 7, attempted: 6, correct: 5, accuracy: 83, timeSpent: "5 min" }
  ]

  const leaderboardData = [
    { rank: 1, name: "Priya Sharma", center: "Delhi Center", score: 96, total: 100, percentile: 99.2 },
    { rank: 2, name: "Rahul Kumar", center: "Mumbai Center", score: 94, total: 100, percentile: 98.8 },
    { rank: 156, name: "You", center: "Delhi Center", score: 84, total: 100, percentile: 84.5, isMe: true },
  ]

  const InfoCard = ({ icon: Icon, title, value, className = "" }) => (
    <Card className={`hover:shadow-md transition-shadow cursor-pointer ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Icon className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xl font-semibold">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const MetricTile = ({ icon: Icon, label, value, className = "" }) => (
    <Card className={`hover:bg-accent/50 transition-colors ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-1">
          {Icon && <Icon className="w-4 h-4 text-primary" />}
          <span className="text-sm text-muted-foreground">{label}</span>
        </div>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-6">
        {/* Top Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <InfoCard icon={FileText} title="Test Name" value={testInfo.testName} />
          <InfoCard icon={Clock} title="Duration" value={testInfo.duration} />
          <InfoCard icon={MapPin} title="Center Name" value={testInfo.centerName} />
          <InfoCard icon={Users} title="Candidates Appeared" value={testInfo.candidatesAppeared} />
        </div>

        {/* Tab Navigation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="subject-wise">Subject-wise</TabsTrigger>
            <TabsTrigger value="topic-wise">Topic-wise</TabsTrigger>
            <TabsTrigger value="level-wise">Level-wise</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="question-wise">Question-wise</TabsTrigger>
            <TabsTrigger value="solution">Solution</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Row 1 Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricTile icon={FileText} label="Score / Total" value={`${overviewData.score}/${overviewData.total}`} />
              <MetricTile icon={Trophy} label="Overall Rank" value={overviewData.overallRank} />
              <MetricTile icon={MapPin} label="Center Rank" value={overviewData.centerRank} />
              <MetricTile icon={Target} label="Course Rank" value={overviewData.courseRank} />
            </div>

            {/* Row 2 Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricTile icon={Target} label="Percentile" value={`${overviewData.percentile}%`} />
              <MetricTile icon={FileText} label="Total Questions" value={overviewData.totalQuestions} />
              <MetricTile icon={CheckCircle} label="Accuracy" value={`${overviewData.accuracy}%`} />
              <MetricTile icon={Clock} label="Attempted" value={overviewData.attempted} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Time Spent Box */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">Time Spent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timeSpentData.map((item) => (
                      <div key={item.subject} className="flex justify-between items-center">
                        <span className="text-sm">{item.subject}</span>
                        <span className="font-medium">{item.time}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 flex justify-between items-center font-semibold">
                      <span>Total</span>
                      <span>120 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Question Outcomes Pie Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Question Outcomes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={questionOutcomeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {questionOutcomeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Performance Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Performance Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Subject-wise Tab */}
          <TabsContent value="subject-wise" className="space-y-6">
            {/* Subject-wise metrics - similar structure to overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricTile icon={FileText} label="Score / Total" value={`${overviewData.score}/${overviewData.total}`} />
              <MetricTile icon={Trophy} label="Overall Rank" value={overviewData.overallRank} />
              <MetricTile icon={MapPin} label="Center Rank" value={overviewData.centerRank} />
              <MetricTile icon={Target} label="Percentile" value={`${overviewData.percentile}%`} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <MetricTile icon={CheckCircle} label="Accuracy" value={`${overviewData.accuracy}%`} />
              <MetricTile icon={Clock} label="Attempted" value={overviewData.attempted} />
              <MetricTile icon={Target} label="Correct" value={overviewData.score} />
              <MetricTile icon={FileText} label="Total Questions" value={overviewData.totalQuestions} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <MetricTile icon={Trophy} label="Highest Score" value="96" />
              <MetricTile icon={Minus} label="N/A" value="-" />
              <MetricTile icon={Minus} label="N/A" value="-" />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Question Paper Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={questionOutcomeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                      >
                        {questionOutcomeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="score" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Wrong Questions with Correct Answers */}
            <Card>
              <CardHeader>
                <CardTitle>Wrong Questions - Correct Answers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((q) => (
                    <div key={q} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium">Question {q}</span>
                        <Badge variant="destructive">Incorrect</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Which of the following is the capital of India?
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="p-2 rounded bg-green-100 text-green-800">
                          A) New Delhi ✓ (Correct Answer)
                        </div>
                        <div className="p-2 rounded bg-red-100 text-red-800">
                          B) Mumbai ✗ (Your Answer)
                        </div>
                        <div className="p-2 rounded">C) Kolkata</div>
                        <div className="p-2 rounded">D) Chennai</div>
                      </div>
                      <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                        <strong>Explanation:</strong> New Delhi is the capital of India and serves as the seat of government.
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Topic-wise Tab */}
          <TabsContent value="topic-wise" className="space-y-6">
            <div className="flex gap-2 mb-4">
              <Button
                variant={selectedSubject === 'current-affairs' ? 'default' : 'outline'}
                onClick={() => setSelectedSubject('current-affairs')}
              >
                Current Affairs
              </Button>
              <Button
                variant={selectedSubject === 'english' ? 'default' : 'outline'}
                onClick={() => setSelectedSubject('english')}
              >
                English
              </Button>
              <Button
                variant={selectedSubject === 'math' ? 'default' : 'outline'}
                onClick={() => setSelectedSubject('math')}
              >
                Mathematics
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Topics Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Topic</TableHead>
                      <TableHead>Total Q</TableHead>
                      <TableHead>Attempted</TableHead>
                      <TableHead>Correct</TableHead>
                      <TableHead>Accuracy</TableHead>
                      <TableHead>Time Spent</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topicData.map((topic) => (
                      <TableRow key={topic.topic}>
                        <TableCell className="font-medium">{topic.topic}</TableCell>
                        <TableCell>{topic.totalQ}</TableCell>
                        <TableCell>{topic.attempted}</TableCell>
                        <TableCell>{topic.correct}</TableCell>
                        <TableCell>{topic.accuracy}%</TableCell>
                        <TableCell>{topic.timeSpent}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Level-wise Tab */}
          <TabsContent value="level-wise" className="space-y-6">
            <div className="flex gap-2 mb-4">
              <Badge variant="outline">Easy</Badge>
              <Badge variant="default">Medium</Badge>
              <Badge variant="outline">Hard</Badge>
            </div>

            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Medium Level Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={questionOutcomeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {questionOutcomeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Leaderboard</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Rank</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Center</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Percentile</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaderboardData.map((entry) => (
                      <TableRow key={entry.rank} className={entry.isMe ? "bg-primary/10 font-semibold" : ""}>
                        <TableCell>{entry.rank}</TableCell>
                        <TableCell>{entry.name}</TableCell>
                        <TableCell>{entry.center}</TableCell>
                        <TableCell>{entry.score}</TableCell>
                        <TableCell>{entry.total}</TableCell>
                        <TableCell>{entry.percentile}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Question-wise Analytics Tab */}
          <TabsContent value="question-wise" className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-32">
                  <Globe className="w-4 h-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="hindi">Hindi</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Question Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((q) => (
                    <div key={q} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium">Question {q}</span>
                        <Badge variant={q === 1 ? "default" : q === 2 ? "destructive" : "secondary"}>
                          {q === 1 ? "Correct" : q === 2 ? "Incorrect" : "Skipped"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Which of the following is the capital of India?
                      </p>
                       <div className="space-y-1 text-sm">
                         <div className={`p-2 rounded ${q === 1 ? "bg-green-100 text-green-800" : q === 2 ? "bg-green-100 text-green-800" : ""}`}>
                           A) New Delhi {q === 1 && "✓"} {q === 2 && "✓ (Correct Answer)"}
                         </div>
                         <div className={`p-2 rounded ${q === 2 ? "bg-red-100 text-red-800" : ""}`}>
                           B) Mumbai {q === 2 && "✗ (Your Answer)"}
                         </div>
                         <div className="p-2 rounded">C) Kolkata</div>
                         <div className="p-2 rounded">D) Chennai</div>
                       </div>
                       {q === 2 && (
                         <div className="mt-3 p-2 bg-blue-50 rounded text-sm">
                           <strong>Explanation:</strong> New Delhi is the capital of India and serves as the seat of government.
                         </div>
                       )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solution Tab */}
          <TabsContent value="solution" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>S.No.</TableHead>
                      <TableHead>Paper</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>{paperName}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Solution
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}