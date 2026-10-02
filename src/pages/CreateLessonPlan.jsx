import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateLessonPlan() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    college: "",
    program: "",
    yearLevel: "",
    section: "",
    semester: "",
    academicYear: "",
    subject: "",
    subjectCode: "",
    lessonDate: "",
    duration: "",
    lessonTitle: "",
    objectives: "",
    outcomes: "",
    content: "",
    activities: "",
    materials: "",
    assessment: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [id]: value
    }));
  };

  const saveLessonPlan = (status) => {
    if (
      !formData.program ||
      !formData.yearLevel ||
      !formData.section ||
      !formData.semester ||
      !formData.academicYear ||
      !formData.subject ||
      !formData.subjectCode ||
      !formData.lessonDate ||
      !formData.duration ||
      !formData.lessonTitle
    ) {
      setMessage("Please complete all required fields before saving.");
      return;
    }

    const existingPlans = JSON.parse(
      localStorage.getItem("lessonPlans") || "[]"
    );

    const newLessonPlan = {
      id: Date.now(),
      ...formData,
      teacher: "Teacher",
      status,
      submittedAt: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
      })
    };

    localStorage.setItem(
      "lessonPlans",
      JSON.stringify([...existingPlans, newLessonPlan])
    );

    if (status === "Draft") {
      setMessage("Lesson plan saved as draft.");
    } else {
      setMessage("Lesson plan submitted successfully.");
    }

    setTimeout(() => {
      navigate("/teacher/lesson-plans");
    }, 1000);
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

            <Link
              to="/teacher/create"
              className="active"
            >
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
            <h1>Create Lesson Plan</h1>

            <p>
              Create and submit a lesson plan for your college class.
            </p>
          </div>

          {message && (
            <div
              style={{
                background: message.includes("successfully") || message.includes("draft")
                  ? "#f0fdf4"
                  : "#fef2f2",
                color: message.includes("successfully") || message.includes("draft")
                  ? "#166534"
                  : "#dc2626",
                padding: "12px 16px",
                borderRadius: "8px",
                marginBottom: "20px"
              }}
            >
              {message}
            </div>
          )}

          <div className="form-section">
            <h2>College Information</h2>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="college">
                  College / Department
                </label>

                <input
                  type="text"
                  id="college"
                  placeholder="e.g. College of Information Technology"
                  value={formData.college}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="program">
                  Course / Program
                </label>

                <select
                  id="program"
                  value={formData.program}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Course / Program
                  </option>
                  <option value="BSIT">BSIT</option>
                  <option value="BSCRIM">BSCRIM</option>
                  <option value="BEED">BEED</option>
                  <option value="BSOAD">BSOAD</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="yearLevel">
                  Year Level
                </label>

                <select
                  id="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Year Level
                  </option>
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="section">
                  Section
                </label>

                <input
                  type="text"
                  id="section"
                  placeholder="e.g. BSIT 3-A"
                  value={formData.section}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="semester">
                  Semester
                </label>

                <select
                  id="semester"
                  value={formData.semester}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Semester
                  </option>
                  <option>1st Semester</option>
                  <option>2nd Semester</option>
                  <option>Summer</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="academicYear">
                  Academic Year
                </label>

                <input
                  type="text"
                  id="academicYear"
                  placeholder="e.g. 2026-2027"
                  value={formData.academicYear}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Subject Information</h2>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  placeholder="e.g. Systems Integration and Architecture"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="subjectCode">
                  Subject Code
                </label>

                <input
                  type="text"
                  id="subjectCode"
                  placeholder="e.g. IT 301"
                  value={formData.subjectCode}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="lessonDate">
                  Lesson Date
                </label>

                <input
                  type="date"
                  id="lessonDate"
                  value={formData.lessonDate}
                  onChange={handleChange}
                />
              </div>

              <div className="form-field">
                <label htmlFor="duration">
                  Class Duration
                </label>

                <input
                  type="text"
                  id="duration"
                  placeholder="e.g. 1 hour and 30 minutes"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Lesson Details</h2>

            <div className="form-field full-width">
              <label htmlFor="lessonTitle">
                Lesson Title
              </label>

              <input
                type="text"
                id="lessonTitle"
                placeholder="Enter lesson title"
                value={formData.lessonTitle}
                onChange={handleChange}
              />
            </div>

            <div className="form-field full-width">
              <label htmlFor="objectives">
                Learning Objectives
              </label>

              <textarea
                id="objectives"
                rows="4"
                placeholder="Enter the learning objectives..."
                value={formData.objectives}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label htmlFor="outcomes">
                Learning Outcomes / Competencies
              </label>

              <textarea
                id="outcomes"
                rows="4"
                placeholder="Enter the expected learning outcomes..."
                value={formData.outcomes}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label htmlFor="content">
                Lesson Content
              </label>

              <textarea
                id="content"
                rows="5"
                placeholder="Enter the lesson content..."
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label htmlFor="activities">
                Learning Activities / Teaching Strategies
              </label>

              <textarea
                id="activities"
                rows="5"
                placeholder="Describe the learning activities and teaching strategies..."
                value={formData.activities}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label htmlFor="materials">
                Learning Materials / Resources
              </label>

              <textarea
                id="materials"
                rows="4"
                placeholder="List books, websites, presentations, or other resources..."
                value={formData.materials}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-field full-width">
              <label htmlFor="assessment">
                Assessment
              </label>

              <textarea
                id="assessment"
                rows="4"
                placeholder="Describe how students will be assessed..."
                value={formData.assessment}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary-button"
                onClick={() => saveLessonPlan("Draft")}
              >
                Save Draft
              </button>

              <button
                type="button"
                className="primary-button"
                onClick={() => saveLessonPlan("Pending")}
              >
                Submit Lesson Plan
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateLessonPlan;