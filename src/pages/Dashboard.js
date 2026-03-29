import React, { useState } from "react";
import TorrentTable from "../components/TorrentTable";
import StatsCard from "../components/StatsCard";
import TorrentDetails from "../components/TorrentDetails";
import { torrents } from "../data/torrents";

function Dashboard() {

  const [selectedTorrent, setSelectedTorrent] = useState(null);

  const activeCount = torrents.filter(
    (t) => t.status === "Downloading"
  ).length;

  const peerCount = torrents.reduce(
    (sum, t) => sum + t.peers,
    0
  );

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
          Torrent Dashboard
        </h1>

        <p
          style={{
            color: "#888",
            fontSize: "14px"
          }}
        >
          Monitor downloads, speeds, and peer connections
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "35px"
        }}
      >
        <StatsCard
          title="Active Torrents"
          value={activeCount}
        />

        <StatsCard
          title="Download Speed"
          value="4.2 MB/s"
          color="#3498db"
        />

        <StatsCard
          title="Connected Peers"
          value={peerCount}
          color="#f1c40f"
        />
      </div>

      {/* Torrent Table */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            marginBottom: "12px",
            fontSize: "15px",
            color: "#aaa",
            fontWeight: "500"
          }}
        >
          All Torrents
        </div>

        <TorrentTable
          torrents={torrents}
          onSelect={setSelectedTorrent}
        />
      </div>

      {/* Details Panel */}
      <TorrentDetails torrent={selectedTorrent} />

    </div>
  );
}

export default Dashboard;