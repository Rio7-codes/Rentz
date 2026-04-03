import React, { useState } from "react";
import TorrentTable from "../components/TorrentTable";
import TorrentDetails from "../components/TorrentDetails";
import { torrents } from "../data/torrents";

function Downloading() {
  const [selectedTorrent, setSelectedTorrent] = useState(null);
  const downloadingTorrents = torrents.filter(
    (torrent) => torrent.status === "Downloading"
  );

  return (
    <div style={{ padding: "32px", color: "white" }}>
      <div style={{ marginBottom: "32px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 14px",
            borderRadius: "999px",
            background: "rgba(0, 255, 136, 0.08)",
            border: "1px solid rgba(0, 255, 136, 0.14)",
            color: "#22f59a",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          ● Active Queue
        </div>

        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#f5f7fb",
            margin: "0 0 10px 0",
            letterSpacing: "-1.1px",
            lineHeight: 1.08,
          }}
        >
          Active Downloads
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.58)",
            margin: 0,
            maxWidth: "620px",
            lineHeight: 1.65,
          }}
        >
          Torrents currently downloading and moving through the active transfer
          queue.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TorrentTable
          torrents={downloadingTorrents}
          onSelect={setSelectedTorrent}
        />
        <TorrentDetails torrent={selectedTorrent} />
      </div>
    </div>
  );
}

export default Downloading;