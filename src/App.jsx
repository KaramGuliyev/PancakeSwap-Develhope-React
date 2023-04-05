import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Swap from "./Pages/Swap";
import { loadScript } from "./utils";

function App() {
  useEffect(() => {
    // load header footer script
    var script = loadScript("scripts/header-footer.js");

    return () => {
      // unload js after component unloads
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/swap" element={<Swap />} />
    </Routes>
  );
}

export default App;
