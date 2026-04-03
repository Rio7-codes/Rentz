import React from "react";

function TorrentTable({ torrents, onSelect }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #171717 0%, #121212 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 20px 45px rgba(0,0,0,0.22)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 22px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: "700",
              color: "#f5f7fb",
              marginBottom: "4px",
            }}
          >
            Active Transfers
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.48)",
              letterSpacing: "0.04em",
            }}
          >
            Click a row to inspect torrent details
          </div>
        </div>

        <div
          style={{
            padding: "7px 12px",
            borderRadius: "999px",
            background: "rgba(34,245,154,0.08)",
            border: "1px solid rgba(34,245,154,0.14)",
            color: "#2af598",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          {torrents.length} Active
        </div>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            minWidth: "860px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "rgba(255,255,255,0.02)",
              }}
            >
              {["Name", "Size", "Progress", "Peers", "Speed", "Status"].map(
                (head) => (
                  <th
                    key={head}
                    style={{
                      textAlign: "left",
                      padding: "16px 22px",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "rgba(255,255,255,0.44)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {torrents.map((torrent, index) => (
              <tr
                key={index}
                onClick={() => onSelect(torrent)}
                style={{
                  cursor: "pointer",
                  borderBottom:
                    index !== torrents.length - 1
                      ? "1px solid rgba(255,255,255,0.05)"
                      : "none",
                  background:
                    index % 2 === 0
                      ? "rgba(255,255,255,0.015)"
                      : "transparent",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    index % 2 === 0
                      ? "rgba(255,255,255,0.015)"
                      : "transparent";
                }}
              >
                <td
                  style={{
                    padding: "18px 22px",
                    color: "#f5f7fb",
                    fontSize: "14px",
                    fontWeight: "600",
                    maxWidth: "280px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        background: "#2af598",
                        boxShadow: "0 0 12px rgba(42,245,152,0.55)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        display: "block",
                      }}
                    >
                      {torrent.name}
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    padding: "18px 22px",
                    color: "rgba(255,255,255,0.72)",
                    fontSize: "14px",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {torrent.size}
                </td>

                <td
                  style={{
                    padding: "18px 22px",
                    minWidth: "210px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div
                      style={{
                        height: "8px",
                        width: "100%",
                        background: "rgba(255,255,255,0.08)",
                        borderRadius: "999px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          width: `${torrent.progress}%`,
                          height: "100%",
                          borderRadius: "999px",
                          background:
                            "linear-gradient(90deg, #22f59a 0%, #14d7a0 55%, #3ea6ff 100%)",
                          boxShadow: "0 0 14px rgba(34,245,154,0.22)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>

                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "#7dffca",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {torrent.progress}%
                    </span>
                  </div>
                </td>

                <td
                  style={{
                    padding: "18px 22px",
                    color: "#ffd24d",
                    fontSize: "14px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  {torrent.peers}
                </td>

                <td
                  style={{
                    padding: "18px 22px",
                    color: "#4db3ff",
                    fontSize: "14px",
                    fontWeight: "700",
                    whiteSpace: "nowrap",
                  }}
                >
                  {torrent.speed}
                </td>

                <td
                  style={{
                    padding: "18px 22px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "7px 12px",
                      borderRadius: "999px",
                      background:
                        torrent.status === "Completed"
                          ? "rgba(62,166,255,0.10)"
                          : "rgba(34,245,154,0.08)",
                      border:
                        torrent.status === "Completed"
                          ? "1px solid rgba(62,166,255,0.18)"
                          : "1px solid rgba(34,245,154,0.14)",
                      color:
                        torrent.status === "Completed"
                          ? "#66bfff"
                          : "#2af598",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "999px",
                        background:
                          torrent.status === "Completed"
                            ? "#66bfff"
                            : "#2af598",
                        boxShadow:
                          torrent.status === "Completed"
                            ? "0 0 10px rgba(62,166,255,0.45)"
                            : "0 0 10px rgba(34,245,154,0.45)",
                      }}
                    />
                    {torrent.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TorrentTable;