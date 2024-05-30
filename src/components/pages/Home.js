import img1 from './pictures/jacuzzi-sauna-steam.webp';
import img2 from './pictures/pexels-polina-tankilevitch-3736326.jpg';
import img3 from './pictures/insung-yoon-baLUAKBNsG4-unsplash.jpg';
import background from './pictures/two-beautiful-girls.jpg';
import './Home.css';
import React from "react";
import Carousel from './Carousel';
import { Footer } from '../Footer';


function Home(){

    return(
<div>
        <div>
            <img src={img1} className="Spa" alt="Spa" width="100%" height="550px"/>
        </div>
                <div>
            <h3 className="OpenSign">Welcome To The Harmony Day Spa</h3>
            <p className="PWelcome">Open - Daily, 10AM - 10PM </p>
                </div>
                        <div className='Container'>
                <div className='Text'>
                    <h2>First time visit?</h2>
                <p>Escape the fast pace of urban life to the tranquil haven of Soul Wellness and Spa that rejuvenates your body, clears your mind and reawakens your soul.</p>
                <p>Experience pure relaxation with our signature luxury treatments, where science and nature combine, providing the unique wellness and skincare results you desire. Immerse yourself within our enriching body oil massages, blissful facials and invigorating body treatments. Emerge feeling brighter, rejuvenated, centred and ready for the journey ahead.</p>
                <p>The Harmony Wellness & Spa - Escape. Experience. Emerge.</p>
                <button>Read More</button>
                </div>
                <div className='ImageSpa'>
                    <img className='Img2' src={img2} alt="welcome img" width="90%" />
                </div>
                        </div>
                        <div>
                            <h3 className="OpenSign">Spa Services</h3>
                        </div>

                        {/* <Carousel /> */}

                        <div className='Container'>
                    <div className='GiftCard'>
                    <img className="GI" src={img3} alt="GCI" width="500px" height="400px" />
                    
                </div>
                <div className='GiftText'>
                    <h2>A Spring in Their Step​</h2>
                <p>This season, give the gift of a restorative spa experience. Help your loved one find their balance with holistic spa experiences tailored to their needs.</p>
                <button className='BtnGI'>Purchase a Gift Card</button>
                </div>
                
                        </div>

                        <div className="Membership" style={{backgroundImage:`url(${background})`,
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundSize: "cover",
                                                            width:"100%",
                                                            height:"500px",

                                                            }}>
                            <div className="MembershipText">
                                <h4 className='MembSign'>Our Premium Spa Membership</h4>
                                <p>Welcome to the distinguished Premium Spa Membership section of The Harmony Day Spa, your ultimate retreat for indulgence and relaxation.</p>
                                <p> Here, we are excited to offer an array of exclusive spa memberships designed to cater to every wellness need.</p>
                                <p>From facials to massages, and somadome sessions to all, each has been meticulously curated to enhance your journey towards holistic well-being.</p>
                                <div className='MembBtn'>
                                <button className='Btn1'>Book An Appoitment</button>
                                <button className='Btn2'>      Call Now</button>
                                </div>
                        </div>
                        </div>
                        <Footer />
</div>
    )}
export default Home;