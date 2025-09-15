import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ArrowLeft, Eye, EyeOff, Shield } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import teacherHero from "@/assets/teacher-hero.jpg";

const TeacherLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      toast({
        title: "Welcome Teacher! 👨‍🏫",
        description: "Ready to empower your students!",
      });
      navigate("/teacher-dashboard");
    } else {
      toast({
        title: "Please try again",
        description: "Email and password are required.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen teacher-bg flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Hero Image & Welcome */}
        <div className="hidden lg:block space-y-6">
          <Link to="/" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center space-y-6">
            <img 
              src={teacherHero} 
              alt="Teacher guiding students" 
              className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
            />
            <div className="space-y-3">
              <h1 className="text-4xl font-bold text-white">
                Hello Teacher! 🎯
              </h1>
              <p className="text-xl text-white/90">
                Empower Students, Shape Futures
              </p>
              <div className="flex justify-center space-x-4 text-white/80">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Student Analytics
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Progress Tracking
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="teacher-card shadow-warm border border-gray-100">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-teacher-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-teacher-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-teacher-secondary">
                Teacher Portal
              </CardTitle>
              <p className="text-gray-600">
                Access your teaching dashboard
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address / Phone
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email or phone"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    className="h-12 rounded-lg border-2 focus:border-teacher-primary"
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
                      className="h-12 rounded-lg border-2 focus:border-teacher-primary pr-12"
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
                  className="w-full teacher-button h-12 text-lg font-semibold"
                >
                  Access Dashboard 📊
                </Button>
              </form>
              
              <div className="mt-6 space-y-4 text-center">
                <Link 
                  to="#" 
                  className="text-teacher-primary hover:text-teacher-accent font-semibold"
                >
                  Forgot Password?
                </Link>
                <div className="text-sm text-gray-600">
                  Need help?{" "}
                  <Link 
                    to="#" 
                    className="text-teacher-primary hover:text-teacher-accent font-semibold"
                  >
                    Contact Support
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

export default TeacherLogin;