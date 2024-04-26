import React from "react";
import "./Footer.css";
import facebookIcon from '../../assets/facebook.png'
import instIcon from '../../assets/insta.png'
import linkedinIcon from '../../assets/linkedin.png'

export default function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
        <a href="https://www.facebook.com/profile.php?id=100009063058247&mibextid=LQQJ4d" target="_blank"><img className='iconFacebook' src={facebookIcon}/></a>
        </li>
        <li>
        <a href="https://www.instagram.com/mohammad_abukhader00?igsh=dmo1enM3ejI4cDR2&utm_source=qr" target="_blank"><img className='iconInsta' src={instIcon}/></a>
        </li>
        <li>
        <a href='https://www.linkedin.com/in/mohammad-abukhader-b39326291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'target="_blank"><img className='iconLinkedin' src={linkedinIcon}/></a>
        </li>
      </ul>

      <p className="sub-title">Designed and developed by Mohammad Abukhader © {new Date().getFullYear()}.</p>

    </footer>
  );
}
