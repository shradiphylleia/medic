import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Choking() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="choking" text="Choking" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Call emergency services immediately.</li>
              <li>Give 5 back blows between the shoulder blades with the heel of your hand.</li>
              <li>Give 5 abdominal thrusts (Heimlich maneuver)</li>
              <li>Repeat above until the object is dislodged or help arrives.</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not hit the person on the back if they are able to cough forcefully.</li>
              <li>Do not perform abdominal thrusts on infants under 1 year old (use chest thrusts instead)</li>
              <li>Do not put your fingers in their mouth unless you can clearly see and safely remove the object.</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
