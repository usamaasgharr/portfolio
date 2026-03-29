import React from 'react'
import './Projects.css'

import ProjectCard from '../../Components/ProjectCard/projectCard'
import { Row, Col } from "react-bootstrap";
import eStore from "../../assets/images/laptop Store.png"
import todo from "../../assets/images/laptop todo.png"
import meme from "../../assets/images/laptop.png"
import zelfi from '../../assets/images/zelfi.png'
import franfinance from '../../assets/images/franfinance.svg'
import donutnv from '../../assets/images/donutnv.svg'
import scanshield from '../../assets/images/scanshield.svg'

const franFinanceBullets = [
  'Developed FranFinance, a platform enabling Signarama franchises to securely connect their QuickBooks and Xero accounts via OAuth and grant read permissions for financial statements.',
  'Designed backend pipelines to pull, process, and store complex accounting data (transactions, expenses, chart of accounts) from multiple franchise accounts in MongoDB.',
  'Built front-end dashboards to compare financial statements across franchises, helping management identify top-performing locations, underperforming areas, and opportunities for improvement.',
  'Integrated AI-powered insights to automatically analyze franchise data and provide actionable recommendations for operational and financial optimization.',
  'Ensured data security, accuracy, and scalability while handling sensitive and complex financial data from multiple sources.',
  'Enhanced decision-making for franchise management by delivering clear visualizations, comparisons, and actionable reports.',
]

const donutNVBullets = [
  'Developed a CRM platform for DonutNV franchises to manage bookings, appointments, menus, stock, and operating hours.',
  'Built a public booking portal where customers can schedule truck services based on time zones and locations, with dynamic franchise assignment using Google Maps integration.',
  'Integrated Square API for menu management, stock synchronization, and secure payments, including a split payment workflow (50% down at booking, 50% post-event).',
  'Implemented automatic invoice generation and delivery for customers after booking completion.',
  'Created dashboards for franchisors to track bookings, operating hours, fleet schedules, and manage menu items, improving operational efficiency.',
  'Ensured a scalable, secure, and user-friendly platform, handling complex business rules and multi-franchise data efficiently.',
]

const scanShieldBullets = [
  'Developed ScanShield, a roof inspection and appointment management platform that enables canvassers to schedule inspections, and inspectors to collect site data efficiently.',
  'Integrated Google Maps to allow canvassers to locate homes and assign inspections based on geolocation.',
  'Implemented Zoho Booking API for appointment management: sent latitude and longitude to automatically book inspections, ensuring seamless scheduling.',
  'Built functionality for roof inspectors to upload photos, which are then analyzed by a custom-trained ChatGPT model to generate detailed PDF reports on roof damage, including images and structured insights.',
  'Designed backend pipelines to store inspection data, process images, and automate report generation, improving operational efficiency and reducing manual effort.',
  'Enhanced communication and data-driven decision-making for inspection teams and clients through AI-powered analysis and automated reporting.',
]

export default function Projects() {
    return (
        <div className='main mt-5 text-center'>
            <h1 className='mt-5'>My Recent <span className="primary">Works</span></h1>
            <p className='text-capitalize primary'>A sample of personal projects; professionally I have shipped 5+ production-ready applications with modern full-stack stacks.</p>


            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={franfinance}
                        isBlog={false}
                        title="FranFinance — Signarama"
                        description="Full-stack platform for Signarama franchises: OAuth-linked QuickBooks and Xero, MongoDB data pipelines, comparative financial dashboards, and AI-driven operational insights."
                        modalRole="Full-Stack Developer – FranFinance Project for Signarama (via Scaylar Technologies)"
                        technologies="Node.js, Express.js, MongoDB, React/Next.js, QuickBooks/Xero APIs, OAuth, AI/ML for insights"
                        detailBullets={franFinanceBullets}
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={donutnv}
                        isBlog={false}
                        title="DonutNV — CRM & Booking"
                        description="Full-stack CRM and public booking for DonutNV franchises: Google Maps–based scheduling, Square menus and split payments, invoicing, and franchisor dashboards for fleets and operations."
                        modalRole="Full-Stack Developer – DonutNV CRM & Booking Platform (via Scaylar Technologies)"
                        technologies="React/Next.js, Node.js, Express.js, MongoDB, Google Maps API, Square API, OAuth, Payment Integration"
                        detailBullets={donutNVBullets}
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={scanshield}
                        isBlog={false}
                        title="ScanShield — Roof Inspection"
                        description="Inspection and scheduling platform: Maps-based assignment, Zoho Booking with lat/long, photo uploads, and ChatGPT-powered PDF reports for roof damage analysis."
                        modalRole="Full-Stack Developer – ScanShield Roof Inspection Platform (via Scaylar Technologies)"
                        technologies="React/Next.js, Node.js, Express.js, MongoDB, Google Maps API, Zoho Booking API, OpenAI GPT API"
                        detailBullets={scanShieldBullets}
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={zelfi}
                        isBlog={false}
                        title="Zelfi Crypto Application"
                        description="I developed a crypto application using the CoinGecko API to display real-time data for various cryptocurrencies, showcasing price changes, market capitalization, and volume. The app features pagination, search functionality, and a responsive UI built with Tailwind CSS, with state managed efficiently using the Context API."
                        // ghLink="https://github.com/usamaasgharr/meme-generator"
                        demoLink="https://zelfi.io/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={eStore}
                        isBlog={false}
                        title="E-commerce Store"
                        description="I introduced an e-commerce web application using React.js, Redux Toolkit, and React Router, featuring dynamic product data fetched from the 'FakeStore' API. It demonstrates my strong front-end development skills and proficiency in state management with Redux Toolkit."
                        ghLink="https://github.com/usamaasgharr/fakeStore"
                        demoLink="https://fakestore-123.netlify.app/"
                    />
                </Col>

                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={todo}
                        isBlog={false}
                        title="Todo App"
                        description="Developed a responsive and user-friendly todo list application using React.js and React hooks. This project showcases my proficiency in front-end web development and state management."
                        ghLink="https://github.com/usamaasgharr/todo-app"
                        demoLink="https://react-todo-app1234.netlify.app/"
                    />
                </Col>


            </Row>
            <Row style={{ justifyContent: 'center' }}>
                <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={meme}
                        isBlog={false}
                        title="Meme Generator"
                        description="I'm excited to share my latest project, a dynamic meme generator built using React.js and the power of React Hooks. This fun and interactive application allows users to create hilarious memes by selecting images from an external API and adding their own custom text."
                        ghLink="https://github.com/usamaasgharr/meme-generator"
                        demoLink="https://meme0generator.netlify.app/"
                    />
                </Col>
            </Row>
        </div>
    )
}
