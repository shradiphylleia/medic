import React from "react";
import Heading from "./Heading";
import Container from "./Container";
import "./App.css";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="bigContainer">
        <Heading className="heading" text="medic"></Heading>

        {/* input panel */}
        <Container className="inputPanel">
          <img src="./src/assets/search.png" alt="search bar graphic" />
          <input type="text" placeholder="search first aid topic" />
        </Container>


        <Container className="mediumContainer">
          <Link to="/burns" className="burnsContainer">
            <img
              className="ointment"
              src="./src/assets/kit.png"
              alt="ointment"
            />
            <span className="burnsText">Burns</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>

          <hr />

          <Link to="/bleeding" className="bleedingContainer">
            <img
              className="bleeding"
              src="./src/assets/bandaid.png"
              alt="graphical representation"
            />
            <span className="bleedingText">Bleeding</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>

          <hr />
          <Link to="/cpr" className="cprContainer">
            <img
              className="cpr"
              src="./src/assets/ambulance.png"
              alt="ambulance"
            />
            <span className="cprText">CPR</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>

          <hr />
           <Link to="/snakebite" className="snakeContainer">
            <img
              className="snake"
              src="./src/assets/snake.png"
              alt="snake"
            />
            <span className="snakeText">Snake Bite</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>
          <hr />

          <Link to="/dogbite" className="dogContainer">
            <img
              className="dog"
              src="./src/assets/dog.png"
              alt="dog"
            />
            <span className="dogText">Dog Bite</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>
<hr />
          <Link to="/accident" className="accidentContainer">
            <img
              className="accident"
              src="./src/assets/ambulance.png"
              alt="ambulance"
            />
            <span className="accidentText">Road accident</span>
            <img className="next" src="./src/assets/next.png" alt="next" />
          </Link>
         

        </Container>
      </Container>
    </div>
  );
}

export default App;
