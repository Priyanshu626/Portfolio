import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Priyanshu_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
        <Col md={6} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Information Technology [ T.I.T ]"
              date="2021 - 2025"
              content={[
                `CGPA: 7.50/10 `,
                "Currently I am pursuing my Bachelor of Technology from Technocrats Institute Of Technology, Bhopal [ M.P ].",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              
              content={[
                "AWS Academy - Graduate AWS Academy Cloud Foundations",
                "Infosys Certified - Programming using Java",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
