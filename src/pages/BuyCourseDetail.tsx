import { useState } from "react"
import { useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  ChevronLeft, 
  IndianRupee, 
  Calendar, 
  Clock, 
  Users, 
  Star,
  CreditCard,
  Smartphone,
  Check,
  Tag
} from "lucide-react"

const courseData = {
  "1": {
    title: "Complete SSC CGL Preparation",
    description: "Comprehensive preparation course for SSC CGL with live classes, mock tests, and expert guidance.",
    image: "/placeholder.svg",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    duration: "6 months",
    modules: [
      "Quantitative Aptitude",
      "General Intelligence & Reasoning", 
      "English Language & Comprehension",
      "General Awareness"
    ],
    features: [
      "150+ Video Lectures",
      "50+ Mock Tests",
      "Live Doubt Sessions", 
      "Study Material PDF",
      "Performance Analytics",
      "Expert Mentorship"
    ],
    instructor: "Dr. Rajesh Kumar",
    rating: 4.8,
    students: 12543
  },
  "2": {
    title: "Banking Exam Masterclass",
    description: "Master banking exams with our comprehensive course covering all major banking entrance tests.",
    image: "/placeholder.svg", 
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    duration: "4 months",
    modules: [
      "Banking Awareness",
      "Computer Knowledge",
      "Reasoning Ability",
      "Quantitative Aptitude",
      "English Language"
    ],
    features: [
      "100+ Video Lectures",
      "30+ Mock Tests", 
      "Current Affairs Updates",
      "Banking GK Notes",
      "Interview Preparation",
      "Exam Strategy Sessions"
    ],
    instructor: "Prof. Anita Sharma",
    rating: 4.7,
    students: 8901
  }
}

export default function BuyCourseDetail() {
  const { courseId } = useParams()
  const [couponCode, setCouponCode] = useState("")
  const [appliedCoupon, setAppliedCoupon] = useState(false)
  const [additionalDiscount, setAdditionalDiscount] = useState(0)

  const course = courseData[courseId as keyof typeof courseData] || courseData["1"]
  const finalPrice = appliedCoupon ? course.price - additionalDiscount : course.price

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setAdditionalDiscount(300)
      setAppliedCoupon(true)
    }
  }

  const handlePayment = (method: string) => {
    console.log(`Processing payment via ${method} for ₹${finalPrice}`)
    // Implement payment logic here
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => window.close()}
              className="gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{course.title}</h1>
              <p className="text-muted-foreground mt-2">{course.description}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                <IndianRupee className="w-6 h-6" />
                {finalPrice}
              </div>
              {course.originalPrice > course.price && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground line-through">
                  <IndianRupee className="w-3 h-3" />
                  {course.originalPrice}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-8">
          {/* Course Details - Left Side */}
          <div className="col-span-8 space-y-6">
            {/* Course Image */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                {course.discount}% OFF
              </Badge>
            </div>

            {/* Course Info */}
            <div className="grid grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{course.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{course.students.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Students</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">{course.rating}</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="font-semibold">Lifetime</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </CardContent>
              </Card>
            </div>

            {/* Course Modules */}
            <Card>
              <CardHeader>
                <CardTitle>Course Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {course.modules.map((module, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <span className="font-medium">{module}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Course Features */}
            <Card>
              <CardHeader>
                <CardTitle>What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Instructor Info */}
            <Card>
              <CardHeader>
                <CardTitle>Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{course.instructor}</h3>
                    <p className="text-muted-foreground">Expert Instructor</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{course.rating} rating</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Section - Right Side */}
          <div className="col-span-4">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Purchase Course</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Pricing Details */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Course Price</span>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-4 h-4" />
                      <span className="line-through text-muted-foreground">{course.originalPrice}</span>
                      <span className="font-semibold">{course.price}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span>Discount ({course.discount}%)</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <span>-</span>
                      <IndianRupee className="w-4 h-4" />
                      <span>{course.originalPrice - course.price}</span>
                    </div>
                  </div>

                  {appliedCoupon && (
                    <div className="flex justify-between items-center">
                      <span>Coupon Discount</span>
                      <div className="flex items-center gap-1 text-green-600">
                        <span>-</span>
                        <IndianRupee className="w-4 h-4" />
                        <span>{additionalDiscount}</span>
                      </div>
                    </div>
                  )}

                  <Separator />
                  
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Payable Amount</span>
                    <div className="flex items-center gap-1 text-primary">
                      <IndianRupee className="w-5 h-5" />
                      <span>{finalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Coupon Code */}
                <div className="space-y-2">
                  <Label htmlFor="coupon">Coupon Code</Label>
                  <div className="flex gap-2">
                    <Input
                      id="coupon"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      disabled={appliedCoupon}
                    />
                    <Button 
                      variant="outline" 
                      onClick={applyCoupon}
                      disabled={appliedCoupon || !couponCode}
                      className="gap-2"
                    >
                      <Tag className="w-4 h-4" />
                      Apply
                    </Button>
                  </div>
                  {appliedCoupon && (
                    <p className="text-sm text-green-600">Coupon applied successfully!</p>
                  )}
                  <p className="text-xs text-muted-foreground">Try "SAVE10" for additional discount</p>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full gap-2" 
                    size="lg"
                    onClick={() => handlePayment('card')}
                  >
                    <CreditCard className="w-5 h-5" />
                    Pay with Card
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full gap-2" 
                    size="lg"
                    onClick={() => handlePayment('razorpay')}
                  >
                    <Smartphone className="w-5 h-5" />
                    Pay with Razorpay
                  </Button>
                </div>

                {/* Security Note */}
                <div className="text-center text-xs text-muted-foreground">
                  <p>🔒 Secure payment. Your data is protected.</p>
                  <p className="mt-1">30-day money-back guarantee</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}