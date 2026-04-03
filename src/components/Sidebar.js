import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginModel from "./LoginModel";
import logo from "../assets/RentzLogo.jpg";

const linkBase = {
  display: "flex",
  alignItems: "center",
  padding: "12px 14px",
  borderRadius: "10px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.2s ease"
};

const navStyle = ({ isActive }) => ({
  ...linkBase,
  background: isActive ? "#171717" : "transparent",
  color: isActive ? "#00ff9c" : "#cfcfcf",
  borderLeft: isActive ? "3px solid #00ff9c" : "3px solid transparent",
  paddingLeft: "11px"
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
        width: "255px",
        height: "100vh",
        background: "#0b0b0b",
        borderRight: "1px solid #1f1f1f",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        padding: "22px 18px",
        boxSizing: "border-box"
      }}
    >
      {/* LOGO + SUBTEXT */}
      <div
        style={{
          marginTop: "12px",
          marginBottom: "28px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: "6px"
        }}
        onClick={() => {
          if (window.location.pathname === "/") {
            window.location.reload();
          } else {
            navigate("/");
          }
        }}
      >
        <img
          src={logo}
          alt="Rentz logo"
          style={{
            width: "103px",
            height: "auto",
            objectFit: "contain",
            opacity: "0.9"
          }}
        />

        <div
          style={{
            fontSize: "8.3px",
            color: "#6f6f6f",
            marginTop: "6px",
            letterSpacing: "1.6px",
            fontWeight: "500"
          }}
        >
          BITTORRENT CLIENT
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {["/", "/downloading", "/completed"].map((path, i) => {
          const labels = ["Dashboard", "Downloading", "Completed"];
          return (
            <NavLink
              key={path}
              to={path}
              style={navStyle}
              onMouseEnter={(e) => {
                if (!e.currentTarget.classList.contains("active")) {
                  e.currentTarget.style.background = "#151515";
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

      <div style={{ marginTop: "auto", paddingTop: "18px" }}>
        {!user ? (
          <div
            onClick={() => setShowLogin(true)}
            style={{
              padding: "13px",
              textAlign: "center",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: "600",
              background: "#151515",
              color: "#00ff9c",
              border: "1px solid #232323",
              transition: "all 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1a1a1a";
              e.currentTarget.style.borderColor = "#00ff9c";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#151515";
              e.currentTarget.style.borderColor = "#232323";
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
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  background: "#00ff9c",
                  color: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "13px"
                }}
              >
                {user.charAt(0).toUpperCase()}
              </div>

              <span style={{ color: "#ddd", fontSize: "13px" }}>{user}</span>
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