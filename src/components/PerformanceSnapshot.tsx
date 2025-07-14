import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Clock, Trophy, TrendingUp } from "lucide-react"

const performanceMetrics = [
  {
    title: "Quiz Average",
    value: "87%",
    change: "+5%",
    trend: "up",
    icon: Trophy,
    color: "text-green-600"
  },
  {
    title: "Assignment Score",
    value: "92%",
    change: "+2%", 
    trend: "up",
    icon: BarChart3,
    color: "text-blue-600"
  },
  {
    title: "Study Time",
    value: "4.2h",
    change: "-0.5h",
    trend: "down",
    icon: Clock,
    color: "text-orange-600"
  },
  {
    title: "Course Progress",
    value: "68%",
    change: "+12%",
    trend: "up",
    icon: TrendingUp,
    color: "text-purple-600"
  }
]

export function PerformanceSnapshot() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Snapshot</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="text-center p-3 border rounded-lg">
              <div className="flex justify-center mb-2">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.title}</div>
                <div className={`text-xs font-medium ${
                  metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {metric.change} this week
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}