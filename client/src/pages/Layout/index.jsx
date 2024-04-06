import { Container, Row, Col } from "react-bootstrap";
import { Toaster } from "react-hot-toast";

import { chatIcon } from "../../assets/home";

const Layout = ({ children }) => {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center flex-column my-4">
        <Row className="d-flex">
          <Col className="d-flex align-items-center gap-3">
            <img src={chatIcon} className="icon" alt="Chat Icon" />
            <span className="fs-3 fw-bold">Chat Application</span>
          </Col>
        </Row>
        {children}
        <Row className="d-flex">
          <Col className="d-flex align-items-center gap-3">
            <span className="fs-5 fw-bold">
              All Rights Reserved &copy; 2024 | Made By Keshav Agrawal
            </span>
          </Col>
        </Row>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Layout;
