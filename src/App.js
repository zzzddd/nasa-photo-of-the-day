import React from "react";
import PhotoList from "./Component/nasaFrame";
import "./../src/App.css";
import styled from "styled-components";
import { Button, Alert, Spinner } from "reactstrap";
const PageTitle = styled.h1`
  font-size: 5rem;
  &:hover {
    color: red;
  }
`;

function App() {
  return (
    <div className="App">
      <PageTitle>
        {" "}
        <h1>Planet Mars Photo From NASA API</h1>
      </PageTitle>

      <PhotoList />
    </div>
  );
}

export default App;
