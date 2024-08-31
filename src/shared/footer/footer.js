import React from 'react';
import { useInView } from 'react-intersection-observer';
import './footer.css';

import facebookSvg from '../../assests/svg/facebook.svg';
import twitterSvg from '../../assests/svg/twitter.svg';
import linkedinSvg from '../../assests/svg/linkedin.svg';
import instagramSvg from '../../assests/svg/instagram.svg';

export default function Footer () {
    const { ref: headerRef, inView: headerInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <footer>
            <div className={`footer ${headerInView ? 'animate' : ''}`} ref={headerRef}>
                <div className="footer-container">
                    <div className="logo">
                        {/* <img src="path-to-your-logo.png" alt="Zie Engineering" /> */}
                        <h3 className='footer-heading'>Zie Engineering</h3>
                    </div>
                    {/* <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Service</li>
            <li>Resource</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </nav> */}
                    <p className="description">
                        At Zie Engineering, we excel in delivering high-quality, precise, and innovative CNC machined parts that meet the diverse needs of our clients.
                    </p>
                    {/* <div className="social-icons">
                        <img src={facebookSvg} alt="Facebook" className='social-icon' />
                        <img src={twitterSvg} alt="Twitter" className='social-icon' />
                        <img src={linkedinSvg} alt="LinkedIn" className='social-icon' />
                        <img src={instagramSvg} alt="Instagram" className='social-icon' />
                    </div> */}
                </div>
            </div>
        </footer>
    );
};
