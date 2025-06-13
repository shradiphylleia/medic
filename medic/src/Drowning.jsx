import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Drowning() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Drowning" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Call emergency services without delay.</li>
              <li>Get the person out of the water as quickly and safely as possible.</li>
              <li>Check for breathing and pulse — if absent, start CPR immediately.</li>
              <li>If breathing, place them on their side in the recovery position.</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not delay CPR if the person isn’t breathing</li>
              <li>Do not give them anything to eat or drink until assessed by medical personnel</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
