import React from 'react'
import "./footer.css"
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai"
import { BiLogoLinkedin, BiLogoFacebookCircle } from "react-icons/bi"


export default function footer() {
    return (
        <div className='footer text-center'>
            <div>
                <p className='text-capitalize'>Designed and developed by <br /> <span className="primary">usama asghar</span></p>
            </div>
            <div>
                <p>Copyright © 2023</p>
            </div>

            <div>
            <h4 className='icons'>
                    <a href="https://github.com/usamaasgharr" target='_blank' rel="noopener noreferrer"><AiFillGithub /></a>
                    <a href="https://linkedin.com/in/usamaasgharr" target='_blank' rel="noopener noreferrer"><BiLogoLinkedin /></a>
                    <a href="https://www.instagram.com/usama.asghar001/" target='_blank' rel="noopener noreferrer"><AiOutlineInstagram /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009794520703" target='_blank' rel="noopener noreferrer"><BiLogoFacebookCircle /></a>
                </h4>
            </div>


        </div>
    )
}
