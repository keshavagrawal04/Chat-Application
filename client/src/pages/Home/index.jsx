import { useState } from "react";
import { Row, Col, Tabs, Tab } from "react-bootstrap";

import { heroSectionImage } from "../../assets/home";
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
      <Row className="p-4 justify-content-center gap-2">
        <Col
          xl={5}
          lg={5}
          md={10}
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
          md={10}
          style={{ minHeight: "530px" }}
          className="rounded-2 px-0 border d-flex flex-column align-items-center containers"
        >
          <Row className="d-flex w-100 justify-content-center align-items-center">
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
      </Row>{" "}
    </>
  );
};

export default Home;
