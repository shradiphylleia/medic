import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./Content.css";

export default function Snake() {
  return (
    <div>
      <Container className="container">
        <Container className="main-snake">
          <Heading className="snake-title" text="Snake bite"></Heading>

          <img
            className="snake-content"
            src="./src/assets/snake.png"
            alt="graphical representation"
          />

          <Heading className="subheader" text="Instructions"></Heading>

          <Container className="content">
            <ol>
<li>Keep the victim calm and still to slow venom spread.</li> <li>Immobilize the bitten limb and keep it below heart level.</li> <li>Remove any tight items near the bite (rings, bracelets, etc.).</li> <li>Clean the area gently with soap and water — no scrubbing.</li> <li>Seek immediate medical attention. Describe or remember the snake if possible.</li>            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌"></Heading>
          <Container className="content">
            <ol>
 <li>Do not attempt to suck out the venom.</li> <li>Do not cut the wound or apply ice.</li> <li>Do not use a tourniquet unless specifically instructed by professionals.</li> <li>Do not let the victim walk or run.</li> 
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
