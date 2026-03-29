import React from "react";

function TorrentDetails({ torrent }) {
  if (!torrent) {
    return (
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          background: "#161616",
          border: "1px solid #222",
          borderRadius: "10px",
          color: "#888"
        }}
      >
        Select a torrent to view details
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: "#161616",
        border: "1px solid #222",
        borderRadius: "10px"
      }}
    >
      <h3 style={{ marginBottom: "15px", color: "#ddd" }}>
        Torrent Details
      </h3>

      <div style={{ lineHeight: "28px", color: "#bbb" }}>
        <div><strong>Name:</strong> {torrent.name}</div>
        <div><strong>Size:</strong> {torrent.size}</div>
        <div><strong>Peers:</strong> {torrent.peers}</div>
        <div><strong>Speed:</strong> {torrent.speed}</div>
        <div><strong>Progress:</strong> {torrent.progress}%</div>
        <div><strong>Status:</strong> {torrent.status}</div>
      </div>
    </div>
  );
}

export default TorrentDetails;