import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>Forgot Password?</h1>
          <p>
            Enter your email address and we will help you reset your password.
          </p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>

          <button type="submit" className="login-button">
            Send Reset Link
          </button>
        </form>

        <div className="forgot-password" style={{ marginTop: "20px" }}>
          <Link to="/login">← Back to Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;