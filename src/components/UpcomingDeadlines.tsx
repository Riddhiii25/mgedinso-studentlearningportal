import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

const deadlines = [
  {
    id: 1,
    title: "React Project Submission",
    course: "React Fundamentals",
    dueDate: "Today, 11:59 PM",
    priority: "high",
    submissions: 89,
    total: 124
  },
  {
    id: 2,
    title: "JavaScript Quiz #3",
    course: "JavaScript Advanced",
    dueDate: "Tomorrow, 2:00 PM",
    priority: "medium",
    submissions: 45,
    total: 89
  },
  {
    id: 3,
    title: "Design Portfolio Review",
    course: "UI/UX Design",
    dueDate: "Dec 28, 5:00 PM",
    priority: "low",
    submissions: 134,
    total: 156
  },
  {
    id: 4,
    title: "Data Analysis Report",
    course: "Python for Data Science",
    dueDate: "Dec 30, 11:59 PM",
    priority: "medium",
    submissions: 23,
    total: 78
  }
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high": return "text-red-600 bg-red-50"
    case "medium": return "text-yellow-600 bg-yellow-50"
    case "low": return "text-green-600 bg-green-50"
    default: return "text-gray-600 bg-gray-50"
  }
}

const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "high": return AlertTriangle
    case "medium": return Clock
    case "low": return Calendar
    default: return Calendar
  }
}

export function UpcomingDeadlines() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Upcoming Deadlines</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {deadlines.map((deadline) => {
          const PriorityIcon = getPriorityIcon(deadline.priority)
          const completionRate = Math.round((deadline.submissions / deadline.total) * 100)
          
          return (
            <div key={deadline.id} className="p-4 rounded-lg border bg-card">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground mb-1">{deadline.title}</h3>
                  <p className="text-sm text-muted-foreground">{deadline.course}</p>
                </div>
                <Badge className={`${getPriorityColor(deadline.priority)} border-0`}>
                  <PriorityIcon className="w-3 h-3 mr-1" />
                  {deadline.priority}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Due: {deadline.dueDate}</span>
                <span className="font-medium text-foreground">
                  {deadline.submissions}/{deadline.total} ({completionRate}%)
                </span>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}