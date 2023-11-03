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
            <p>I am a final year student pursuing BSCS at University of South Asia.</p><br />

            <p>Apart from coding, some other activities that I love to do!

              <br /><br /><b><AiOutlineArrowRight /></b> Playing Games
              <br /><b><AiOutlineArrowRight /></b>  Watching Movies
              <br /><b><AiOutlineArrowRight /></b>  Travelling
            </p>




          </div>
        </div>


        <div className='main-image-container'>
          <img src={about_main} alt='main-image' className='main-image' />
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

