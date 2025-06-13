import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Allergy() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="burns" text="Allergy" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Call emergency services immediately if symptoms are severe(swelling,trouble breathing,rash)</li>
              <li>If the person has an epinephrine auto-injector (EpiPen), help them use it</li>
              <li>Have them lie down and stay calm</li>
              <li>Monitor their breathing and be ready to perform CPR if necessary</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not give food, drink, or oral medications unless advised by medical personnel</li>
              <li>Do not leave the person alone, especially if they are having breathing difficulty</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
