import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Fracture() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="fracture" text="Fracture" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Keep the injured area still and supported: do not try to realign the bone</li>
              <li>Apply a splint, or use a makeshift support (like a rolled-up towel)</li>
              <li>Control any bleeding with gentle pressure, avoiding direct pressure on the bone</li>
              <li>Apply an ice pack wrapped in cloth to reduce swelling and pain</li>
              <li>Call emergency services.</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not move the person unless absolutely necessary</li>
              <li>Do not attempt to push protruding bone back inside</li>
              <li>Do not give food or drink if surgery might be needed</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
