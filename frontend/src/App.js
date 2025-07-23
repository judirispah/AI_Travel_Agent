import React, { useState } from "react";
import NavigationBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import Flights from "./pages/Flights";
import Contact from "./pages/Contact";
import MapView from "./pages/MapView";
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [showChat, setShowChat] = useState(false);
  

  const renderPage = () => {
    switch (activeTab) {
      case "home": return <HomePage onPlanClick={() => setShowChat(true)} />;
      case "itinerary": return <Itinerary />;
      case "flights": return <Flights />;
      case "contact": return <Contact />;
      case "map": return <MapView />;
      default: return <HomePage onPlanClick={() => setShowChat(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationBar setActiveTab={setActiveTab} />
      <div className="p-4">{renderPage()}</div>

      {/*  AI Planner Chat Drawer */}
      <Offcanvas show={showChat} onHide={() => setShowChat(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> AI Trip Planner</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Itinerary />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
