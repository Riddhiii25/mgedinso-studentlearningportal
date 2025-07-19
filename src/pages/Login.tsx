import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EyeIcon, EyeOffIcon } from "lucide-react"

const Login = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const validateUsername = (username: string) => {
    const isGmail = username.endsWith("@gmail.com")
    const isEdFormat = /^Ed\d{10}$/.test(username)
    
    if (!isGmail && !isEdFormat) {
      setUsernameError("Invalid username")
      return false
    }
    setUsernameError("")
    return true
  }

  const validatePassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password)
    const hasLowercase = /[a-z]/.test(password)
    const hasDigit = /\d/.test(password)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    const isLongEnough = password.length >= 8

    if (!isLongEnough || !hasUppercase || !hasLowercase || !hasDigit || !hasSpecialChar) {
      setPasswordError("Invalid password")
      return false
    }
    setPasswordError("")
    return true
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    const isUsernameValid = validateUsername(username)
    const isPasswordValid = validatePassword(password)
    
    if (isUsernameValid && isPasswordValid) {
      // Redirect to main portal
      navigate("/portal")
    }
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle sign up logic here
    console.log("Sign up submitted")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <CardHeader>
              <CardTitle>Welcome Back</CardTitle>
              <CardDescription>
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleLogin}>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                   <Label htmlFor="loginUsername">Username</Label>
                   <Input
                     id="loginUsername"
                     type="text"
                     placeholder="Enter Gmail or Ed followed by 10 digits"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                   />
                   {usernameError && <p className="text-sm text-destructive">{usernameError}</p>}
                 </div>
                <div className="space-y-2">
                  <Label htmlFor="loginPassword">Password</Label>
                  <div className="relative">
                     <Input
                       id="loginPassword"
                       type={showPassword ? "text" : "password"}
                       placeholder="Enter your password"
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       required
                     />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                   </div>
                   {passwordError && <p className="text-sm text-destructive">{passwordError}</p>}
                 </div>
              </CardContent>
               <CardFooter className="flex flex-col space-y-2">
                 <Button type="submit" className="w-full">
                   Log In
                 </Button>
                <Button type="button" variant="link" className="text-sm">
                  Forgot your password?
                </Button>
              </CardFooter>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <CardHeader>
              <CardTitle>Create Account</CardTitle>
              <CardDescription>
                Sign up for a new account to get started
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignUp}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signupName">Full Name</Label>
                  <Input
                    id="signupName"
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                 <div className="space-y-2">
                   <Label htmlFor="signupEmail">Email</Label>
                   <Input
                     id="signupEmail"
                     type="email"
                     placeholder="Enter your email address"
                     required
                   />
                 </div>
                <div className="space-y-2">
                  <Label htmlFor="signupEnrollment">Enrollment Number</Label>
                  <Input
                    id="signupEnrollment"
                    type="text"
                    placeholder="Enter your enrollment number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupPassword">Password</Label>
                  <div className="relative">
                    <Input
                      id="signupPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  {passwordError && <p className="text-sm text-destructive">{passwordError}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signupConfirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="signupConfirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon className="h-4 w-4" />
                      ) : (
                        <EyeIcon className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </CardFooter>
            </form>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}

export default Login