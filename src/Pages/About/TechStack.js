import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
} from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { BiLogoVisualStudio } from 'react-icons/bi'

export default function TechStack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <SiTypescript title="TypeScript" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJavascript title="JavaScript" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPython title="Python" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPhp title="PHP" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiReact title="React" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs title="Next.js" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiTailwindcss title="Tailwind CSS" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNodedotjs title="Node.js" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress title="Express.js" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs title="NestJS" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango title="Django" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostgresql title="PostgreSQL" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMongodb title="MongoDB" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiRedis title="Redis" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGraphql title="GraphQL" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit title="Git" />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <BiLogoVisualStudio title="Visual Studio" />
        </Col>
      </Row>
      )
}
