import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "React Fundamentals",
    students: 124,
    completion: 87,
    duration: "8 weeks",
    status: "Active",
    color: "bg-blue-500"
  },
  {
    id: 2,
    title: "JavaScript Advanced",
    students: 89,
    completion: 65,
    duration: "12 weeks",
    status: "Active",
    color: "bg-yellow-500"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    students: 156,
    completion: 92,
    duration: "6 weeks",
    status: "Completed",
    color: "bg-green-500"
  },
  {
    id: 4,
    title: "Python for Data Science",
    students: 78,
    completion: 43,
    duration: "10 weeks",
    status: "Active",
    color: "bg-purple-500"
  }
]

export function CourseProgress() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Course Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${course.color}`} />
                <h3 className="font-medium text-foreground">{course.title}</h3>
                <Badge 
                  variant={course.status === "Active" ? "default" : "secondary"}
                  className="text-xs"
                >
                  {course.status}
                </Badge>
              </div>
              <span className="text-sm font-medium text-foreground">{course.completion}%</span>
            </div>
            
            <Progress value={course.completion} className="h-2" />
            
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>{course.students} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{course.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}