import React from "react";

function StatsCard({ title, value, color }) {
  return (
    <div
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      style={{
        background: "#161616",
        border: "1px solid #222",
        borderRadius: "10px",
        padding: "22px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
        transition: "transform 0.15s ease",
        position: "relative"
      }}
    >
      {/* Accent line */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "4px",
          height: "100%",
          background: color || "#00ff9c",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px"
        }}
      />

      <div
        style={{
          fontSize: "13px",
          color: "#888",
          marginBottom: "8px",
          letterSpacing: "0.3px"
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "26px",
          fontWeight: "600",
          color: color || "#00ff9c"
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default StatsCard;