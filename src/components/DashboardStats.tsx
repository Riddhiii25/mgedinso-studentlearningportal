import { TrendingUp, Users, BookOpen, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const stats = [
  {
    title: "Total Students",
    value: "2,847",
    change: "+12.5%",
    changeType: "increase" as const,
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Active Courses",
    value: "24",
    change: "+3",
    changeType: "increase" as const,
    icon: BookOpen,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Completion Rate",
    value: "89.2%",
    change: "+5.2%",
    changeType: "increase" as const,
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Avg. Study Time",
    value: "4.2h",
    change: "-0.3h",
    changeType: "decrease" as const,
    icon: Clock,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-4 h-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center text-xs mt-1">
              <span 
                className={`font-medium ${
                  stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}