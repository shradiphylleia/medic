import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function ElectricShock() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Electric Shock" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Do not touch the person while they’re still in contact with electricity</li>
              <li>Turn off the power source or unplug the device if safe to do so</li>
              <li>Call emergency services immediately</li>
              <li>Start CPR if needed</li>
              <li>Treat visible burns with clean cloth</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not move the person unless there's an ongoing danger</li>
              <li>Do not apply ointments or ice to burns caused by electricity</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
