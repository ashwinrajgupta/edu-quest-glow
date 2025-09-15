import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowLeft, Eye, EyeOff } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import studentHero from "@/assets/student-hero.jpg";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username && loginData.password) {
      toast({
        title: "Welcome Student! 🎉",
        description: "Your learning adventure begins now!",
      });
      navigate("/student-dashboard");
    } else {
      toast({
        title: "Oops!",
        description: "Please fill in all fields to continue.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen student-bg flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Hero Image & Welcome */}
        <div className="hidden lg:block space-y-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center space-y-6">
            <img 
              src={studentHero} 
              alt="Students learning in rural setting" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-white">
                Welcome Student! 📚
              </h1>
              <p className="text-xl text-white/90">
                Begin Your Learning Adventure!
              </p>
              <div className="flex justify-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Interactive Courses
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-2 bg-badge-gold rounded-full"></div>
                  Earn Badges
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="student-card border-2 border-white/20 shadow-2xl">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-student-primary/20 rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-student-primary" />
              </div>
              <CardTitle className="text-2xl font-bold gradient-text">
                Student Login
              </CardTitle>
              <p className="text-gray-600">
                Enter your details to start learning
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-sm font-semibold text-gray-700">
                    Username / Phone Number
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username or phone"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="h-12 rounded-xl border-2 focus:border-student-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="h-12 rounded-xl border-2 focus:border-student-primary pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full student-button h-12 text-lg font-bold"
                >
                  Start Learning! 🚀
                </Button>
              </form>
              
              <div className="mt-6 space-y-4 text-center">
                <Link 
                  to="#" 
                  className="text-student-primary hover:text-student-secondary font-semibold"
                >
                  Forgot Password?
                </Link>
                <div className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link 
                    to="#" 
                    className="text-student-primary hover:text-student-secondary font-semibold"
                  >
                    Sign Up Here
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;