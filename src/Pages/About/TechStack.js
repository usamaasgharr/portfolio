import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { CgCPlusPlus } from "react-icons/cg";
import { SiExpress, SiRedux } from 'react-icons/si'
import { BsFiletypeCss, BsFillBootstrapFill, BsFiletypeSql } from "react-icons/bs"
import { BiSolidFileHtml, BiLogoVisualStudio, BiLogoPython, BiLogoMongodb } from "react-icons/bi"
import { DiJava ,DiJavascript1, DiNodejs, DiReact, DiGit, DiVisualstudio} from 'react-icons/di'
import { AiFillWindows } from 'react-icons/ai';


export default function TechStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiJava />
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
          <SiRedux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFiletypeSql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          
          <BiLogoMongodb/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BsFillBootstrapFill />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BiLogoVisualStudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <AiFillWindows />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiVisualstudio />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BiLogoPython/>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <BiSolidFileHtml /> 
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <BsFiletypeCss />
        </Col>

      </Row>
      )
}

