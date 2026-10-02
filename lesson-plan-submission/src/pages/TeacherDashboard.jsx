import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function TeacherDashboard() {
  const [lessonPlans, setLessonPlans] = useState([]);

  useEffect(() => {
    const savedPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    setLessonPlans(savedPlans);
  }, []);

  const drafts = lessonPlans.filter(
    (plan) => plan.status === "Draft"
  ).length;

  const pending = lessonPlans.filter(
    (plan) => plan.status === "Pending"
  ).length;

  const approved = lessonPlans.filter(
    (plan) => plan.status === "Approved"
  ).length;

  const rejected = lessonPlans.filter(
    (plan) => plan.status === "Rejected"
  ).length;

  const recentPlans = [...lessonPlans]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "approved-badge";
    }

    if (status === "Rejected") {
      return "rejected-badge";
    }

    if (status === "Draft") {
      return "draft-badge";
    }

    return "pending-badge";
  };

  return (
    <div className="dashboard-page">
      <header className="top-header">
        <div className="system-title">
          Lesson Plan Submission System
        </div>

        <div className="user-info">
          <span>👤</span>
          <span>Teacher</span>
        </div>
      </header>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <nav>
            <Link
              to="/teacher"
              className="active"
            >
              Dashboard
            </Link>

            <Link to="/teacher/lesson-plans">
              My Lesson Plans
            </Link>

            <Link to="/teacher/create">
              Create Lesson Plan
            </Link>

            <Link to="/teacher/submissions">
              Submissions
            </Link>

            <Link to="/teacher/profile">
              Profile
            </Link>

            <div className="sidebar-divider"></div>

            <Link
              to="/login"
              className="logout"
            >
              Logout
            </Link>
          </nav>
        </aside>

        <main className="dashboard-content">
          <h1>Welcome, Teacher!</h1>

          <p className="dashboard-subtitle">
            Manage your lesson plans and submissions.
          </p>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-title">
                Drafts
              </div>

              <div className="stat-number">
                {drafts}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Pending
              </div>

              <div className="stat-number pending">
                {pending}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Approved
              </div>

              <div className="stat-number approved">
                {approved}
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Rejected
              </div>

              <div className="stat-number rejected">
                {rejected}
              </div>
            </div>
          </div>

          <section className="recent-section">
            <div className="section-header">
              <h2>Recent Lesson Plans</h2>

              <Link
                to="/teacher/create"
                className="primary-button"
              >
                + Create Lesson Plan
              </Link>
            </div>

            {recentPlans.length === 0 ? (
              <div className="lesson-card">
                <div>
                  <h3>No lesson plans yet</h3>

                  <p>
                    Create your first lesson plan to see it here.
                  </p>
                </div>
              </div>
            ) : (
              recentPlans.map((plan) => (
                <div
                  className="lesson-card"
                  key={plan.id}
                >
                  <div>
                    <h3>
                      {plan.lessonTitle || "Untitled Lesson Plan"}
                    </h3>

                    <p>
                      {plan.program} • {plan.yearLevel} • {plan.section}
                    </p>

                    <p>
                      {plan.lessonDate}
                    </p>
                  </div>

                  <span
                    className={`status-badge ${getStatusClass(
                      plan.status
                    )}`}
                  >
                    {plan.status}
                  </span>
                </div>
              ))
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default TeacherDashboard;