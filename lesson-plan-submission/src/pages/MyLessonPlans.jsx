import { Link } from "react-router-dom";

function MyLessonPlans() {
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

            <Link
              to="/teacher/lesson-plans"
              className="active"
            >
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
          <div className="page-heading">
            <h1>My Lesson Plans</h1>

            <p>
              View and manage your submitted and saved lesson plans.
            </p>
          </div>

          <div className="section-header">
            <h2>Lesson Plans</h2>

            <Link
              to="/teacher/create"
              className="primary-button"
            >
              + Create Lesson Plan
            </Link>
          </div>

          <div className="lesson-card">
            <div>
              <h3>
                Introduction to System Architecture
              </h3>

              <p>
                BSIT • 3rd Year • BSIT 3-A
              </p>

              <p>
                Academic Year: 2026-2027
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
                BSCRIM • 2nd Year • BSCRIM 2-A
              </p>

              <p>
                Academic Year: 2026-2027
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
                BEED • 1st Year • BEED 1-A
              </p>

              <p>
                Academic Year: 2026-2027
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
                BSOAD • 4th Year • BSOAD 4-A
              </p>

              <p>
                Academic Year: 2026-2027
              </p>
            </div>

            <span className="status-badge approved-badge">
              Approved
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MyLessonPlans;
