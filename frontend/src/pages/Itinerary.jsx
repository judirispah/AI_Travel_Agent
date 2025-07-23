import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, Spinner, Container, Row, Col } from "react-bootstrap";

export default function ItineraryPage() {
  const [userInput, setUserInput] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!userInput.trim()) return;
    setLoading(true);
    setAiReply("");

    try {
      const response = await fetch("http://localhost:8000/plan-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_input: userInput }),
      });

      const result = await response.json();
      setAiReply(result.reply);
    } catch (err) {
      setAiReply("❌ Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const handleDownloadTXT = () => {
    const element = document.createElement("a");
    const file = new Blob([aiReply], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "AI_Travel_Plan.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div style={{ background: "#f8f9fa", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Header Section */}
      <div className="bg-dark text-white text-center py-4">
        <h1> AI Travel Planner</h1>
        <p className="lead">Plan your dream trip in seconds using AI</p>
      </div>

      <Container className="mt-4 mb-5">
  <h4 className="text-center mb-4">🚀 Explore Smart Travel Features</h4>
  

  <Row className="text-center mt-4">
    <Col md>
      <h5>🧳 Packing Assistant</h5>
      <p>Get an auto-generated packing checklist based on your destination, season, and activities.</p>
    </Col>
    <Col md>
      <h5>📅 AI Day Planner</h5>
      <p>Automatically breaks down your trip day-by-day with realistic time slots and travel time.</p>
    </Col>
    <Col md>
      <h5>🗂️ Save & Download Plans</h5>
      <p>Download your travel plan as PDF or TXT, or save it in your AI dashboard for later access.</p>
    </Col>
  </Row>
</Container>


      {/* AI Planner Form */}
      <Container className="mb-5">
        <h3 className="text-center mb-4"> Describe Your Trip</h3>

        <textarea
          rows="3"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="E.g., I want to visit Goa for 3 days in December with my family..."
          className="form-control mb-3"
        />

        <div className="d-grid mb-4">
          <button onClick={handleSubmit} className="btn btn-primary" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Generate Itinerary"}
          </button>
        </div>

        {/* AI Response */}
        {aiReply && (
          <>
            <Accordion defaultActiveKey="0" alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header>📋 Full Plan</Accordion.Header>
                <Accordion.Body>
                  <ReactMarkdown>{aiReply}</ReactMarkdown>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>🛠️ Raw Markdown</Accordion.Header>
                <Accordion.Body>
                  <pre>{aiReply}</pre>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="mt-3 d-flex justify-content-end">
              <button className="btn btn-outline-secondary" onClick={handleDownloadTXT}>
                📄 Download as TXT
              </button>
            </div>
          </>
        )}
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">© {new Date().getFullYear()}TripAI by Judi. All rights reserved.</p>
      </footer>
    </div>
  );
}
