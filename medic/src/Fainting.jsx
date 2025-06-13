import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Fainting() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="fainting" text="Fainting" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Lay the person flat on their back</li>
              <li>Elevate their legs about 12 inches to restore blood flow to the brain</li>
              <li>Loosen tight clothing, especially around the neck</li>
              <li>Check for breathing and responsiveness</li>
              <li>Let them rest and regain full alertness before standing</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not give the person anything to eat or drink while they are unconscious</li>
              <li>Do not slap or shake the person to wake them</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
