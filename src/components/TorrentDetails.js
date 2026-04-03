import React from "react";

function TorrentDetails({ torrent }) {
  if (!torrent) {
    return (
      <div
        style={{
          background: "linear-gradient(180deg, #171717 0%, #131313 100%)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "22px",
          padding: "28px",
          boxShadow: "0 16px 34px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 12px",
            borderRadius: "999px",
            background: "rgba(0,255,136,0.08)",
            border: "1px solid rgba(0,255,136,0.14)",
            color: "#22f59a",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          ● Torrent Details
        </div>

        <h2
          style={{
            margin: "0 0 10px 0",
            fontSize: "30px",
            fontWeight: "800",
            color: "#f5f7fb",
            letterSpacing: "-0.8px",
          }}
        >
          No torrent selected
        </h2>

        <p
          style={{
            margin: 0,
            color: "rgba(255,255,255,0.58)",
            fontSize: "15px",
            lineHeight: 1.65,
            maxWidth: "580px",
          }}
        >
          Select a torrent from the table above to view its transfer stats,
          progress, peers, and live download details.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top right, rgba(0,255,136,0.08), transparent 28%), linear-gradient(180deg, #171717 0%, #131313 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "22px",
        padding: "28px",
        boxShadow: "0 18px 40px rgba(0,0,0,0.20)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-20px",
          width: "140px",
          height: "140px",
          background:
            "radial-gradient(circle, rgba(0,255,136,0.10), transparent 72%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "16px",
            flexWrap: "wrap",
            marginBottom: "22px",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(0,255,136,0.08)",
                border: "1px solid rgba(0,255,136,0.14)",
                color: "#22f59a",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              ● Torrent Details
            </div>

            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "30px",
                fontWeight: "800",
                color: "#f5f7fb",
                letterSpacing: "-0.8px",
                lineHeight: 1.1,
              }}
            >
              {torrent.name}
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: "14px",
                color: "rgba(255,255,255,0.52)",
                lineHeight: 1.6,
              }}
            >
              Live transfer summary and file status overview.
            </p>
          </div>

          <div
            style={{
              padding: "10px 14px",
              borderRadius: "14px",
              background:
                torrent.status === "Completed"
                  ? "rgba(255, 210, 51, 0.10)"
                  : "rgba(34, 245, 154, 0.10)",
              border:
                torrent.status === "Completed"
                  ? "1px solid rgba(255, 210, 51, 0.20)"
                  : "1px solid rgba(34, 245, 154, 0.20)",
              color: torrent.status === "Completed" ? "#ffd233" : "#22f59a",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.04em",
            }}
          >
            {torrent.status}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            { label: "Size", value: torrent.size, color: "#f5f7fb" },
            { label: "Peers", value: torrent.peers, color: "#22f59a" },
            { label: "Speed", value: torrent.speed, color: "#4aa8ff" },
            { label: "Progress", value: `${torrent.progress}%`, color: "#ffd233" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "18px",
                padding: "18px 18px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.10em",
                  color: "rgba(255,255,255,0.42)",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: item.color,
                  lineHeight: 1,
                  letterSpacing: "-0.6px",
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "18px",
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "18px",
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#d8dbe2",
                letterSpacing: "0.02em",
              }}
            >
              Transfer Progress
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.58)",
                fontWeight: "600",
              }}
            >
              {torrent.progress}%
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "10px",
              background: "rgba(255,255,255,0.06)",
              borderRadius: "999px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${torrent.progress}%`,
                height: "100%",
                borderRadius: "999px",
                background:
                  torrent.status === "Completed"
                    ? "linear-gradient(90deg, #ffd233 0%, #ffdf70 100%)"
                    : "linear-gradient(90deg, #22f59a 0%, #57ffaa 100%)",
                boxShadow:
                  torrent.status === "Completed"
                    ? "0 0 14px rgba(255,210,51,0.22)"
                    : "0 0 14px rgba(34,245,154,0.22)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TorrentDetails;