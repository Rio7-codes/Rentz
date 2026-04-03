import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function LoginModel({ onClose, setUser }) {
  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const getUsers = () => JSON.parse(localStorage.getItem("users")) || {};

  const passwordChecks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*]/.test(password),
  };

  const isPasswordValid = Object.values(passwordChecks).every(Boolean);
  const confirmMatches =
    confirmPassword.length > 0 && password === confirmPassword;

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError("All fields required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isPasswordValid) {
      setError("Password does not meet requirements");
      return;
    }

    const users = getUsers();

    if (users[username]) {
      setError("User already exists");
      return;
    }

    users[username] = password;
    localStorage.setItem("users", JSON.stringify(users));

    setError("");
    setMode("login");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleLogin = () => {
    const users = getUsers();

    if (!users[username]) {
      setError("User not found");
      return;
    }

    if (users[username] !== password) {
      setError("Incorrect password");
      return;
    }

    localStorage.setItem("username", username);
    setUser(username);
    onClose();
  };

  const primaryButtonStyle = {
    width: "100%",
    marginTop: "16px",
    padding: "13px 18px",
    borderRadius: "14px",
    border: "1px solid rgba(34,245,154,0.18)",
    background: "linear-gradient(135deg, #22f59a 0%, #11c97f 100%)",
    color: "#07140d",
    fontWeight: "800",
    fontSize: "15px",
    letterSpacing: "0.02em",
    cursor: "pointer",
    boxShadow: "0 14px 30px rgba(34,245,154,0.18)",
    transition: "all 0.22s ease",
  };

  const ghostButtonStyle = {
    width: "100%",
    marginTop: "10px",
    padding: "12px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.10)",
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.88)",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.22s ease",
  };

  const bottomGlowText = {
    textShadow:
      "0 0 10px rgba(255,255,255,0.12), 0 0 18px rgba(34,245,154,0.08)",
    letterSpacing: "0.01em",
  };

  const getInputStyle = (type = "normal") => {
    let border = "1px solid rgba(255,255,255,0.08)";
    let boxShadow = "none";

    if (type === "password-invalid" || type === "confirm-invalid") {
      border = "1px solid rgba(255,120,120,0.22)";
      boxShadow = "0 0 0 3px rgba(255,90,90,0.05)";
    }

    if (type === "password-valid" || type === "confirm-valid") {
      border = "1px solid rgba(34,245,154,0.18)";
      boxShadow = "0 0 0 3px rgba(34,245,154,0.05)";
    }

    return {
      width: "100%",
      height: "56px",
      padding: "0 58px 0 14px",
      marginTop: "10px",
      borderRadius: "12px",
      border,
      background: "#0d0d0d",
      color: "#ffffff",
      outline: "none",
      fontSize: "14px",
      boxSizing: "border-box",
      transition: "all 0.2s ease",
      boxShadow,
    };
  };

  const toggleButtonStyle = {
    position: "absolute",
    top: 0,
    right: "10px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "none",
    color: "rgba(255,255,255,0.50)",
    cursor: "pointer",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "0.05em",
    padding: "0 8px",
  };

  const modalUI = (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.78)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "18px",
        zIndex: 999999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "linear-gradient(180deg, #171717 0%, #121212 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "22px",
          padding: "24px",
          color: "white",
          boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
          transform: visible
            ? "translateY(0px) scale(1)"
            : "translateY(20px) scale(0.98)",
          opacity: visible ? 1 : 0,
          transition: "all 0.28s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40px",
            right: "-20px",
            width: "150px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(34,245,154,0.10), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 12px",
              borderRadius: "999px",
              background: "rgba(0, 255, 136, 0.08)",
              border: "1px solid rgba(0, 255, 136, 0.16)",
              color: "#22f59a",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            ● {mode === "login" ? "Login" : "Sign In"}
          </div>

          <h2
            style={{
              margin: "0 0 8px 0",
              fontSize: "32px",
              fontWeight: "800",
              lineHeight: 1.08,
              letterSpacing: "-0.8px",
              color: "#f5f7fb",
            }}
          >
            {mode === "login" ? "Welcome back" : "Create account"}
          </h2>

          <p
            style={{
              margin: "0 0 16px 0",
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.56)",
            }}
          >
            {mode === "login"
              ? "Log in to continue using Rentz."
              : "Sign in to create your Rentz account."}
          </p>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={getInputStyle()}
          />

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (error) setError("");
              }}
              style={getInputStyle(
                mode === "register"
                  ? password.length === 0
                    ? "normal"
                    : isPasswordValid
                    ? "password-valid"
                    : "password-invalid"
                  : "normal"
              )}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={toggleButtonStyle}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          {mode === "register" && (
            <div style={{ position: "relative" }}>
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  if (error) setError("");
                }}
                style={getInputStyle(
                  confirmPassword.length === 0
                    ? "normal"
                    : confirmMatches
                    ? "confirm-valid"
                    : "confirm-invalid"
                )}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                style={toggleButtonStyle}
              >
                {showConfirm ? "HIDE" : "SHOW"}
              </button>
            </div>
          )}

          {mode === "register" && confirmPassword.length > 0 && (
            <div
              style={{
                marginTop: "9px",
                padding: "10px 12px",
                borderRadius: "12px",
                background: confirmMatches
                  ? "rgba(34,245,154,0.07)"
                  : "rgba(255,76,76,0.08)",
                border: confirmMatches
                  ? "1px solid rgba(34,245,154,0.14)"
                  : "1px solid rgba(255,76,76,0.16)",
                color: confirmMatches ? "#2af598" : "#ff7c7c",
                fontSize: "12.5px",
                fontWeight: "600",
              }}
            >
              {confirmMatches ? "Passwords match" : "Passwords do not match"}
            </div>
          )}

          {mode === "register" && (
            <div
              style={{
                marginTop: "12px",
                padding: "11px 13px",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.03)",
                border:
                  password.length === 0
                    ? "1px solid rgba(255,255,255,0.06)"
                    : isPasswordValid
                    ? "1px solid rgba(34,245,154,0.14)"
                    : "1px solid rgba(255,120,120,0.14)",
                color:
                  password.length === 0
                    ? "rgba(255,255,255,0.54)"
                    : isPasswordValid
                    ? "#7dffca"
                    : "#ff9a9a",
                fontSize: "12px",
                lineHeight: 1.55,
                textShadow:
                  password.length === 0
                    ? "0 0 8px rgba(255,255,255,0.06)"
                    : isPasswordValid
                    ? "0 0 10px rgba(34,245,154,0.28), 0 0 22px rgba(34,245,154,0.10)"
                    : "0 0 10px rgba(255,90,90,0.22), 0 0 20px rgba(255,90,90,0.08)",
                transition: "all 0.22s ease",
              }}
            >
              Password must be at least 8 characters and include uppercase,
              lowercase, number, and special character.
            </div>
          )}

          {error && (
            <div
              style={{
                marginTop: "12px",
                padding: "11px 13px",
                borderRadius: "12px",
                background: "rgba(255, 76, 76, 0.08)",
                border: "1px solid rgba(255, 76, 76, 0.16)",
                color: "#ff7c7c",
                fontSize: "12.5px",
                fontWeight: "600",
              }}
            >
              {error}
            </div>
          )}

          {mode === "login" ? (
            <>
              <button
                onClick={handleLogin}
                style={primaryButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 36px rgba(34,245,154,0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(34,245,154,0.18)";
                }}
              >
                Login to Rentz
              </button>

              <button
                onClick={() => {
                  setMode("register");
                  setError("");
                  setUsername("");
                  setPassword("");
                  setConfirmPassword("");
                }}
                style={ghostButtonStyle}
              >
                <span style={bottomGlowText}>Need an account? Sign In</span>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRegister}
                style={primaryButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 36px rgba(34,245,154,0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(34,245,154,0.18)";
                }}
              >
                Create Account
              </button>

              <button
                onClick={() => {
                  setMode("login");
                  setError("");
                  setUsername("");
                  setPassword("");
                  setConfirmPassword("");
                }}
                style={ghostButtonStyle}
              >
                <span style={bottomGlowText}>Back to Login</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalUI, document.body);
}