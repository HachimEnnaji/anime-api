import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/NavComponent";
import { Col, Container, Row } from "react-bootstrap";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
function App() {
  return (
    <div className="App">
      <NavComponent />
      <Container>
        <Row>
          <Col xs={3}>
            <SideBar />
          </Col>
          <Col xs={9}>
            <Main />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
