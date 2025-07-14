import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileCheck, FileX, Target, Percent, CheckCircle, XCircle, SkipForward, HelpCircle } from "lucide-react"

const quickStats = [
  { title: "Total Tests", value: "24", icon: FileCheck, color: "text-blue-600" },
  { title: "Remaining Tests", value: "8", icon: FileX, color: "text-orange-600" },
  { title: "Tests Attempted", value: "16", icon: Target, color: "text-green-600" },
  { title: "Accuracy", value: "78%", icon: Percent, color: "text-purple-600" },
]

const detailedStats = [
  { title: "Correct", value: "156", icon: CheckCircle, color: "text-green-500" },
  { title: "Incorrect", value: "44", icon: XCircle, color: "text-red-500" },
  { title: "Skipped", value: "12", icon: SkipForward, color: "text-yellow-500" },
  { title: "Total Questions", value: "212", icon: HelpCircle, color: "text-blue-500" },
]

export function StudentQuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Test Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* First Row - Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.title} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className={`p-2 rounded-lg bg-background ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.title}</p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Second Row - Question Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {detailedStats.map((stat) => (
            <div key={stat.title} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <div className={`p-2 rounded-lg bg-background ${stat.color}`}>
                <stat.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.title}</p>
                <p className="text-lg font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}