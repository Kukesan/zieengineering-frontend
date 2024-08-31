import React, { useEffect, useRef, useState } from 'react';
import './services.css';

const Services = () => {
    const containerRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const servicesData = [
        {
            icon: "📦",
            title: "CNC Milling",
            description: "Our CNC Milling services use advanced computer-controlled rotary cutters to remove material from workpieces, creating precise and complex parts tailored to your specifications."
        },
        {
            icon: "⚙️",
            title: "CNC Turning",
            description: "Our CNC Turning services employ precision lathe tools to rotate workpieces while shaping them with cutting tools, resulting in accurate and efficient production of cylindrical components."
        },
        {
            icon: "🔩",
            title: "Custom Made Parts",
            description: "Our service designs and manufactures components to meet your unique requirements, offering tailored solutions for various industrial applications."
        },
        {
            icon: "🏗️",
            title: "Multi-axis CNC Machining",
            description: "We offer Multi-axis CNC Machining, utilizing machines with multiple axes of movement to produce intricate and highly detailed custom parts from a variety of materials."
        }
    ];
    

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
        <div ref={containerRef} className="services-container">
            <h1 className="services-title">We made this app to solve your problems.</h1>
            <div className="services-grid">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-item fade-up">
                        <div className="service-icon">{service.icon}</div>
                        <div className="service-content">
                            <h2 className='service-content-title'>{service.title}</h2>
                            <p className='service-content-description'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
