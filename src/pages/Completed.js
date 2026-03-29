import React, { useState } from "react";
import TorrentTable from "../components/TorrentTable";
import TorrentDetails from "../components/TorrentDetails";
import { torrents } from "../data/torrents";

function Completed() {

  const [selectedTorrent, setSelectedTorrent] = useState(null);

  const completedTorrents = torrents.filter(
    (torrent) => torrent.status === "Completed"
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
          Completed Downloads
        </h1>

        <p style={{ color: "#888", fontSize: "14px" }}>
          Torrents that finished downloading
        </p>
      </div>

      {/* Torrent Table */}
      <div style={{ marginBottom: "20px" }}>
        <TorrentTable
          torrents={completedTorrents}
          onSelect={setSelectedTorrent}
        />
      </div>

      {/* Details Panel */}
      <TorrentDetails torrent={selectedTorrent} />

    </div>
  );
}

export default Completed;