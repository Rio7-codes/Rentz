import "./App.css";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

import Dashboard from "./pages/Dashboard";
import Downloading from "./pages/Downloading";
import Completed from "./pages/Completed";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const navEntries = window.performance.getEntriesByType("navigation");
    if (navEntries.length > 0 && navEntries[0].type === "reload") {
      if (window.location.pathname !== "/") {
        window.location.href = "/";
      }
    }
  }, []);

  return (
    <Router>
      <div style={{ background: "#111", color: "#fff" }}>

        <Sidebar />

        <div
          style={{
            marginLeft: "240px",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <TopBar />

          <div style={{ padding: "30px 40px", flex: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/downloading" element={<Downloading />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;