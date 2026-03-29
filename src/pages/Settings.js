import React from "react";

function Settings() {
  return (
    <div>

      {/* Page Header */}
      <div style={{ marginBottom: "35px" }}>
        <h1
          style={{
            color: "#e6e6e6",
            fontSize: "28px",
            fontWeight: "600",
            marginBottom: "6px"
          }}
        >
          Client Settings
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "14px"
          }}
        >
          Configure torrent client preferences
        </p>
      </div>

      {/* Settings Panel */}
      <div
        style={{
          background: "#161616",
          border: "1px solid #222",
          borderRadius: "10px",
          padding: "25px",
          maxWidth: "600px"
        }}
      >

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "13px" }}>
            Download Location
          </label>

          <input
            type="text"
            placeholder="/downloads"
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "10px",
              background: "#0f0f0f",
              border: "1px solid #222",
              borderRadius: "6px",
              color: "#ddd"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ color: "#aaa", fontSize: "13px" }}>
            Max Download Speed (MB/s)
          </label>

          <input
            type="number"
            placeholder="Unlimited"
            style={{
              marginTop: "6px",
              width: "100%",
              padding: "10px",
              background: "#0f0f0f",
              border: "1px solid #222",
              borderRadius: "6px",
              color: "#ddd"
            }}
          />
        </div>

        <button
          style={{
            background: "#00ff9c",
            border: "none",
            padding: "10px 16px",
            borderRadius: "6px",
            fontWeight: "500",
            cursor: "pointer"
          }}
        >
          Save Settings
        </button>

      </div>

    </div>
  );
}

export default Settings;