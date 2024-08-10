import React, { useEffect, useRef } from 'react';
import './valuesSection.css';

import icon1 from '../../assests/svg/value-proposition.svg';
import icon2 from '../../assests/svg/clock.svg';
import icon3 from '../../assests/svg/analysis.svg';
import icon4 from '../../assests/svg/quality-assurance.svg';

const ValuesSection = () => {
  const valuesSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);  // Stop observing the element after the first trigger
        }
      });
    });

    const elements = valuesSectionRef.current.querySelectorAll('.value-card');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const values = [
    { title: 'Value', description: 'Competitive Pricing and Value for money', icon: icon1 },
    { title: 'Punctuality', description: 'Timely delivery to meet your requirements', icon: icon2 },
    { title: 'Traceability', description: 'Fully traceable Quality', icon: icon3 },
    { title: 'Assurance', description: 'Service, Support and Confidence', icon: icon4 },
  ];

  return (
    <div className="values-container" ref={valuesSectionRef}>
      {values.map((value, index) => (
        <div className="value-card" key={index}>
          <div className="icon-container"><img className='icon-img' src={value.icon} alt={value.title} /></div>
          <h3 className='value-title'>{value.title}</h3>
          <p className='value-description'>{value.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ValuesSection;
