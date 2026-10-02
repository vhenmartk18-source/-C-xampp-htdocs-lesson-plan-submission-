import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AdminReview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [submission, setSubmission] = useState(null);
  const [remarks, setRemarks] = useState("");

  useEffect(() => {
    const savedPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    const foundSubmission = savedPlans.find(
      (plan) => String(plan.id) === String(id)
    );

    setSubmission(foundSubmission || null);

    if (foundSubmission?.remarks) {
      setRemarks(foundSubmission.remarks);
    }
  }, [id]);

  const handleApprove = () => {
    const savedPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    const updatedPlans = savedPlans.map((plan) =>
      String(plan.id) === String(id)
        ? {
            ...plan,
            status: "Approved",
            remarks: remarks.trim()
          }
        : plan
    );

    localStorage.setItem(
      "lessonPlans",
      JSON.stringify(updatedPlans)
    );

    alert("Lesson plan approved.");
    navigate("/admin/submissions");
  };

  const handleReject = () => {
    if (!remarks.trim()) {
      alert("Please enter remarks before rejecting the lesson plan.");
      return;
    }

    const savedPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    const updatedPlans = savedPlans.map((plan) =>
      String(plan.id) === String(id)
        ? {
            ...plan,
            status: "Rejected",
            remarks: remarks.trim()
          }
        : plan
    );

    localStorage.setItem(
      "lessonPlans",
      JSON.stringify(updatedPlans)
    );

    alert("Lesson plan rejected.");
    navigate("/admin/submissions");
  };

  if (!submission) {
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
              <h1>Review Lesson Plan</h1>

              <p>
                The selected lesson plan could not be found.
              </p>
            </div>

            <div className="lesson-card">
              <div>
                <h3>Submission Not Found</h3>

                <p>
                  The lesson plan may have been deleted or the submission ID is invalid.
                </p>

                <Link
                  to="/admin/submissions"
                  className="primary-button"
                  style={{
                    display: "inline-block",
                    marginTop: "15px",
                    textDecoration: "none"
                  }}
                >
                  Back to Submissions
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

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
            <h1>Review Lesson Plan</h1>

            <p>
              Review the submitted lesson plan before making a decision.
            </p>
          </div>

          <div className="form-section">
            <h2>Submission Information</h2>

            <div className="form-row">
              <div className="form-field">
                <label>Teacher</label>

                <input
                  type="text"
                  value={submission.teacher || "Teacher"}
                  readOnly
                />
              </div>

              <div className="form-field">
                <label>Submission ID</label>

                <input
                  type="text"
                  value={`LP-${submission.id}`}
                  readOnly
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Course / Program</label>

                <input
                  type="text"
                  value={submission.program || ""}
                  readOnly
                />
              </div>

              <div className="form-field">
                <label>Year Level / Section</label>

                <input
                  type="text"
                  value={`${submission.yearLevel || ""} • ${submission.section || ""}`}
                  readOnly
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Semester</label>

                <input
                  type="text"
                  value={submission.semester || ""}
                  readOnly
                />
              </div>

              <div className="form-field">
                <label>Academic Year</label>

                <input
                  type="text"
                  value={submission.academicYear || ""}
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Lesson Information</h2>

            <div className="form-field full-width">
              <label>Subject</label>

              <input
                type="text"
                value={submission.subject || ""}
                readOnly
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Subject Code</label>

                <input
                  type="text"
                  value={submission.subjectCode || ""}
                  readOnly
                />
              </div>

              <div className="form-field">
                <label>Lesson Date</label>

                <input
                  type="text"
                  value={submission.lessonDate || ""}
                  readOnly
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Class Duration</label>

                <input
                  type="text"
                  value={submission.duration || ""}
                  readOnly
                />
              </div>

              <div className="form-field">
                <label>Current Status</label>

                <input
                  type="text"
                  value={submission.status || ""}
                  readOnly
                />
              </div>
            </div>

            <div className="form-field full-width">
              <label>Lesson Title</label>

              <input
                type="text"
                value={submission.lessonTitle || ""}
                readOnly
              />
            </div>

            <div className="form-field full-width">
              <label>Learning Objectives</label>

              <textarea
                rows="4"
                value={submission.objectives || ""}
                readOnly
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label>Learning Outcomes / Competencies</label>

              <textarea
                rows="4"
                value={submission.outcomes || ""}
                readOnly
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label>Lesson Content</label>

              <textarea
                rows="5"
                value={submission.content || ""}
                readOnly
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label>Learning Activities / Teaching Strategies</label>

              <textarea
                rows="5"
                value={submission.activities || ""}
                readOnly
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label>Learning Materials / Resources</label>

              <textarea
                rows="4"
                value={submission.materials || ""}
                readOnly
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label>Assessment</label>

              <textarea
                rows="4"
                value={submission.assessment || ""}
                readOnly
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h2>Admin Review</h2>

            <div className="form-field full-width">
              <label htmlFor="remarks">
                Remarks
              </label>

              <textarea
                id="remarks"
                rows="5"
                placeholder="Enter your remarks or feedback..."
                value={remarks}
                onChange={(event) => setRemarks(event.target.value)}
              ></textarea>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={handleReject}
              >
                Reject
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={handleApprove}
              >
                Approve
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminReview;