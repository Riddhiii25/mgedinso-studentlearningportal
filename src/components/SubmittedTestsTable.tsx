import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart } from "lucide-react"

const submittedTests = [
  {
    sno: 1,
    paperName: "English Comprehensive",
    score: "42/50",
    percentage: 84,
  },
  {
    sno: 2,
    paperName: "Aptitude Test",
    score: "38/50",
    percentage: 76,
  },
  {
    sno: 3,
    paperName: "MG Question Paper",
    score: "45/50",
    percentage: 90,
  },
  {
    sno: 4,
    paperName: "Reasoning Test",
    score: "35/50",
    percentage: 70,
  },
  {
    sno: 5,
    paperName: "General Knowledge",
    score: "40/50",
    percentage: 80,
  }
]

export function SubmittedTestsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent 5 Submitted Tests</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">S.No</TableHead>
              <TableHead>Paper Name</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Percentage</TableHead>
              <TableHead>Progress</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {submittedTests.map((test) => (
              <TableRow key={test.sno}>
                <TableCell className="font-medium">{test.sno}</TableCell>
                <TableCell className="font-medium">{test.paperName}</TableCell>
                <TableCell>{test.score}</TableCell>
                <TableCell>{test.percentage}%</TableCell>
                <TableCell className="w-32">
                  <Progress value={test.percentage} className="h-2" />
                </TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">
                    <BarChart className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}