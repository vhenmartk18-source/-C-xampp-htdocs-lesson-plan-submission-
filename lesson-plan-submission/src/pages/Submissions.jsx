
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Submissions() {
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
          <span>Teacher</span>
        </div>
      </header>

      <div className="dashboard-layout">
        <aside className="sidebar">
          <nav>
            <Link to="/teacher">
              Dashboard
            </Link>

            <Link to="/teacher/lesson-plans">
              My Lesson Plans
            </Link>

            <Link to="/teacher/create">
              Create Lesson Plan
            </Link>

            <Link
              to="/teacher/submissions"
              className="active"
            >
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
          <div className="page-heading">
            <h1>Submissions</h1>

            <p>
              Track the status of your submitted lesson plans.
            </p>
          </div>

          <div className="section-header">
            <h2>Submission History</h2>
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
                    Submitted: {submission.submittedAt}
                  </p>

                  <p>
                    {submission.program} • {submission.yearLevel} •{" "}
                    {submission.section}
                  </p>

                  <p>
                    Subject: {submission.subject}
                  </p>

                  <p>
                    Academic Year: {submission.academicYear}
                  </p>
                </div>

                <span
                  className={`status-badge ${getStatusClass(
                    submission.status
                  )}`}
                >
                  {submission.status}
                </span>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

export default Submissions;