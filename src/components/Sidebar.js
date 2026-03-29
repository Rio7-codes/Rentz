import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";
import logo from "../assets/Rentz Logo.jpeg";

const linkBase = {
  display: "flex",
  alignItems: "center",
  padding: "12px 14px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.2s ease"
};

const navStyle = ({ isActive }) => ({
  ...linkBase,
  background: isActive ? "#1a1a1a" : "transparent",
  color: isActive ? "#00ff9c" : "#cfcfcf",
  borderLeft: isActive ? "3px solid #00ff9c" : "3px solid transparent",
  paddingLeft: "11px",
  transition: "all 0.15s cubic-bezier(0.4, 0, 0.2, 1)"
});

function Sidebar() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("username");
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#0b0b0b",
        borderRight: "1px solid #1f1f1f",
        position: "fixed",
        zIndex: 1,
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        padding: "28px 22px",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{ marginBottom: "40px", cursor: "pointer" }}
        onClick={() => {
          if (window.location.pathname === "/") {
            window.location.reload();
          } else {
            navigate("/");
          }
        }}
      >
        <img src={logo} alt="logo" style={{ width: "130px" }} />
        <div style={{ paddingLeft: "1px", fontSize: "11px", color: "#6b6b6b", marginTop: "1px" }}>
          BITTORRENT CLIENT
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {["/", "/downloading", "/completed", "/settings"].map((path, i) => {
          const labels = ["Dashboard", "Downloading", "Completed", "Settings"];
          return (
            <NavLink
              key={path}
              to={path}
              style={navStyle}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("active")) {
                  e.currentTarget.style.background = "#161616";
                  e.currentTarget.style.color = "#00ff9c";
                  e.currentTarget.style.transform = "translateX(4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.classList.contains("active")) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#cfcfcf";
                  e.currentTarget.style.transform = "translateX(0)";
                }
              }}
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </div>

      <div style={{ marginTop: "auto" }}>
        {!user ? (
          <div
            onClick={() => setShowLogin(true)}
            style={{
              padding: "13px",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "500",
              background: "#151515",
              color: "#00ff9c",
              border: "1px solid #1f1f1f",
              boxShadow: "0 0 0 rgba(0,0,0,0)",
              transition: "all 0.18s cubic-bezier(0.4, 0, 0.2, 1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#181818";
              e.currentTarget.style.borderColor = "#00ff9c";
              e.currentTarget.style.boxShadow = `
                0 0 8px rgba(0,255,156,0.25),
                0 0 16px rgba(0,255,156,0.15),
                0 4px 12px rgba(0,0,0,0.4)
              `;
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#151515";
              e.currentTarget.style.borderColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `
                0 0 6px rgba(0,255,156,0.2),
                inset 0 2px 6px rgba(0,0,0,0.6)
              `;
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = `
                0 0 8px rgba(0,255,156,0.25),
                0 0 16px rgba(0,255,156,0.15),
                0 4px 12px rgba(0,0,0,0.4)
              `;
            }}
          >
            Login to Rentz
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#111",
              padding: "10px 12px",
              borderRadius: "10px",
              border: "1px solid #1f1f1f"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#00ff9c",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "13px"
                }}
              >
                {user.charAt(0).toUpperCase()}
              </div>

              <span style={{ color: "#ddd", fontSize: "13px" }}>
                {user}
              </span>
            </div>

            <span
              onClick={() => {
                localStorage.removeItem("username");
                setUser(null);
              }}
              style={{
                fontSize: "11px",
                color: "#ff4d4d",
                cursor: "pointer"
              }}
            >
              Logout
            </span>
          </div>
        )}
      </div>

      {showLogin && (
        <LoginModel onClose={() => setShowLogin(false)} setUser={setUser} />
      )}
    </div>
  );
}

export default Sidebar;