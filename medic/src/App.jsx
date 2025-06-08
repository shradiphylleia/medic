import React from "react";
import Heading from "./Heading";
import Container from './Container';
import './App.css';


function App() {
  return (
    <div>
      <Container>
        <Heading text="medic"></Heading>
        
        {/* input panel */}
        <Container className='inputPanel'>
          <img src="./src/assets/search.png" alt="search bar graphic" />
          <input type="text" placeholder="search first aid topic" />
        </Container>
        
      </Container>
    </div>
  );
}

export default App;

