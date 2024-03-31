import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {CgCPlusPlus} from 'react-icons/cg'
import { FaJava } from "react-icons/fa6";
import { MdHtml } from "react-icons/md";
import { MdCss } from "react-icons/md";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import {
  SiPytorch,
  SiTensorflow,
  SiFirebase,
  SiTypescript,
  SiAmazonaws,
  SiGraphql,
} from 'react-icons/si'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className="tech-icons">
      <MdHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <MdCss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
    </Row>
  )
}

export default Techstack
