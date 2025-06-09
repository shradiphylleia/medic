import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./Content.css";

export default function Bleeding() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="bleeding-content" text="Bleeding"></Heading>

          <img
            className="bandaid"
            src="./src/assets/bandaid.png"
            alt="graphical representation"
          />

          <Heading className="subheader" text="Instructions"></Heading>

          <Container className="content">
            <ol>
              <li>
                Put on gloves if available, or use a clean cloth to avoid
                contact with blood.
              </li>
              <li>
                Apply direct pressure to the wound using a sterile cloth or
                bandage.
              </li>
              <li>
                If bleeding doesn’t stop, apply more pressure and add more
                bandages without removing the original.
              </li>
              <li>Raise the injured area above heart level if possible.</li>{" "}
              <li>
                Seek medical help if bleeding is severe or doesn’t stop after 10
                minutes of pressure.
              </li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌"></Heading>
          <Container className="content">
            <ol>
              <li>
                Do not remove embedded objects.
              </li>
              <li>
                Do not wash deep or heavily bleeding wounds excessively: focus
                on stopping the bleeding.
              </li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
