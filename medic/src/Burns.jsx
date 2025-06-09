import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import './Content.css';

export default function Burns() {
  return (
    <div>
      <Container className='container'>
      <Container className="main">
        <Heading className="burns" text="Burns"></Heading>

        <img className="kit" src="./src/assets/kit.png" alt="medical kit" />

        <Heading className="subheader" text="Instructions"></Heading>

        <Container className="content">
          <ol>
            <li>Hold burned area under cold running water for 10 minutes</li>
            <li>Cover with sterile dressing</li>
            <li>Manage pain with over the counter pain relivers</li>
          </ol>
        </Container>

        <Heading className="footer" text="Not to do❌"></Heading>
        <Container className="content">
          <ol>
            <li>
              Do not apply ointments, creams, or butter.It can trap heat and
              worsen the burn
            </li>
            <li>
              Do not apply ice or ice water.It can damage the skin further
            </li>
            <li>
              Do not break blisters.It increases the risk of infection
            </li>
            <li>
              Do not use fluffy materials or adhesives directly on the burn
            </li>
            <li>Do not delay seeking medical attention for serious burns</li>
          </ol>
        </Container>
      </Container>
      </Container>
    </div>
  );
}
