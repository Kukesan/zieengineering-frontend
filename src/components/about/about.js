import React, { useEffect, useRef, useState } from 'react';
import './about.css';

const aboutImg1 = 'https://www.mtt.uk.com/wp-content/uploads/2019/05/CNC-Mechanical-Engineering-2.jpg';
const aboutImg2 = 'https://media.licdn.com/dms/image/C5612AQELpbHVzOdkWg/article-cover_image-shrink_720_1280/0/1520164504536?e=2147483647&v=beta&t=sOTEnnKAeUnf1-XumGtRulEjF5UhI-8Qzc6UJaoeyXw';
const aboutImg3 = 'https://img1.wsimg.com/isteam/ip/f7671400-0bfd-4fde-801d-c7a0f186231f/cnc-machinist.jpg';

const About = () => {
    const containerRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    entry.target.classList.add('animate');
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div ref={containerRef} className="about-container">
            <p className="container-title">ABOUT US</p>
            <h1 className="container-heading">GET TO KNOW US</h1>
            <p className="about-description fade-up">
                We redefine precision in CNC machining. Specializing in CNC Milling, Multi-axis Machining, Custom Parts, and CNC Turning, we combine cutting-edge technology with unparalleled craftsmanship. Our dedicated team turns your unique requirements into expertly crafted solutions, ensuring excellence and precision in every detail. Experience our services—where innovation and quality converge to bring your visions to life.
            </p>
            <button className="read-more-button fade-up">READ MORE</button>
            <div className="images-container">
                <img src={aboutImg1} alt="Image 1" className="about-image fade-right" />
                <img src={aboutImg2} alt="Image 2" className="about-image center-image fade-up" />
                <img src={aboutImg3} alt="Image 3" className="about-image fade-left" />
            </div>
        </div>
    );
}

export default About;
