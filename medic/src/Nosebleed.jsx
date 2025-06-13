import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Nosebleed() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="nosebleed" text="Nosebleed" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Stay calm and sit upright — do not lie down</li>
              <li>Lean slightly forward to prevent swallowing blood</li>
              <li>Pinch the soft part of the nose just below the bridge</li>
              <li>Hold the pinch for 10–15 minutes continuously</li>
              <li>Apply a cold compress to the bridge of the nose to constrict blood vessels</li>
              <li>Seek medical help if bleeding continues beyond 20 minutes</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not tilt the head back — this causes blood to flow down the throat</li>
              <li>Do not blow or pick the nose for several hours after bleeding stops</li>
              <li>Do not pack the nose with tissue or cotton unless instructed by a professional</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
