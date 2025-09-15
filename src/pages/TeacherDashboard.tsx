import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  BarChart3, 
  FileText, 
  Bell, 
  LogOut,
  TrendingUp,
  BookOpen,
  Award,
  Clock,
  Target,
  Calendar,
  MessageSquare
} from "lucide-react";

const TeacherDashboard = () => {
  // Mock teacher data
  const teacherData = {
    name: "Mrs. Sunita Verma",
    avatar: "SV",
    totalStudents: 45,
    activeStudents: 42,
    coursesCreated: 8,
    avgPerformance: 78
  };

  const studentsProgress = [
    { id: 1, name: "Priya Sharma", progress: 85, status: "excellent", lastActive: "2 hours ago" },
    { id: 2, name: "Amit Kumar", progress: 92, status: "excellent", lastActive: "1 hour ago" },
    { id: 3, name: "Sneha Patel", progress: 78, status: "good", lastActive: "4 hours ago" },
    { id: 4, name: "Rahul Singh", progress: 65, status: "needs attention", lastActive: "1 day ago" },
    { id: 5, name: "Anita Rao", progress: 71, status: "good", lastActive: "3 hours ago" },
  ];

  const assignments = [
    { id: 1, title: "Math Chapter 10 Quiz", dueDate: "Tomorrow", submissions: 28, total: 45, status: "active" },
    { id: 2, title: "Science Lab Report", dueDate: "3 days", submissions: 15, total: 45, status: "active" },
    { id: 3, title: "English Essay Writing", dueDate: "1 week", submissions: 0, total: 45, status: "draft" },
  ];

  const performanceData = [
    { subject: "Mathematics", avgScore: 82, improvement: "+5%" },
    { subject: "Science", avgScore: 78, improvement: "+8%" },
    { subject: "English", avgScore: 75, improvement: "+3%" },
    { subject: "Hindi", avgScore: 80, improvement: "+2%" },
  ];

  const topPerformers = [
    { name: "Amit Kumar", score: 92, badge: "gold" },
    { name: "Priya Sharma", score: 85, badge: "silver" },
    { name: "Sneha Patel", score: 78, badge: "bronze" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "text-green-600 bg-green-100";
      case "good": return "text-blue-600 bg-blue-100";
      case "needs attention": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="teacher-bg p-4 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl font-bold">
              {teacherData.avatar}
            </div>
            <div>
              <h1 className="text-xl font-bold">{teacherData.name}</h1>
              <p className="text-sm opacity-90">Class Teacher - Grade 8A</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <Link to="/">
              <Button variant="secondary">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="teacher-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Students</p>
                  <p className="text-2xl font-bold text-teacher-secondary">{teacherData.totalStudents}</p>
                </div>
                <Users className="w-8 h-8 text-teacher-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="teacher-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Today</p>
                  <p className="text-2xl font-bold text-green-600">{teacherData.activeStudents}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="teacher-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Avg Performance</p>
                  <p className="text-2xl font-bold text-teacher-accent">{teacherData.avgPerformance}%</p>
                </div>
                <Target className="w-8 h-8 text-teacher-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="teacher-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Courses Created</p>
                  <p className="text-2xl font-bold text-teacher-primary">{teacherData.coursesCreated}</p>
                </div>
                <BookOpen className="w-8 h-8 text-teacher-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Student Progress */}
          <Card className="teacher-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-teacher-primary" />
                Student Progress Tracker
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {studentsProgress.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{student.name}</span>
                      <Badge className={getStatusColor(student.status)}>
                        {student.status}
                      </Badge>
                    </div>
                    <Progress value={student.progress} className="h-2 mb-1" />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{student.progress}% complete</span>
                      <span>{student.lastActive}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full teacher-button">
                View All Students
              </Button>
            </CardContent>
          </Card>

          {/* Performance Analytics */}
          <Card className="teacher-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Subject Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.map((subject) => (
                <div key={subject.subject} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{subject.subject}</div>
                    <div className="text-sm text-gray-600">Class Average</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teacher-primary">{subject.avgScore}%</div>
                    <div className="text-sm text-green-600">{subject.improvement}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Assignments */}
          <Card className="teacher-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-teacher-secondary" />
                Active Assignments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {assignments.map((assignment) => (
                <div key={assignment.id} className="p-3 border rounded-lg">
                  <div className="font-medium text-sm mb-1">{assignment.title}</div>
                  <div className="text-xs text-gray-600 mb-2">Due: {assignment.dueDate}</div>
                  <div className="flex items-center justify-between text-xs">
                    <span>{assignment.submissions}/{assignment.total} submitted</span>
                    <Badge variant={assignment.status === 'active' ? 'default' : 'secondary'}>
                      {assignment.status}
                    </Badge>
                  </div>
                  <Progress 
                    value={(assignment.submissions / assignment.total) * 100} 
                    className="h-1 mt-2" 
                  />
                </div>
              ))}
              <Button className="w-full teacher-button" size="sm">
                Create New Assignment
              </Button>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card className="teacher-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-600" />
                Top Performers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`badge ${
                      performer.badge === 'gold' ? 'badge-gold' : 
                      performer.badge === 'silver' ? 'badge-silver' : 'badge-bronze'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-medium text-sm">{performer.name}</span>
                  </div>
                  <span className="font-bold text-teacher-primary">{performer.score}%</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="teacher-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-teacher-accent" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full teacher-button" variant="outline">
                <FileText className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
              <Button className="w-full teacher-button" variant="outline">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Announcement
              </Button>
              <Button className="w-full teacher-button" variant="outline">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Class
              </Button>
              <Button className="w-full teacher-button" variant="outline">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="teacher-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gray-600" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <div className="font-medium text-sm">Priya Sharma completed Math Quiz</div>
                  <div className="text-xs text-gray-600">Score: 95% • 2 hours ago</div>
                </div>
                <Badge className="bg-green-500">Excellent</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div>
                  <div className="font-medium text-sm">New assignment submissions pending</div>
                  <div className="text-xs text-gray-600">Science Lab Report • 15 submissions</div>
                </div>
                <Badge variant="secondary">Review</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <div className="font-medium text-sm">Class average improved by 8%</div>
                  <div className="text-xs text-gray-600">Science subject • This week</div>
                </div>
                <Badge className="bg-green-500">Great!</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;