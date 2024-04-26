import React from 'react';
import './Hero.css'
import myPhoto from '../../assets/me.jpg'
import virifiedIcon from '../../assets/verified.png'
import facebookIcon from '../../assets/facebook.png'
import instIcon from '../../assets/insta.png'
import linkedinIcon from '../../assets/linkedin.png'
import heroAnimation from '../../assets/animations/hero.json'
import Lottie from "lottie-react";
import { motion } from "framer-motion"
export default function home() {
  return (
    <section className='hero flex' id='about'>
      <div className='left-section'>
        <div className='parent-avatar'>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1.05 }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src={myPhoto} className='avatar'
          />

          <span>
            <img className='virified-icon' src={virifiedIcon} />
          </span>
        </div>
        <motion.h1 className='title'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}>
          Informatics Engineer, Web developer
        </motion.h1>
        <p className='sub-title'>Front End Developer with React.js</p>
        <div className='icons flex'>
          <div className='iconFacebook'>
            <a href="https://www.facebook.com/profile.php?id=100009063058247&mibextid=LQQJ4d" target="_blank"><img src={facebookIcon} /></a>
          </div>
          <div className='iconInsta'>
            <a href="https://www.instagram.com/mohammad_abukhader00?igsh=dmo1enM3ejI4cDR2&utm_source=qr" target="_blank"><img src={instIcon} /></a>
          </div>
          <div className='iconLinkedin'>
            <a href='https://www.linkedin.com/in/mohammad-abukhader-b39326291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank"><img src={linkedinIcon} /></a>
          </div>
        </div>
      </div>
      <div className='right-section animation flex'>
        <Lottie className='hero-animation'
          style={{ height: 350 }}
          animationData={heroAnimation} />
      </div>
    </section>
  )
}
