import React, { useState } from "react";
import { torrents } from "../data/torrents";

function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const activeCount = torrents.filter((t) => t.status === "Downloading").length;
  const peerCount = torrents.reduce((sum, t) => sum + t.peers, 0);
  const totalSpeed = "4.2 MB/s";

  const handleSubmit = () => {
    if (!inputValue.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 2500);
    }, 1200);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  const isMagnet = inputValue.startsWith("magnet:");
  const isURL =
    !isMagnet &&
    (inputValue.startsWith("http://") || inputValue.startsWith("https://"));
  const hasInput = inputValue.trim().length > 0;

  return (
    <div
      style={{
        padding: "34px",
        backgroundColor: "#111111",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "26px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
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
                background: "rgba(0, 255, 136, 0.08)",
                border: "1px solid rgba(0, 255, 136, 0.16)",
                color: "#22f59a",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              ● Live Dashboard
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "42px",
                fontWeight: "800",
                lineHeight: 1.08,
                letterSpacing: "-1.1px",
                color: "#f5f7fb",
              }}
            >
              Torrent Dashboard
            </h1>

            <p
              style={{
                margin: "12px 0 0 0",
                fontSize: "15px",
                color: "rgba(255,255,255,0.58)",
                lineHeight: 1.65,
                maxWidth: "580px",
              }}
            >
              Monitor downloads, speeds, and peer connections from a cleaner,
              more professional control surface.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "6px",
            }}
          >
            {[
              { label: "Active", value: activeCount, color: "#22f59a" },
              { label: "Speed", value: totalSpeed, color: "#3ea6ff" },
              { label: "Peers", value: peerCount, color: "#ffd233" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  position: "relative",
                  minWidth: "122px",
                  padding: "14px 16px",
                  borderRadius: "16px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 28px rgba(0,0,0,0.22)",
                  transform: "translateY(0)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.3), 0 0 20px ${item.color}44`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 28px rgba(0,0,0,0.22)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: item.color,
                    boxShadow: `0 0 12px ${item.color}88`,
                    transition: "all 0.2s ease",
                  }}
                />
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.46)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontWeight: "700",
                    marginBottom: "6px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "24px",
                    fontWeight: "800",
                    color: item.color,
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(circle at top right, rgba(34,245,154,0.10), transparent 32%), linear-gradient(180deg, #171717 0%, #121212 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "28px",
            boxShadow: "0 18px 40px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-45px",
              right: "-18px",
              width: "190px",
              height: "190px",
              background:
                "radial-gradient(circle, rgba(0,255,140,0.12), transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#22f59a",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "14px",
              }}
            >
              <span style={{ fontSize: "12px" }}>●</span>
              Add New Torrent
            </div>

            <h2
              style={{
                fontSize: "34px",
                color: "#f5f7fa",
                margin: "0 0 8px 0",
                fontWeight: "760",
                letterSpacing: "-0.8px",
                lineHeight: 1.15,
              }}
            >
              Paste a link or magnet URI
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(255,255,255,0.56)",
                margin: "0 0 22px 0",
                maxWidth: "760px",
                lineHeight: 1.6,
              }}
            >
              Supports magnet links, torrent URLs, and direct torrent file links.
            </p>

            <div
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  flex: 1,
                  minWidth: "280px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "0 18px",
                  height: "56px",
                  borderRadius: "16px",
                  border: isFocused
                    ? "1px solid rgba(34,245,154,0.45)"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: "#0d0d0d",
                  boxShadow: isFocused
                    ? "0 0 0 4px rgba(34,245,154,0.08)"
                    : "none",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    color: hasInput
                      ? isMagnet
                        ? "#22f59a"
                        : isURL
                        ? "#3ea6ff"
                        : "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.35)",
                    fontSize: "15px",
                    transition: "0.2s ease",
                  }}
                >
                  ⬆
                </span>

                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={handleKeyDown}
                  placeholder="magnet:?xt=urn:btih:... or https://example.com/file.torrent"
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    color: "white",
                    fontSize: "15px",
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={!hasInput || isSubmitting}
                style={{
                  height: "56px",
                  padding: "0 22px",
                  borderRadius: "16px",
                  border: "1px solid transparent",
                  background:
                    !hasInput || isSubmitting
                      ? "rgba(255,255,255,0.06)"
                      : "linear-gradient(135deg, #22f59a 0%, #11c97f 100%)",
                  color:
                    !hasInput || isSubmitting
                      ? "rgba(255,255,255,0.28)"
                      : "#07140d",
                  fontWeight: "800",
                  fontSize: "15px",
                  cursor:
                    !hasInput || isSubmitting ? "not-allowed" : "pointer",
                  minWidth: "168px",
                  boxShadow:
                    !hasInput || isSubmitting
                      ? "none"
                      : "0 14px 30px rgba(34,245,154,0.20)",
                  transition: "all 0.2s ease",
                }}
              >
                {isSubmitting ? "Adding..." : submitted ? "Added ✓" : "+ Add Torrent"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;