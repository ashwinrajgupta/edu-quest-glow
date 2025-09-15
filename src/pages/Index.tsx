import { Link } from "react-router-dom";
import { BookOpen, Users, Trophy, Target } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen student-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <BookOpen className="w-12 h-12 text-white mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Rural Learn
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Empowering Rural Education Through Gamified Learning
          </p>
        </header>

        {/* Login Options */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {/* Student Portal */}
          <Link to="/student-login" className="group block">
            <div className="student-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-student-primary/20 rounded-full flex items-center justify-center">
                <Trophy className="w-10 h-10 text-student-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Student Portal
              </h2>
              <p className="text-gray-600 mb-6">
                Begin your learning adventure with gamified courses, achievements, and rewards!
              </p>
              <div className="student-button inline-block">
                Start Learning
              </div>
            </div>
          </Link>

          {/* Teacher Portal */}
          <Link to="/teacher-login" className="group block">
            <div className="teacher-card p-8 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-teacher-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-10 h-10 text-teacher-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Teacher Portal
              </h2>
              <p className="text-gray-600 mb-6">
                Empower your students with analytics, progress tracking, and engaging tools.
              </p>
              <div className="teacher-button inline-block">
                Teach & Guide
              </div>
            </div>
          </Link>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center text-white">
            <Target className="w-12 h-12 mx-auto mb-4 bounce-gentle" />
            <h3 className="text-xl font-bold mb-2">Gamified Learning</h3>
            <p className="text-white/80">XP points, badges, and achievements make learning fun and engaging</p>
          </div>
          <div className="text-center text-white">
            <BookOpen className="w-12 h-12 mx-auto mb-4 bounce-gentle" />
            <h3 className="text-xl font-bold mb-2">Rural Focused</h3>
            <p className="text-white/80">Designed specifically for rural students with limited digital exposure</p>
          </div>
          <div className="text-center text-white">
            <Trophy className="w-12 h-12 mx-auto mb-4 bounce-gentle" />
            <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
            <p className="text-white/80">Visual progress bars and detailed analytics for students and teachers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;