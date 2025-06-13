import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./Content.css";

export default function Accident() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="bleeding-content" text="Accident"></Heading>

          <img
            className="ambulance"
            src="./src/assets/ambulance.png"
            alt="graphical representation"
          />

          <Heading className="subheader" text="Instructions"></Heading>

          <Container className="content">
            <ol>
            <li>Turn on hazard lights,avoid oncoming traffic.</li> <li>Call emergency services immediately.</li> <li>Check for responsiveness.</li> <li>Stop any visible bleeding using direct pressure with a clean cloth.</li> <li>Support their head and neck if spinal injury is suspected.</li> 
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌"></Heading>
          <Container className="content">
            <ol>
              <li>
                Do not remove embedded objects.
              </li>
              <li>
                Do not wash deep or heavily bleeding wounds excessively: focus
                on stopping the bleeding.
              </li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
