import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Trophy, 
  Target, 
  User, 
  Home,
  Award,
  Play,
  Star,
  Zap,
  Gift,
  Users,
  Crown,
  Medal,
  LogOut
} from "lucide-react";

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Mock student data
  const studentData = {
    name: "Priya Sharma",
    avatar: "PS",
    level: 12,
    xp: 1850,
    nextLevelXp: 2000,
    totalBadges: 15,
    streakDays: 7,
    rank: 3
  };

  const courses = [
    { id: 1, title: "Mathematics Grade 8", progress: 75, chapters: 12, completed: 9, color: "bg-blue-500" },
    { id: 2, title: "Science Basics", progress: 60, chapters: 10, completed: 6, color: "bg-green-500" },
    { id: 3, title: "English Grammar", progress: 90, chapters: 8, completed: 7, color: "bg-purple-500" },
    { id: 4, title: "Hindi Literature", progress: 45, chapters: 15, completed: 7, color: "bg-orange-500" },
  ];

  const achievements = [
    { id: 1, title: "First Course", description: "Completed your first course", type: "gold", unlocked: true },
    { id: 2, title: "Quick Learner", description: "Completed 5 lessons in a day", type: "silver", unlocked: true },
    { id: 3, title: "Math Master", description: "100% in Mathematics quiz", type: "bronze", unlocked: true },
    { id: 4, title: "Streak Champion", description: "7 day learning streak", type: "gold", unlocked: true },
    { id: 5, title: "Knowledge Seeker", description: "Complete 10 courses", type: "gold", unlocked: false },
    { id: 6, title: "Perfect Score", description: "Get 100% in all subjects", type: "crown", unlocked: false },
  ];

  const quests = [
    { id: 1, title: "Complete Math Chapter 10", reward: "50 XP", progress: 80, completed: false },
    { id: 2, title: "Take Science Quiz", reward: "30 XP", progress: 0, completed: false },
    { id: 3, title: "Read 3 English Stories", reward: "40 XP", progress: 33, completed: false },
  ];

  const leaderboard = [
    { rank: 1, name: "Amit Kumar", xp: 2150, badge: "crown" },
    { rank: 2, name: "Sneha Patel", xp: 1950, badge: "gold" },
    { rank: 3, name: "Priya Sharma", xp: 1850, badge: "silver", isCurrentUser: true },
    { rank: 4, name: "Rahul Singh", xp: 1720, badge: "bronze" },
    { rank: 5, name: "Anita Rao", xp: 1680, badge: "bronze" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "courses":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Courses</h2>
            <div className="grid gap-4">
              {courses.map((course) => (
                <Card key={course.id} className="student-card hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{course.title}</h3>
                        <p className="text-sm text-gray-600">
                          {course.completed} of {course.chapters} chapters completed
                        </p>
                      </div>
                      <Button className="student-button">
                        <Play className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case "achievements":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`student-card ${achievement.unlocked ? 'border-yellow-400' : 'opacity-60'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`badge ${achievement.type === 'gold' ? 'badge-gold' : achievement.type === 'silver' ? 'badge-silver' : achievement.type === 'bronze' ? 'badge-bronze' : 'badge-gold'} mx-auto mb-4`}>
                      {achievement.type === 'crown' ? <Crown className="w-6 h-6" /> : <Trophy className="w-6 h-6" />}
                    </div>
                    <h3 className="font-bold text-sm mb-2">{achievement.title}</h3>
                    <p className="text-xs text-gray-600">{achievement.description}</p>
                    {achievement.unlocked && (
                      <Badge className="mt-2 bg-green-500">Unlocked!</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      
      case "profile":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
            <Card className="student-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="w-20 h-20 bg-student-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {studentData.avatar}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{studentData.name}</h3>
                    <p className="text-gray-600">Level {studentData.level} Student</p>
                    <Badge className="mt-2 bg-student-primary">Rank #{studentData.rank}</Badge>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-student-primary">{studentData.xp}</div>
                    <div className="text-sm text-gray-600">Total XP</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-student-secondary">{studentData.totalBadges}</div>
                    <div className="text-sm text-gray-600">Badges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-student-success">{studentData.streakDays}</div>
                    <div className="text-sm text-gray-600">Day Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-student-warning">{courses.length}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </CardContent>
            </Card>
          </div>
        );
      
      default:
        return (
          <div className="space-y-6">
            {/* Welcome Header */}
            <div className="student-card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Welcome back, {studentData.name}! 🌟
                  </h2>
                  <p className="text-gray-600">Ready for another amazing learning day?</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Level {studentData.level}</div>
                  <div className="xp-bar mt-2">
                    <div 
                      className="xp-progress" 
                      style={{ width: `${(studentData.xp / studentData.nextLevelXp) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {studentData.xp} / {studentData.nextLevelXp} XP
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Quests */}
            <Card className="student-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-student-primary" />
                  Today's Quests
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quests.map((quest) => (
                  <div key={quest.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">{quest.title}</div>
                      <div className="text-sm text-gray-600">Reward: {quest.reward}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{quest.progress}%</div>
                      <Progress value={quest.progress} className="w-20 h-2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card className="student-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-student-secondary" />
                  Continue Learning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.slice(0, 2).map((course) => (
                  <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${course.color}`}></div>
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-sm text-gray-600">{course.progress}% completed</div>
                      </div>
                    </div>
                    <Button className="student-button" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Continue
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <Card className="student-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-student-warning" />
                  Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {leaderboard.slice(0, 3).map((user) => (
                    <div 
                      key={user.rank} 
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        user.isCurrentUser ? 'bg-student-primary/10 border border-student-primary/30' : 'bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-lg font-bold">#{user.rank}</div>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.xp} XP</div>
                        </div>
                      </div>
                      <Medal className={`w-6 h-6 ${
                        user.badge === 'crown' ? 'text-yellow-500' : 
                        user.badge === 'gold' ? 'text-yellow-500' : 
                        user.badge === 'silver' ? 'text-gray-400' : 'text-orange-600'
                      }`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="student-bg p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
              {studentData.avatar}
            </div>
            <div>
              <h1 className="text-xl font-bold">{studentData.name}</h1>
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4" />
                <span>{studentData.streakDays} day streak!</span>
              </div>
            </div>
          </div>
          <Link to="/">
            <Button variant="secondary">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-4 pb-20">
        {renderContent()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="container mx-auto">
          <div className="flex items-center justify-around py-3">
            {[
              { id: "home", icon: Home, label: "Home" },
              { id: "courses", icon: BookOpen, label: "Courses" },
              { id: "achievements", icon: Trophy, label: "Badges" },
              { id: "profile", icon: User, label: "Profile" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === item.id 
                    ? 'text-student-primary bg-student-primary/10' 
                    : 'text-gray-600 hover:text-student-primary'
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StudentDashboard;