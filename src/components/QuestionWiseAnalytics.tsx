import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { CheckCircle, XCircle, SkipForward, HelpCircle } from "lucide-react"

const questionStats = [
  { category: "Correct", value: 156, color: "#22c55e", icon: CheckCircle },
  { category: "Incorrect", value: 44, color: "#ef4444", icon: XCircle },
  { category: "Skipped", value: 12, color: "#f59e0b", icon: SkipForward },
]

const subjectWiseData = [
  { subject: "English", correct: 35, incorrect: 10, skipped: 5 },
  { subject: "Math", correct: 28, incorrect: 15, skipped: 7 },
  { subject: "Science", correct: 42, incorrect: 8, skipped: 0 },
  { subject: "History", correct: 30, incorrect: 11, skipped: 9 },
  { subject: "Geography", correct: 21, incorrect: 0, skipped: 0 },
]

const COLORS = ['#22c55e', '#ef4444', '#f59e0b']

export function QuestionWiseAnalytics() {
  const totalQuestions = questionStats.reduce((sum, stat) => sum + stat.value, 0)
  
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {questionStats.map((stat) => (
          <Card key={stat.category}>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg" style={{ backgroundColor: `${stat.color}20` }}>
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.category}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-100">
                <HelpCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-xl font-bold">{totalQuestions}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Question Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={questionStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, value, percent }) => `${category}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {questionStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={subjectWiseData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Bar dataKey="correct" fill="#22c55e" name="Correct" />
                <Bar dataKey="incorrect" fill="#ef4444" name="Incorrect" />
                <Bar dataKey="skipped" fill="#f59e0b" name="Skipped" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}