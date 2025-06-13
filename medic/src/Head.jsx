import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function HeadInjury() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="head" text="Head Injury" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Keep the person still and calm: avoid moving the head & neck</li>
              <li>Check for responsiveness, breathing, and signs of concussion</li>
              <li>Apply a cold compress to reduce swelling</li>
              <li>If there’s bleeding, apply gentle pressure with a clean cloth</li>
              <li>Seek medical help</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not move the person unless necessary</li>
              <li>Do not wash or press hard on deep head wounds</li>
              <li>Do not give painkillers without medical advice</li>
              <li>Do not let them sleep if they’re confused or unconscious</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
