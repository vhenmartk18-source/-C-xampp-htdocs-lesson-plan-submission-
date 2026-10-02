import { Link } from "react-router-dom";

function AdminDashboard() {
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
            <Link
              to="/admin"
              className="active"
            >
              Dashboard
            </Link>

            <Link to="/admin/submissions">
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
          <h1>Welcome, Administrator!</h1>

          <p className="dashboard-subtitle">
            Manage lesson plan submissions and teacher accounts.
          </p>

          <div className="stat-grid">
            <div className="stat-card">
              <div className="stat-title">
                Total Teachers
              </div>

              <div className="stat-number">
                12
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Pending Review
              </div>

              <div className="stat-number pending">
                5
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Approved
              </div>

              <div className="stat-number approved">
                24
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-title">
                Rejected
              </div>

              <div className="stat-number rejected">
                3
              </div>
            </div>
          </div>

          <section className="recent-section">
            <div className="section-header">
              <h2>Recent Submissions</h2>

              <Link
                to="/admin/submissions"
                className="primary-button"
              >
                View All Submissions
              </Link>
            </div>

            <div className="lesson-card">
              <div>
                <h3>
                  Introduction to System Architecture
                </h3>

                <p>
                  Teacher: Juan Dela Cruz
                </p>

                <p>
                  BSIT • 3rd Year • BSIT 3-A
                </p>

                <p>
                  Submitted: October 2, 2026
                </p>
              </div>

              <span className="status-badge pending-badge">
                Pending
              </span>
            </div>

            <div className="lesson-card">
              <div>
                <h3>
                  Fundamentals of Criminal Justice
                </h3>

                <p>
                  Teacher: Maria Santos
                </p>

                <p>
                  BSCRIM • 2nd Year • BSCRIM 2-A
                </p>

                <p>
                  Submitted: October 1, 2026
                </p>
              </div>

              <span className="status-badge approved-badge">
                Approved
              </span>
            </div>

            <div className="lesson-card">
              <div>
                <h3>
                  Principles of Teaching and Learning
                </h3>

                <p>
                  Teacher: Pedro Garcia
                </p>

                <p>
                  BEED • 1st Year • BEED 1-A
                </p>

                <p>
                  Submitted: September 30, 2026
                </p>
              </div>

              <span className="status-badge rejected-badge">
                Rejected
              </span>
            </div>

            <div className="lesson-card">
              <div>
                <h3>
                  Office Procedures and Management
                </h3>

                <p>
                  Teacher: Anna Reyes
                </p>

                <p>
                  BSOAD • 4th Year • BSOAD 4-A
                </p>

                <p>
                  Submitted: September 29, 2026
                </p>
              </div>

              <span className="status-badge approved-badge">
                Approved
              </span>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;