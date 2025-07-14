import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const activities = [
  {
    id: 1,
    student: "Sarah Johnson",
    avatar: "/placeholder.svg",
    initials: "SJ",
    action: "completed",
    course: "React Fundamentals",
    time: "2 hours ago",
    type: "completion"
  },
  {
    id: 2,
    student: "Mike Chen",
    avatar: "/placeholder.svg",
    initials: "MC",
    action: "submitted",
    course: "JavaScript Basics",
    time: "4 hours ago",
    type: "submission"
  },
  {
    id: 3,
    student: "Emily Davis",
    avatar: "/placeholder.svg",
    initials: "ED",
    action: "started",
    course: "UI/UX Design",
    time: "6 hours ago",
    type: "enrollment"
  },
  {
    id: 4,
    student: "Alex Rodriguez",
    avatar: "/placeholder.svg",
    initials: "AR",
    action: "achieved",
    course: "Python Mastery Badge",
    time: "1 day ago",
    type: "achievement"
  },
  {
    id: 5,
    student: "Lisa Wang",
    avatar: "/placeholder.svg",
    initials: "LW",
    action: "commented on",
    course: "Data Science Project",
    time: "1 day ago",
    type: "comment"
  }
]

const getBadgeVariant = (type: string) => {
  switch (type) {
    case "completion": return "default"
    case "submission": return "secondary"
    case "enrollment": return "outline"
    case "achievement": return "default"
    case "comment": return "secondary"
    default: return "outline"
  }
}

const getBadgeText = (type: string) => {
  switch (type) {
    case "completion": return "Completed"
    case "submission": return "Submitted"
    case "enrollment": return "Started"
    case "achievement": return "Achievement"
    case "comment": return "Comment"
    default: return "Activity"
  }
}

export function RecentActivity() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={activity.avatar} />
              <AvatarFallback className="text-xs">{activity.initials}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-foreground truncate">
                  {activity.student}
                </span>
                <Badge variant={getBadgeVariant(activity.type)} className="text-xs">
                  {getBadgeText(activity.type)}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {activity.action} <span className="font-medium">{activity.course}</span>
              </p>
            </div>
            <span className="text-xs text-muted-foreground">{activity.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}