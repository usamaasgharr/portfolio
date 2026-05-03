import React from 'react';
import './Home.css';
import TypeWriter from '../../Components/Typewriter/Type';
import home_main from '../../assets/images/home-main.png';
import avatar from '../../assets/images/avatar.svg'
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin, BiLogoFacebookCircle } from "react-icons/bi"





export default function Home() {
    return (
        <div>
            <div className='main-container'>
                <div className='intro'>
                    <h1 className='h1'>
                        Hi There!
                        <span className='wave' role='img' aria-labelledby='wave'>
                            👋🏻
                        </span>
                    </h1>

                    <h1 className='text-uppercase'>
                        I'm <span className='primary'>usama asghar</span>.
                    </h1>

                    <p className='type-size primary'>
                        <TypeWriter />
                    </p>
                </div>

                <div className='main-image-container'>
                    <img src={home_main} alt='main' className='main-image' />
                </div>
            </div>

            <h1 className='text-uppercase intro-headline int-margin'>Let me <span className="primary">introduce</span> myself</h1>

            <div className='intro-container'>

                <div className='introduction'>

                    {/* <p className='mt-5'>I'm doing <span className="primary">BSCS</span> from <span className='primary'> University of South Asia</span></p> */}
                    <p>
                      Passionate <span className="primary">full stack developer</span> with <span className="primary">1.5+ years</span> of experience building scalable, high-performance web applications — from <span className="primary">Next.js</span> and <span className="primary">React</span> front ends to <span className="primary">Node.js</span>, <span className="primary">NestJS</span>, and <span className="primary">Django REST</span> backends.
                    </p>
                    <p>
                      I hold a <span className="primary">BSCS</span> from the <span className="primary">University of South Asia</span> (Sep 2020 – Jun 2024). I focus on clean architecture, secure authentication, and integrations with payments, accounting, and AI APIs.
                    </p>
                    <p>
                      Core strengths: <span className="primary">TypeScript</span>, <span className="primary">Next.js</span>, <span className="primary">React</span>, <span className="primary">Tailwind CSS</span>, <span className="primary">PostgreSQL</span>, <span className="primary">MongoDB</span>, and <span className="primary">Redis</span>.
                    </p>
                </div>

                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>

            </div>

            <div className='text-center mt-5 find'>
                <h1 className='text-uppercase'>Find me on </h1>
                <p className='text-capitalize'>feel free to <span className="primary">Connect</span> with me</p>
                <h3 className='icons'>
                    <a href="https://github.com/usamaasgharr" target='_blank' rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://www.linkedin.com/in/usamaasgharr/" target='_blank' rel="noopener noreferrer"><BiLogoLinkedin /></a>
                    <a href="https://www.instagram.com/usama.asghar001/" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009794520703" target='_blank' rel="noopener noreferrer"><BiLogoFacebookCircle /></a>
                </h3>
            </div>
        </div>


    );
}
