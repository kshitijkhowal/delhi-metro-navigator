import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FindRoute from "./pages/FindRoute.jsx";

const App = () => {

  return (
    <div data-theme="dim">
      <div className="min-h-screen flex flex-col ">
        <Navbar />
        <main className="flex flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-route" element={<FindRoute />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;