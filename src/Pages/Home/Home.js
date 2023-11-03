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
                    <img src={home_main} alt='main-image' className='main-image' />
                </div>
            </div>

            <h1 className='text-uppercase intro-headline int-margin'>Let me <span className="primary">introduce</span> myself</h1>

            <div className='intro-container'>

                <div className='introduction'>

                    <p className='mt-5'>I'm doing <span className="primary">BSCS</span> from <span className='primary'> University of South Asia</span></p>
                    <p>Currently enrolled in <span className='primary'> 7th Semester</span>.</p>
                    <p>I am fluent in classics like <span className='primary'>C++</span>, <span className='primary'>Java</span> and <span className='primary'>Javascript</span>.</p>
                    <p>My field of Interest's are building new <span className='primary'> Web Applications and Products</span>.</p>
                    <p>Whenever possible, I also apply my passion for developing products with <span className="primary">Node js</span><br />   and Modern Javascript Library and Frameworks  like <span className="primary">React.js</span>.</p>
                </div>

                <div className="avatar">
                    <img src={avatar} alt="" />
                </div>

            </div>

            <div className='text-center mt-5 find'>
                <h1 className='text-uppercase'>Find me on </h1>
                <p className='text-capitalize'>feel free to <span className="primary">Connect</span> with me</p>
                <h3 className='icons'>
                    <a href="https://github.com/usamaasgharr" target='_blank'><AiFillGithub /></a>
                    <a href="https://linkedin.com/in/usamaasgharr" target='_blank'><BiLogoLinkedin /></a>
                    <a href="https://www.instagram.com/usama.asghar001/" target='_blank'><AiOutlineInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009794520703" target='_blank'><BiLogoFacebookCircle /></a>
                </h3>
            </div>
        </div>


    );
}
