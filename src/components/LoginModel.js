import { hasPointerEvents } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

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
    setTimeout(() => setVisible(true), 10);
  }, []);

  const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || {};
  };

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError("All fields required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const isValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /[a-z]/.test(password) &&
      /[0-9]/.test(password) &&
      /[!@#$%^&*]/.test(password);

    if (!isValid) {
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

  return (
    <div onClick={onClose} style={overlayStyle(visible)}>
      <div onClick={(e) => e.stopPropagation()} style={modalStyle(visible)}>

        <div style={titleStyle}>
          {mode === "login" ? "Login" : "Create Account"}
        </div>

        <div style={fieldWrapper}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={fieldWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <span onClick={() => setShowPassword(!showPassword)} style={eyeStyle}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {mode === "register" && (
          <div style={fieldWrapper}>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
            <span onClick={() => setShowConfirm(!showConfirm)} style={eyeStyle}>
              {showConfirm ? "Hide" : "Show"}
            </span>
          </div>
        )}

        {mode === "register" && (
          <div style={rulesContainer}>
            <Rule text="At least 8 characters" valid={password.length >= 8} />
            <Rule text="1 uppercase letter" valid={/[A-Z]/.test(password)} />
            <Rule text="1 lowercase letter" valid={/[a-z]/.test(password)} />
            <Rule text="1 number" valid={/[0-9]/.test(password)} />
            <Rule text="1 special character" valid={/[!@#$%^&*]/.test(password)} />
          </div>
        )}

        {error && <div style={errorStyle}>{error}</div>}

        <button
          onClick={mode === "login" ? handleLogin : handleRegister}
          style={buttonStyle}
        >
          {mode === "login" ? "Login" : "Register"}
        </button>

        <div style={toggleStyle}>
          {mode === "login" ? "New user?" : "Already have an account?"}{" "}
          <span
            onClick={() => {
              setMode(mode === "login" ? "register" : "login");
              setError("");
            }}
            style={{ color: "#00ff9c", cursor: "pointer" }}
          >
            {mode === "login" ? "Create account" : "Login"}
          </span>
        </div>

        <div onClick={onClose} style={cancelStyle}>
          Cancel
        </div>
      </div>
    </div>
  );
}

function Rule({ text, valid }) {
  return (
    <div style={ruleRow}>
      <div style={{
        ...bulletStyle,
        background: valid ? "#00ff9c" : "#444"
      }} />
      <span style={{ flex: 1 }}>{text}</span>
    </div>
  );
}

const overlayStyle = (visible) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.65)",
  display: "flex",
  pointerEvents: "auto",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  opacity: visible ? 1 : 0,
  transition: "0.2s"
});

const modalStyle = (visible) => ({
  background: "#111",
  padding: "30px",
  borderRadius: "14px",
  width: "340px",
  border: "1px solid #1f1f1f",
  transform: visible ? "scale(1)" : "scale(0.95)",
  transition: "0.2s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  zIndex: 999999
});

const ruleRow = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  fontSize: "12px",
  color: "#aaa"
};

const bulletStyle = {
  width: "6px",
  height: "6px",
  minWidth: "6px",
  borderRadius: "50%"
};

const titleStyle = {
  fontSize: "22px",
  fontWeight: "600",
  color: "#fff",
  marginBottom: "20px",
  textAlign: "center"
};

const formWidth = {
  width: "80%",
  maxWidth: "260px"
};

const fieldWrapper = {
  ...formWidth,
  position: "relative",
  marginBottom: "12px"
};

const inputStyle = {
  width: "100%",
  padding: "10px 45px 10px 10px",
  borderRadius: "6px",
  background: "#1a1a1a",
  border: "1px solid #2a2a2a",
  color: "#fff",
  fontSize: "13px",
  boxSizing: "border-box"
};

const eyeStyle = {
  position: "absolute",
  right: "12px",
  top: "50%",
  transform: "translateY(-50%)",
  fontSize: "11px",
  color: "#00ff9c",
  cursor: "pointer",
  userSelect: "none"
};

const rulesContainer = {
  ...formWidth,
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "5px"
};

const errorStyle = {
  color: "#ff4d4d",
  fontSize: "12px",
  marginBottom: "10px"
};

const buttonStyle = {
  ...formWidth,
  padding: "11px",
  boxSizing: "border-box",
  borderRadius: "8px",
  border: "none",
  background: "linear-gradient(135deg, #00ff9c, #00c3ff)",
  color: "#000",
  fontWeight: "600",
  cursor: "pointer",
  marginTop: "6px"
};

const toggleStyle = {
  marginTop: "12px",
  fontSize: "12px",
  color: "#888",
  textAlign: "center"
};

const cancelStyle = {
  marginTop: "10px",
  fontSize: "12px",
  color: "#666",
  cursor: "pointer"
};