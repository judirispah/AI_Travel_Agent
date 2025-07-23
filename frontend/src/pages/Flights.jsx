import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const flightSites = [
  {
    name: "Google Flights",
    url: "https://www.google.com/flights",
    logo: "https://cdn-icons-png.flaticon.com/512/720/720298.png"
  },
  {
    name: "Skyscanner",
    url: "https://www.skyscanner.co.in",
    logo: "https://logodix.com/logo/1039665.png"
  },
  {
    name: "MakeMyTrip",
    url: "https://www.makemytrip.com/flights/",
    logo: "https://companieslogo.com/img/orig/MMYT-ca98a9f1.png?t=1683788455"
  },
  {
    name: "Goibibo",
    url: "https://www.goibibo.com/flights/",
    logo: "https://play-lh.googleusercontent.com/cGj-Aahikzs8xAqdI2iTJi51p1JTR9tUCw-Iy0CE-npOTnTYPpgM2ZUtPXJXhwxLpA"
  }
];

export default function Flights() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-4 mb-4">
        <h2 className="mb-4 text-center">✈️ Book Your Flights</h2>
        <Row xs={1} md={2} className="g-4">
          {flightSites.map((site, idx) => (
            <Col key={idx}>
              <Card className="shadow-sm h-100 text-center">
                <div style={{ height: "100px", padding: "10px" }}>
                  <img
                    src={site.logo}
                    alt={site.name}
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                    onError={(e) => e.target.style.display = "none"}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{site.name}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => window.open(site.url, "_blank")}
                  >
                    Visit {site.name}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <footer className="bg-dark text-white text-center py-2 mt-auto">
        <p className="mb-0">© {new Date().getFullYear()}TripAI by Judi. All rights reserved.</p>
      </footer>
    </div>
  );
}
