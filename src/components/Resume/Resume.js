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
                `CGPA: 7.61/10 `,
                "I am pursuing my Bachelor of Technology from Technocrats Institute Of Technology, Bhopal [ M.P ].",
              ]}
            />
                <Resumecontent
              title="CLASS XIITH (HIGHER SECONDARY)"
              date="2021"
              content={[
                "Arunanchal Public School , Seoni",
                `Percentage: 65.40 % `,
              ]}
            />
                <Resumecontent
              title="CLASS XTH (SECONDARY)"
              date="2019"
              content={[
                "Arunanchal Public School , Seoni",
                `Percentage: 52.40 % `,
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="Infosys Internship Certificate"
              content={[
                "Infosys SpringBoot Internship 5.0",
              ]}
            />
                <Resumecontent
              title="Infosys Certificate"
              content={[
                "Programming using Java",
              ]}
            />
                <Resumecontent
              title="AWS Academy"
              content={[
                "Graduate AWS Academy Cloud Foundations",
              ]}
            />
                <Resumecontent
              title="HP Certificate"
              content={[
                "IT for Business Success",
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
