import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Sprain() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Sprain" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Follow the R.I.C.E method: Rest, Ice, Compression, Elevation</li>
              <li>Rest the injured limb and avoid putting weight on it</li>
              <li>Apply an ice pack wrapped in cloth for 15–20 minutes every 2–3 hours</li>
              <li>Use a compression bandage to reduce swelling</li>
              <li>Elevate the limb above heart level if possible</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not apply heat during the first 48 hours</li>
              <li>Do not massage the area initially</li>
              <li>Do not ignore pain or continue activity that caused the injury</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
