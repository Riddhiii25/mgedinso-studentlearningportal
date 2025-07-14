import { Progress } from "@/components/ui/progress"

export function WelcomeBanner() {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? "Good Morning" : currentHour < 18 ? "Good Afternoon" : "Good Evening"
  
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-xl p-6 border">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {greeting}, John! 👋
          </h2>
          <p className="text-muted-foreground mb-4">
            You're making great progress! Keep up the excellent work.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Overall Course Progress</span>
              <span className="font-medium">68%</span>
            </div>
            <Progress value={68} className="h-2" />
          </div>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-primary">4</div>
          <div className="text-sm text-muted-foreground">Active Courses</div>
        </div>
      </div>
    </div>
  )
}