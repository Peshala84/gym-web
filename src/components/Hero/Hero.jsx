import React from 'react'
import './Hero.css'
import '../../App.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

    const transition = {type: 'spring' , duration : 3};
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                <div className="the-best-ad">
                    <motion.div
                     initial = {{left: mobile ? "178px" : "238px"}}
                     whileInView={{left: '8px'}}
                     transition={{...transition, type: 'tween'}}
                    >
                        

                    </motion.div>
                    <span>The best fitness club in the Sri Lanka</span>
                </div>

                <div className="hero-text" >
                    <div>
                        <span className='stroke-text'>Shape  </span>
                        <span>Your </span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            In here we will help you to share and build your ideal body and live uup your life to fullest
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>

                            <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                        </span>
                        <span>expert coachs</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>

                        </span>
                        <span>Members joined</span>
                    </div>
                    <div>
                        <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>

                        </span>
                        <span>Fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join now</button>

                <motion.div 
                initial={{right: '-1rem'}}
                whileInView={{right: '4rem'}}
                transition={{...transition, type: 'tween'}}
                 className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img 

                initial={{right: '11rem'}}
                whileInView={{right: '17rem'}}
                transition={{...transition, type: 'tween'}}
                
                src={hero_image_back} alt="" className='hero-image-back' />

                <motion.div

                initial={{right: '37rem'}}
                whileInView={{right: '28rem'}}
                transition={{...transition, type: 'tween'}}
                
                className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero