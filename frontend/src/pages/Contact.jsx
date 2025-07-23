import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lc6qqre",     // Your EmailJS service ID
        "template_qkzisa3",    // Your EmailJS template ID
        form.current,
        "AUD9dMmflrFp3zCNb"    // Your EmailJS user/public key
      )
      .then(
        (result) => {
          alert("✅ Message sent!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Something went wrong: " + error.text);
        }
      );
  };

  return (
    <>
      <Container className="mt-5 mb-5" style={{ maxWidth: "600px" }}>
        <h2 className="mb-4">📞 Contact Us</h2>
        <p>We'd love to hear from you. Send us a message below.</p>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" name="user_name" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" name="user_email" required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" required />
          </Form.Group>
          <Button variant="primary" type="submit">Send Message</Button>
        </Form>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">
          © {new Date().getFullYear()} <strong>TripAI</strong> TripAI by Judi. All rights reserved..
        </p>
      </footer>
    </>
  );
}
