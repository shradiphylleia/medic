import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Asthma() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Asthma" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Help them sit upright.</li>
              <li>Loosen any tight clothing.</li>
              <li>Assist them in using their inhaler.</li>
              <li>Wait a few minutes; if symptoms persist, help them take another dose.</li>
              <li>Call emergency services if breathing doesn’t improve or gets worse</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not have the person lie down: sitting is better for lung expansion</li>
              <li>Do not ignore worsening symptoms: seek help.</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
