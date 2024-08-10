import React, { useEffect, useRef, useState } from 'react';
import './about.css';

const aboutImg1 = 'https://zieengineeringimages.s3.amazonaws.com/2.jpg';
const aboutImg2 = 'https://zieengineeringimages.s3.amazonaws.com/20240807_100927.jpg';
const aboutImg3 = 'https://zieengineeringimages.s3.amazonaws.com/eszterga-se-cam-pro.jpg';

const About = () => {
    const containerRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [showMore, setShowMore] = useState(false);

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

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div ref={containerRef} className="about-container">
            <p className="container-title">ABOUT US</p>
            <h1 className="container-heading">GET TO KNOW US</h1>
            <p className="about-description fade-up">
                We redefine precision in CNC machining. Specializing in CNC Milling, Multi-axis Machining, Custom Parts, and CNC Turning, we combine cutting-edge technology with unparalleled craftsmanship. Our dedicated team turns your unique requirements into expertly crafted solutions, ensuring excellence and precision in every detail. Experience our services—where innovation and quality converge to bring your visions to life.
            </p>
            <button className="read-more-button fade-up" onClick={toggleShowMore}>
                {showMore ? "SHOW LESS" : "READ MORE"}
            </button>
            {showMore && (
                <div className="extra-info fade-up">
                    <p>Our company was founded with the goal of providing high-quality CNC machining services to clients across various industries. With years of experience and a commitment to excellence, we have built a reputation for delivering precision and reliability in every project we undertake.</p>
                    <p>We continuously invest in the latest technology and training for our team to ensure that we stay at the forefront of the industry. Whether you need custom parts, multi-axis machining, or any other CNC services, we have the expertise and equipment to meet your needs.</p>
                    <p>Contact us today to learn more about our services and how we can help you achieve your manufacturing goals.</p>
                </div>
            )}
            <div className="images-container">
                <img src={aboutImg1} alt="Image 1" className="about-image fade-right" />
                <img src={aboutImg2} alt="Image 2" className="about-image center-image fade-up" />
                <img src={aboutImg3} alt="Image 3" className="about-image fade-left" />
            </div>
        </div>
    );
}

export default About;
