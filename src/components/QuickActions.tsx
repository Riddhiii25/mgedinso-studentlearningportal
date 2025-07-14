import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Video, ClipboardList, BarChart3 } from "lucide-react"

const quickActions = [
  {
    title: "Continue Final Lesson",
    description: "React Advanced Patterns",
    icon: Play,
    color: "bg-blue-500",
    action: "Resume"
  },
  {
    title: "Join Next Live Class",
    description: "in 30 minutes",
    icon: Video,
    color: "bg-green-500",
    action: "Join"
  },
  {
    title: "Submit Pending Assignment",
    description: "2 assignments due",
    icon: ClipboardList,
    color: "bg-orange-500",
    action: "Submit"
  },
  {
    title: "View Analytics",
    description: "Weekly progress report",
    icon: BarChart3,
    color: "bg-purple-500",
    action: "View"
  }
]

export function QuickActions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {quickActions.map((action, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className={`${action.color} p-2 rounded-lg`}>
                <action.icon className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 truncate">{action.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">{action.description}</p>
                <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
                  {action.action}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}