// React

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Pages
import LandingPage from "./Pages/LandingPage";
import IfoPage from "./Pages/IfoPage";
import Swap from "./Pages/Swap";

// Utils
import { loadScript } from "./utils";
import Pools from "./Pages/Pools";

// Styles

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
      <Route exact path="/pools" element={<Pools />} />
      <Route exact path="/swap" element={<Swap />} />
      <Route exact path="/ifo" element={<IfoPage />} />
    </Routes>
  );
}

export default App;
