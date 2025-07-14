import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "React Quiz #3",
    type: "quiz",
    dueDate: "Today, 6:00 PM",
    priority: "high",
    course: "React Advanced"
  },
  {
    id: 2,
    title: "Final Project Submission",
    type: "assignment",
    dueDate: "Tomorrow, 11:59 PM",
    priority: "high",
    course: "Node.js Backend"
  },
  {
    id: 3,
    title: "Live Session: Design Critique",
    type: "live",
    dueDate: "Dec 16, 2:00 PM",
    priority: "medium",
    course: "UI/UX Design"
  }
]

export function UpcomingEvents() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Upcoming Events & Tasks
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
              <div className="flex-shrink-0">
                {event.priority === "high" ? (
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                ) : (
                  <Clock className="w-4 h-4 text-muted-foreground" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm mb-1 truncate">{event.title}</h4>
                <p className="text-xs text-muted-foreground mb-1">{event.course}</p>
                <p className="text-xs text-muted-foreground">{event.dueDate}</p>
              </div>
              <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                View
              </Button>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-3" size="sm">
          View All Events
        </Button>
      </CardContent>
    </Card>
  )
}