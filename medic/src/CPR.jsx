import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./Content.css";

export default function CPR() {
  return (
    <div>
      <Container className="container">
        <Container className="main">
          <Heading className="cpr-title" text="CPR"></Heading>

          <img
            className="ambulance"
            src="./src/assets/ambulance.png"
            alt="graphical representation"
          />

          <Heading className="subheader" text="Instructions"></Heading>

          <Container className="content">
            <ol>
         <li>Place the person on their back on a firm surface.</li> <li>Begin chest compressions: 100–120 per minute, 5–6 cm deep, allow full recoil.</li> <li>Give rescue breaths 30 compressions → 2 breaths.</li> <li>Continue CPR until help arrives</li>
            </ol>
          </Container>

          <Heading className="footer" text="Not to do❌"></Heading>
          <Container className="content">
            <ol>
        <li> Do not stop CPR unless help arrives or the person starts breathing normally.</li> <li>Do not perform shallow compressions — depth is critical.</li>
            </ol>
          </Container>
        </Container>
      </Container>
    </div>
  );
}
