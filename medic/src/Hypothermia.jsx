import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Hypothermia() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="hypothermia" text="Hypothermia" />

          <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

          <Heading className="subheader" text="Instructions" />

          <Container className="content">
            <ol>
              <li>Move the person to a warm, sheltered area.</li>
              <li>Remove any wet clothing and replace with dry, warm layers</li>
              <li>Use blankets or warm compresses to raise body temperature</li>
              <li>Offer warm, sweet liquids if the person is fully conscious</li>
              <li>Call emergency services immediately.</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌" />
          <Container className="content">
            <ol>
              <li>Do not use direct heat like hot water or heating pads</li>
              <li>Do not give alcohol or caffeine</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
