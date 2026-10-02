import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminSubmissions() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const savedPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    const submittedPlans = savedPlans.filter(
      (plan) => plan.status !== "Draft"
    );

    setSubmissions(submittedPlans);
  }, []);

  const getStatusClass = (status) => {
    if (status === "Approved") {
      return "approved-badge";
    }

    if (status === "Rejected") {
      return "rejected-badge";
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
          <span>Administrator</span>
        </div>
      </header>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <nav>
            <Link to="/admin">
              Dashboard
            </Link>

            <Link
              to="/admin/submissions"
              className="active"
            >
              Submitted Lesson Plans
            </Link>

            <Link to="/admin/teachers">
              Teachers
            </Link>

            <Link to="/admin/profile">
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
          <div className="page-heading">
            <h1>Submitted Lesson Plans</h1>

            <p>
              Review and manage lesson plans submitted by teachers.
            </p>
          </div>

          <div className="section-header">
            <h2>All Submissions</h2>
          </div>

          {submissions.length === 0 ? (
            <div className="lesson-card">
              <div>
                <h3>No submissions yet</h3>

                <p>
                  Submitted lesson plans will appear here.
                </p>
              </div>
            </div>
          ) : (
            submissions.map((submission) => (
              <div
                className="lesson-card"
                key={submission.id}
              >
                <div>
                  <h3>
                    {submission.lessonTitle}
                  </h3>

                  <p>
                    Teacher: {submission.teacher}
                  </p>

                  <p>
                    {submission.program} • {submission.yearLevel} •{" "}
                    {submission.section}
                  </p>

                  <p>
                    Subject: {submission.subject}
                  </p>

                  <p>
                    Submitted: {submission.submittedAt}
                  </p>
                </div>

                <div>
                  <span
                    className={`status-badge ${getStatusClass(
                      submission.status
                    )}`}
                  >
                    {submission.status}
                  </span>

                  <br />

                  <Link
                    to={`/admin/review/${submission.id}`}
                    className="secondary-button"
                    style={{
                      display: "inline-block",
                      marginTop: "12px",
                      textDecoration: "none"
                    }}
                  >
                    {submission.status === "Pending"
                      ? "Review"
                      : "View"}
                  </Link>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

export default AdminSubmissions;