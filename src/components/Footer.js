import React from 'react';
import './Footer.css';
import fb from "./pages/pictures/facebook.png";
import ins from "./pages/pictures/instagram.png";
import mail from "./pages/pictures/gmail.png";


export const Footer = () => {
  return (
    <div className='Footer-container'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
                <div className='sb_footer-links-div'>
                    <h4>For Business</h4>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                    <a href='/healthplan'>
                        <p>healthplan</p>
                    </a>
                    <a href='/individual'>
                        <p>individual</p>
                    </a>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>About Us</h4>
                    <a href='/employer'>
                        <p>Our Story</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Press</p>
                    </a>
                    <a href='/individual'>
                        <p>Career</p>
                    </a>
                    <a href='/employer'>
                        <p>Contact Us</p>
                    </a> 
                </div>
                <div className='sb_footer-links-div'>
                    <h4>Resources</h4>
                    <a href='/employer'>
                        <p>Safety Standards</p>
                    </a>
                    <a href='/healthplan'>
                        <p>Customer Bill of Rights</p>
                    </a>
                    <a href='/individual'>
                        <p>Reward Points Terms and Conditions</p>
                    </a>
                    <a href='/employer'>
                        <p>Gift Card Program Terms and Conditions</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                    <h4>Connect</h4>
                    <a href='/employer'>
                        <p>Turning Stone Resort Casino 
                            5218 Patrick Rd Verona, NY 13478 </p></a>
                    <a href='/healthplan'>
                        <p>800.771.7711</p>
                    </a>
                    <a href='/individual'>
                        <p>Meetings & Events</p>
                    </a>
                    <a href='/employer'>
                        <p>Employer</p>
                    </a>
                </div>
                <div className='sb_footer-links-div'>
                <h4>Coming soon on</h4>
                <div className='socialMedia'>
                    <p><img src={fb} alt="facebook" width='30px'/></p>
                    <p><img src={ins} alt="instagram" width='30px'/></p>
                    <p><img src={mail} alt="gmail" width='30px'/></p>
                </div>
                </div>
            </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} HarmonySpa. All rights reserved.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href='/terms'><div><p>Terms & Conditions</p></div></a>
                    <a href='/privacy'><div><p>Privacy</p></div></a>
                    <a href='/security'><div><p>Security</p></div></a>
                    <a href='/cookie'><div><p>Cookie Delaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}
