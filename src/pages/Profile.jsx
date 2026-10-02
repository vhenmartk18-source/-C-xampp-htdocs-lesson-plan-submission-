import { Link } from "react-router-dom";

function Profile() {
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

            <Link to="/teacher/submissions">
              Submissions
            </Link>

            <Link
              to="/teacher/profile"
              className="active"
            >
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
            <h1>My Profile</h1>

            <p>
              View and manage your teacher account information.
            </p>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">
              👤
            </div>

            <div className="profile-info">
              <h2>Teacher</h2>

              <p>
                teacher@school.edu
              </p>

              <span className="profile-role">
                Teacher
              </span>
            </div>
          </div>

          <div className="form-section">
            <h2>Personal Information</h2>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">
                  First Name
                </label>

                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">
                  Last Name
                </label>

                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="teacher@school.edu"
                />
              </div>

              <div className="form-field">
                <label htmlFor="department">
                  Department
                </label>

                <input
                  type="text"
                  id="department"
                  placeholder="e.g. College of Information Technology"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="program">
                  Program / Course
                </label>

                <input
                  type="text"
                  id="program"
                  placeholder="e.g. BS Information Technology"
                />
              </div>

              <div className="form-field">
                <label htmlFor="employeeId">
                  Employee ID
                </label>

                <input
                  type="text"
                  id="employeeId"
                  placeholder="Enter employee ID"
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="primary-button"
              >
                Save Changes
              </button>
            </div>
          </div>

          <div className="form-section">
            <h2>Change Password</h2>

            <div className="form-field full-width">
              <label htmlFor="currentPassword">
                Current Password
              </label>

              <input
                type="password"
                id="currentPassword"
                placeholder="Enter current password"
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="newPassword">
                  New Password
                </label>

                <input
                  type="password"
                  id="newPassword"
                  placeholder="Enter new password"
                />
              </div>

              <div className="form-field">
                <label htmlFor="confirmPassword">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-button"
              >
                Change Password
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;