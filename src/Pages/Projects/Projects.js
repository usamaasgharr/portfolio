import React from 'react'
import './Projects.css'

import ProjectCard from '../../Components/ProjectCard/projectCard'
import { Row, Col } from "react-bootstrap";
import eStore from "../../assets/images/laptop Store.png"
import todo from "../../assets/images/laptop todo.png"
import meme from "../../assets/images/laptop.png"


export default function Projects() {
    return (
        <div className='main mt-5 text-center'>
            <h1 className='mt-5'>My Recent <span className="primary">Works</span></h1>
            <p className='text-capitalize primary'>Here are few projects I have work on recently</p>


            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
