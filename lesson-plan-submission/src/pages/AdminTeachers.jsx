import { Link } from "react-router-dom";

function AdminTeachers() {
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

            <Link to="/admin/submissions">
              Submitted Lesson Plans
            </Link>

            <Link
              to="/admin/teachers"
              className="active"
            >
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
            <h1>Teachers</h1>

            <p>
              View and manage teacher accounts in the system.
            </p>
          </div>

          <div className="section-header">
            <h2>Teacher Accounts</h2>
          </div>

          <div className="lesson-card">
            <div>
              <h3>Juan Dela Cruz</h3>

              <p>
                Email: juan.delacruz@school.edu
              </p>

              <p>
                Department: College of Information Technology
              </p>

              <p>
                Program: BS Information Technology
              </p>
            </div>

            <span className="status-badge approved-badge">
              Active
            </span>
          </div>

          <div className="lesson-card">
            <div>
              <h3>Maria Santos</h3>

              <p>
                Email: maria.santos@school.edu
              </p>

              <p>
                Department: College of Information Technology
              </p>

              <p>
                Program: BS Information Technology
              </p>
            </div>

            <span className="status-badge approved-badge">
              Active
            </span>
          </div>

          <div className="lesson-card">
            <div>
              <h3>Pedro Garcia</h3>

              <p>
                Email: pedro.garcia@school.edu
              </p>

              <p>
                Department: College of Computer Studies
              </p>

              <p>
                Program: BS Computer Science
              </p>
            </div>

            <span className="status-badge rejected-badge">
              Inactive
            </span>
          </div>

          <div className="lesson-card">
            <div>
              <h3>Anna Reyes</h3>

              <p>
                Email: anna.reyes@school.edu
              </p>

              <p>
                Department: College of Business
              </p>

              <p>
                Program: BS Business Administration
              </p>
            </div>

            <span className="status-badge approved-badge">
              Active
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminTeachers;