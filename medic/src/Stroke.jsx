import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Stroke() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Stroke" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Call emergency services immediately — a stroke is a medical emergency</li>
              <li>Note the time when symptoms first appeared</li>
              <li>Keep the person comfortable and calm</li>
              <li>Lay them on their side with head slightly raised if they're conscious</li>
              <li>Check for breathing and responsiveness, and begin CPR if necessary</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not give them food, drink, or medication unless directed by medical professionals</li>
              <li>Do not leave the person alone while waiting for help</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
