import React from "react";

function StatsCard({ title, value, color }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "22px",
        padding: "24px",
        minHeight: "138px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.20)",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-20px",
          width: "120px",
          height: "120px",
          background: `radial-gradient(circle, ${color}22 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "18px",
          left: "18px",
          width: "10px",
          height: "10px",
          borderRadius: "999px",
          background: color,
          boxShadow: `0 0 14px ${color}66`,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.52)",
            fontWeight: "500",
            marginBottom: "18px",
            paddingLeft: "18px",
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "24px",
            fontWeight: "800",
            color: color,
            lineHeight: 1,
            letterSpacing: "-0.6px",
            paddingLeft: "18px",
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;