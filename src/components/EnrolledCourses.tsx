import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const courses = [
  {
    id: 1,
    title: "React Advanced Patterns",
    thumbnail: "🚀",
    progress: 75,
    totalLessons: 24,
    completedLessons: 18
  },
  {
    id: 2,
    title: "Node.js Backend Development",
    thumbnail: "⚡",
    progress: 45,
    totalLessons: 32,
    completedLessons: 14
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    thumbnail: "🎨",
    progress: 90,
    totalLessons: 16,
    completedLessons: 14
  },
  {
    id: 4,
    title: "TypeScript Mastery",
    thumbnail: "📘",
    progress: 60,
    totalLessons: 20,
    completedLessons: 12
  }
]

export function EnrolledCourses() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Enrolled Courses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-2xl">{course.thumbnail}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium mb-2 truncate">{course.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {course.completedLessons}/{course.totalLessons} lessons
                      </span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-1.5" />
                  </div>
                  <Button size="sm" className="mt-3 w-full" variant="outline">
                    Resume
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}