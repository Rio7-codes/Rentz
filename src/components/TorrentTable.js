import React from "react";

const torrents = [
  {
    name: "ubuntu-22.04.iso",
    size: "3.4 GB",
    progress: 42,
    peers: 18,
    speed: "1.2 MB/s",
    status: "Downloading"
  },
  {
    name: "movie-1080p.mkv",
    size: "2.1 GB",
    progress: 67,
    peers: 12,
    speed: "850 KB/s",
    status: "Downloading"
  },
  {
    name: "linux-distro.zip",
    size: "800 MB",
    progress: 100,
    peers: 0,
    speed: "0",
    status: "Completed"
  }
];

function TorrentTable({ torrents, onSelect }) {
  return (
    <div
      style={{
        background: "#161616",
        borderRadius: "10px",
        border: "1px solid #222",
        overflow: "hidden"
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        {/* Header */}
        <thead
          style={{
            background: "#1c1c1c",
            textAlign: "left",
            fontSize: "13px",
            color: "#aaa",
            borderBottom: "1px solid #222"
          }}
        >
          <tr>
            <th style={{ padding: "14px 16px" }}>Name</th>
            <th>Size</th>
            <th>Progress</th>
            <th>Peers</th>
            <th>Speed</th>
            <th>Status</th>
          </tr>
        </thead>

        {/* Rows */}
        <tbody>
          {torrents.map((torrent, i) => (
            <tr
              key={i}
              onClick={() => onSelect && onSelect(torrent)}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1f1f1f")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "")}
              style={{
                borderTop: "1px solid #222",
                fontSize: "14px",
                cursor: "pointer",
                transition: "background 0.15s ease"
              }}
            >
              <td style={{ padding: "14px 16px", color: "#ddd" }}>
                {torrent.name}
              </td>

              <td style={{ color: "#aaa" }}>{torrent.size}</td>

              {/* Progress */}
              <td style={{ width: "220px" }}>
                <div
                  style={{
                    background: "#2a2a2a",
                    height: "8px",
                    borderRadius: "6px",
                    overflow: "hidden",
                    marginBottom: "4px"
                  }}
                >
                  <div
                    style={{
                      width: `${torrent.progress}%`,
                      background: "#00ff9c",
                      height: "100%",
                      transition: "width 0.3s ease"
                    }}
                  />
                </div>

                <span style={{ fontSize: "12px", color: "#aaa" }}>
                  {torrent.progress}%
                </span>
              </td>

              <td style={{ color: "#ccc" }}>{torrent.peers}</td>

              <td style={{ color: "#3498db" }}>{torrent.speed}</td>

              <td>
                <span
                  style={{
                    background:
                      torrent.status === "Completed"
                        ? "#1f7a4f"
                        : "#2c3e50",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px"
                  }}
                >
                  {torrent.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TorrentTable;