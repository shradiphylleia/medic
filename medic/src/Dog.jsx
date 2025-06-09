import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./Content.css";

export default function Dog() {
  return (
    <div>
      <Container className="container">
        <Container className="main-dog">
          <Heading className="dog-title" text="Dog bite"></Heading>

          <img
            className="dog-content"
            src="./src/assets/dog.png"
            alt="graphical representation"
          />

          <Heading className="subheader" text="Instructions"></Heading>

          <Container className="content">
            <ol>
               <li>Wash the wound thoroughly with soap and water for at least 5 minutes.</li> <li>Apply antiseptic such as iodine or alcohol-based cleanser.</li> <li>Stop any bleeding with direct pressure using a clean cloth.</li> <li>Cover with a sterile bandage.</li> <li>Seek medical care immediatley</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌"></Heading>
          <Container className="content">
            <ol>
<li>Do not ignore the bite.</li> <li>Do not tape deep wounds shut,it can trap bacteria.</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
