import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FindRoute from "./pages/FindRoute.jsx";
import NetworkMap from "./network-maps/NetworkMap.jsx"
import NMRC from "./network-maps/NMRC.jsx"
import RapidMetro from "./network-maps/RapidMetro.jsx"
import AirportExpressLine from "./network-maps/AirportExpressLine"

const App = () => {

  return (
    <div data-theme="dim">
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-route" element={<FindRoute />} />
            <Route path="/network/network-map" element={<NetworkMap />} />
            <Route path="/network/airport-express-line" element={<AirportExpressLine />} />
            <Route path="/network/rapid-metro" element={<RapidMetro />} />
            <Route path="/network/nmrc" element={<NMRC />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;