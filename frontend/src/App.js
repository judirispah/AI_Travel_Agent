// File: src/App.jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Flights from "./pages/Flights";
import Hotels from "./pages/Hotels";
import MapView from "./pages/MapView";
import { useState } from "react";
import Nav from "./components/Navbar";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  const renderPage = () => {
    switch (activeTab) {
      case "itinerary": return <Itinerary />;
      case "flights": return <Flights />;
      case "hotels": return <Hotels />;
      case "map": return <MapView />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav setActiveTab={setActiveTab} />
      <div className="p-4">{renderPage()}</div>
    </div>
  );
}