import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Seizure() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Seizure" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Stay calm and time the seizure</li>
              <li>Clear the area around the person to prevent injury</li>
              <li>Gently turn the person onto their side to help keep their airway clear</li>
              <li>Place something soft under the head</li>
              <li>Loosen tight clothing around the neck</li>
              <li>Call emergency services if the seizure lasts more than 5 minutes or is their first seizure</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not restrain the person or try to stop their movements</li>
              <li>Do not put anything in their mouth</li>
              <li>Do not give food, drink, or medication until they are fully conscious</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
