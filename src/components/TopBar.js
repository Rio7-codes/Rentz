import React from "react";

function TopBar() {
  return (
    <div
      style={{
        height: "70px",
        borderBottom: "1px solid #1f1f1f",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        background: "#111"
      }}
    >
      {/* Page Title */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "600",
          color: "#e6e6e6"
        }}
      >
        Dashboard
      </div>

      {/* Search Bar */}
      <div
        style={{
          flex: 1,
          maxWidth: "420px",
          marginLeft: "40px"
        }}
      >
        <input
          placeholder="Search torrents..."
          style={{
            width: "100%",
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #2a2a2a",
            background: "#0f0f0f",
            color: "#ddd",
            fontSize: "14px",
            outline: "none"
          }}
        />
      </div>

      {/* Right Side Stats */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginLeft: "40px"
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "#aaa"
          }}
        >
          Active: <span style={{ color: "#00ff9c" }}>3</span>
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#aaa"
          }}
        >
          Speed: <span style={{ color: "#3498db" }}>4.2 MB/s</span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;