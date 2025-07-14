import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, TrendingUp, FileText } from "lucide-react"

const testStats = [
  {
    id: 1,
    title: "Last Test Score",
    value: "85%",
    icon: Target,
    color: "text-blue-600"
  },
  {
    id: 2,
    title: "Highest Score",
    value: "92%",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    id: 3,
    title: "Last Submitted",
    value: "English Comprehensive",
    icon: FileText,
    color: "text-purple-600"
  }
]

export function TestStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {testStats.map((stat) => (
        <Card key={stat.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-muted ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-lg font-semibold">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}