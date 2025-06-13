import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Heat() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="heat" text="Heart Stroke" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Help the person sit down, stay calm, and rest</li>
              <li>Loosen any tight clothing</li>
              <li>If unresponsive and not breathing, begin CPR</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not leave the person alone unless you must call for help</li>
              <li>Do not give food or drink</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
