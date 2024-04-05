import { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import { heroSectionImage, chatIcon } from "../../assets/home";
import "./style.css";
import Login from "../Login";
import SignUp from "../SignUp";

const Home = () => {
  const [activeKey, setActiveKey] = useState("login");

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center flex-column my-4">
        <Row className="d-flex">
          <Col className="d-flex align-items-center gap-3">
            <img src={chatIcon} className="icon" alt="Chat Icon" />
            <span className="fs-3 fw-bold">Chat Application</span>
          </Col>
        </Row>
        <Row className="p-4 justify-content-center gap-2">
          <Col
            xl={5}
            lg={5}
            style={{ minHeight: "530px" }}
            className="rounded-2 border d-flex justify-content-center align-items-center containers"
          >
            <img
              src={heroSectionImage}
              className="w-100"
              alt="Hero Section Image"
            />
          </Col>
          <Col
            xl={5}
            lg={5}
            style={{ minHeight: "530px" }}
            className="rounded-2 border d-flex flex-column align-items-center containers"
          >
            <Row className="d-flex justify-content-center align-items-center">
              <Tabs
                defaultActiveKey="login"
                id="tabs"
                activeKey={activeKey}
                onSelect={handleTabChange}
                className="mb-3 pe-0"
                justify
              >
                <Tab eventKey="login" title="Login">
                  <Login setActiveKey={setActiveKey} />
                </Tab>
                <Tab eventKey="signup" title="Sign Up">
                  <SignUp setActiveKey={setActiveKey} />
                </Tab>
              </Tabs>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col className="d-flex align-items-center gap-3">
            <span className="fs-5 fw-bold">
              All Rights Reserved &copy; 2024 | Made By Keshav Agrawal
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
