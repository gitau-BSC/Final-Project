import React from "react";
import { FaUserCheck, FaUserTimes, FaChartLine, FaCamera } from "react-icons/fa";

// Custom Card Component
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

// Custom CardContent Component
const CardContent = ({ children }) => {
  return <div className="mt-2">{children}</div>;
};

const StudentDashboard = () => {
  // Dummy Data
  const totalStudentsScanned = 320;
  const failedScans = 10;
  const mlAccuracy = 92; // ML accuracy for facial recognition
  const recentScans = [
    { name: "James Kimani", status: "✅ Success", time: "08:15 AM" },
    { name: "Lucy Wanjiru", status: "❌ Failed", time: "08:20 AM" },
    { name: "Samuel Otieno", status: "✅ Success", time: "08:30 AM" },
    { name: "Grace Mwangi", status: "✅ Success", time: "08:35 AM" },
    { name: "John Kariuki", status: "❌ Failed", time: "08:40 AM" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">📸 Student Facial Recognition Dashboard</h2>

      {/* Overview Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="flex items-center">
          <FaUserCheck className="text-blue-500 text-4xl mr-3" />
          <CardContent>
            <h3 className="text-lg font-semibold">Students Scanned Today</h3>
            <p className="text-xl font-bold">{totalStudentsScanned}</p>
          </CardContent>
        </Card>

        <Card className="flex items-center">
          <FaUserTimes className="text-red-500 text-4xl mr-3" />
          <CardContent>
            <h3 className="text-lg font-semibold">Failed Scans</h3>
            <p className="text-xl font-bold">{failedScans}</p>
          </CardContent>
        </Card>

        <Card className="flex items-center">
          <FaChartLine className="text-green-500 text-4xl mr-3" />
          <CardContent>
            <h3 className="text-lg font-semibold">ML Accuracy</h3>
            <p className="text-xl font-bold">{mlAccuracy}%</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Scan Attempts */}
      <Card className="mt-6">
        <h3 className="text-lg font-semibold mb-2">📷 Recent Scan Attempts</h3>
        <ul className="divide-y divide-gray-200">
          {recentScans.map((scan, index) => (
            <li key={index} className="py-2 flex justify-between">
              <span className="font-medium">{scan.name}</span>
              <span className={scan.status.includes("Failed") ? "text-red-500" : "text-green-500"}>
                {scan.status}
              </span>
              <span className="text-gray-400">{scan.time}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* AI-Based Security Warning */}
      <Card className="mt-6 bg-red-100 border-l-4 border-red-500 p-4">
        <h3 className="text-lg font-semibold text-red-700">⚠️ AI Security Alert</h3>
        <p className="text-gray-700">
          Multiple failed scans detected today! Ensure camera clarity and proper lighting.
        </p>
      </Card>
    </div>
  );
};

export default StudentDashboard;
