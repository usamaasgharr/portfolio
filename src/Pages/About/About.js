import React from 'react'
import "./About.css"
import { AiOutlineArrowRight } from "react-icons/ai"
import about_main from '../../assets/images/about-main.png';
import TechStack from './TechStack';


export default function About() {
  return (

    <div>
      <div className='main-container'>
        <div className='main-section'>
          <h1 className='main-heading'>
            Know Who <span className="primary">I'M</span>
          </h1>

          <div className="about mt-5">
            <p>Hi Everyone, I am <span className="primary">Usama Asghar</span> from <span className="primary">Lahore, Pakistan</span>.</p><br />

            <p>
              I am a <span className="primary">Software Engineer</span> at <span className="primary">Scaylar Technologies</span> (May 2025 – Present). Previously I was an <span className="primary">Associate Software Engineer</span> at <span className="primary">Micro Data Tech Solutions</span> (Dec 2024 – May 2025), working across the MERN stack with <span className="primary">React Query</span> and <span className="primary">Redis</span> for performance.
            </p><br />

            <p>
              At Scaylar I have helped deliver <span className="primary">4+ production-ready applications</span>, including Django/Next.js and NestJS/Next.js stacks, plus AI features via <span className="primary">ChatGPT</span>, <span className="primary">Gemini</span>, and <span className="primary">OpenRouter</span>, and integrations such as <span className="primary">Stripe</span>, <span className="primary">Square</span>, <span className="primary">Twilio</span>, <span className="primary">QuickBooks</span>, and <span className="primary">Zoho</span>.
            </p><br />

            <p>
              <span className="primary">Education:</span> BSCS, University of South Asia (Sep 2020 – Jun 2024), CGPA 2.98. Intermediate: Govt. M.A.O Graduate College, Lahore (2018–2020). Matric: Sacred Heart Cathedral High School (2018).
            </p><br />

            <p>Apart from coding, some other activities that I love to do!

              <br /><br /><b><AiOutlineArrowRight /></b> Playing Games
              <br /><b><AiOutlineArrowRight /></b>  Watching Movies
              <br /><b><AiOutlineArrowRight /></b>  Travelling
            </p>




          </div>
        </div>


        <div className='main-image-container'>
          <img src={about_main} alt='main' className='main-image' />
        </div>
      </div>



      {/* skills */}
      <div className="skills">
        <h1 className='text-center'>Professional <span className="primary">Skillset</span></h1>
        <TechStack />

      </div>

    </div>
  )
}

