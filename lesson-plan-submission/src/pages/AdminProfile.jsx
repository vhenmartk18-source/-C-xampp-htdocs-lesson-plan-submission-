import { Link } from "react-router-dom";

function AdminProfile() {
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

            <Link to="/admin/teachers">
              Teachers
            </Link>

            <Link
              to="/admin/profile"
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
            <h1>Administrator Profile</h1>

            <p>
              View and manage your administrator account information.
            </p>
          </div>

          <div className="profile-card">
            <div className="profile-avatar">
              👤
            </div>

            <div className="profile-info">
              <h2>Administrator</h2>

              <p>
                admin@school.edu
              </p>

              <span className="profile-role">
                Administrator
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
                  placeholder="admin@school.edu"
                />
              </div>

              <div className="form-field">
                <label htmlFor="position">
                  Position
                </label>

                <input
                  type="text"
                  id="position"
                  placeholder="System Administrator"
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

export default AdminProfile;