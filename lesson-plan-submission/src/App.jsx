import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";

import TeacherDashboard from "./pages/TeacherDashboard";
import CreateLessonPlan from "./pages/CreateLessonPlan";
import MyLessonPlans from "./pages/MyLessonPlans";
import Submissions from "./pages/Submissions";
import Profile from "./pages/Profile";

import AdminDashboard from "./pages/AdminDashboard";
import AdminSubmissions from "./pages/AdminSubmissions";
import AdminReview from "./pages/AdminReview";
import AdminTeachers from "./pages/AdminTeachers";
import AdminProfile from "./pages/AdminProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/teacher"
          element={<TeacherDashboard />}
        />

        <Route
          path="/teacher/create"
          element={<CreateLessonPlan />}
        />

        <Route
          path="/teacher/lesson-plans"
          element={<MyLessonPlans />}
        />

        <Route
          path="/teacher/submissions"
          element={<Submissions />}
        />

        <Route
          path="/teacher/profile"
          element={<Profile />}
        />

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/submissions"
          element={<AdminSubmissions />}
        />

        <Route
          path="/admin/review/:id"
          element={<AdminReview />}
        />

        <Route
          path="/admin/teachers"
          element={<AdminTeachers />}
        />

        <Route
          path="/admin/profile"
          element={<AdminProfile />}
        />

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;