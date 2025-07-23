import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

export default function HomePage({ onPlanClick, setActiveTab }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center bg-light py-5">
        <h1 className="display-5 fw-bold text-primary">Welcome to TripAI ✈️</h1>
        <p className="lead">Plan smarter trips with AI. Get real-time flight info, hotel suggestions, itineraries, and maps – all in one place!</p>
         <Button variant="primary" onClick={onPlanClick}>
         Plan a Trip with AI
      </Button>
      </div>

      {/* Carousel Section */}
      <Container className="mt-5">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100 rounded" src="https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg" alt="Travel 1"
            style={{ height: "450px", objectFit: "cover" ,backgroundColor: "rgba(0, 0, 0, 1)", borderRadius: "10px", padding: "1px" }} />
            <Carousel.Caption>
              <h3>Timeless Beauty of the Taj Mahal</h3>
              <p>Experience the magic of India’s most iconic monument, where love meets architecture.</p>
            </Carousel.Caption>
          </Carousel.Item>

           <Carousel.Item>
            <img className="d-block w-100 rounded" src="https://www.turismoasiatico.com/wp-content/uploads/2020/04/UlunDanuBratanTemploBALIAdobeStock_323680669-2048x1367.jpeg" alt="Travel 2"
            style={{ height: "450px", objectFit: "cover" ,backgroundColor: "rgba(0, 0, 0, 1)", borderRadius: "10px", padding: "1px" }} />
            <Carousel.Caption>
              <h3>Love in the Air, Bali in Your Heart</h3>
              <p>Sun, sand, and serenity — your dream beach trip starts here.</p>
            </Carousel.Caption>
          </Carousel.Item>

           <Carousel.Item>
            <img className="d-block w-100 rounded" src="https://handluggageonly.co.uk/wp-content/uploads/2017/05/iStock-509472000.jpg" alt="Travel 3"
            style={{ height: "450px", objectFit: "cover" ,backgroundColor: "rgba(0, 0, 0, 1)", borderRadius: "10px", padding: "1px" }} />
            <Carousel.Caption>
              <h3>Kyoto in Bloom</h3>
              <p>Stroll through bamboo groves, geisha districts, and spiritual temples with ease.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Features Section */}
      

      {/* What is TripAI */}
<Container className="my-5" id="about">
  <h2 className="text-center text-primary fw-bold mb-4">What is TripAI?</h2>
  <p className="lead text-center">
    TripAI is your intelligent travel assistant that simplifies trip planning.
    Whether you're a solo adventurer, a family traveler, or a business explorer, TripAI curates the perfect travel experience.
  </p>
</Container>

{/* How It Works */}
<Container className="my-5">
  <h2 className="text-center text-primary fw-bold mb-4">How It Works</h2>
  <Row className="text-center g-4">
    <Col md={4}>
      <div className="p-4 shadow-sm rounded bg-light">
        <h3> Enter Preferences</h3>
        <p>Input your preferences in natural language.</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="p-4 shadow-sm rounded bg-light">
        <h3> AI Crafts Itinerary</h3>
        <p>Our AI builds a real-time, optimized travel plan tailored to your needs.</p>
      </div>
    </Col>
    <Col md={4}>
      <div className="p-4 shadow-sm rounded bg-light">
        <h3> Explore & Enjoy</h3>
        <p>View activities, hotels, attractions, weather — all in one place.</p>
      </div>
    </Col>
  </Row>
</Container>

{/* Why Choose TripAI */}
<Container className="my-5">
  <h2 className="text-center text-primary fw-bold mb-4">Why Choose TripAI?</h2>
  <Row className="g-4 text-center">
    <Col md={3}>
      <div className="p-3 border rounded">
        <h5>⚡ Fast Planning</h5>
        <p>Instant AI-generated itineraries tailored to your Budjet.</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="p-3 border rounded">
        <h5>⚡ Smart Suggestions</h5>
        <p>Discover places based on classic and off-beat plans.</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="p-3 border rounded">
        <h5>⚡ Everything in One Place</h5>
        <p>More details for planning — seamlessly integrated.</p>
      </div>
    </Col>
    <Col md={3}>
      <div className="p-3 border rounded">
        <h5>⚡ Easy to Use</h5>
        <p>Modern interface. No logins. Just click & explore your plan.</p>
      </div>
    </Col>
  </Row>
</Container>




      {/* Footer */}
      <footer className="bg-dark text-light text-center py-3">
        <p className="mb-0">© {new Date().getFullYear()}TripAI by Judi. All rights reserved.</p>
      </footer>
    </div>
  );
}
