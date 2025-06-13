import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Poisoning() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="poison" text="Poisoning" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Call emergency services immediately</li>
              <li>If the person is conscious, ask what was ingested and when</li>
              <li>Do not induce vomiting unless told to by medical professionals</li>
              <li>If the poison is on the skin, remove contaminated clothing and rinse skin with water for 15 minutes</li>
              <li>If the person is not breathing or unresponsive, begin CPR</li>
              <li>Keep the substance container or label to show the responders</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not give the person anything to eat or drink unless instructed</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
