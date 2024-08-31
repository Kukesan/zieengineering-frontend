import React, { useRef, useState } from "react";
import Landing from "../../components/landing/landing";
import Contact from "../../components/contact/contact";
import Footer from "../../shared/footer/footer";
import Header from "../../shared/header/Header";
import About from "../../components/about/about";
import Services from "../../components/services/services";
import Gallery from "../../components/gallery/gallery";
import Review from "../../components/review/review";
import ValuesSection from "../../components/mission/valuesSection";

export default function Home() {
    const homeRef = useRef(null);
    const aboutUsRef = useRef(null);
    const servicesRef = useRef(null);
    const galleryRef = useRef(null);
    const reviewsRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start'
        };
        if(section === 'home') {
            homeRef.current.scrollIntoView(scrollOptions);
        }else if (section === 'aboutUs') {
            aboutUsRef.current.scrollIntoView(scrollOptions);
        }else if (section === 'services') {
            servicesRef.current.scrollIntoView(scrollOptions);
        }else if (section === 'gallery') {
            galleryRef.current.scrollIntoView(scrollOptions);
        }else if (section === 'reviews') {
            reviewsRef.current.scrollIntoView(scrollOptions);
        }else if (section === 'contact') {
            contactRef.current.scrollIntoView(scrollOptions);
        }
    }
    return (
        <>
            <div ref={homeRef}>
                <Header scrollToSection={scrollToSection} />
                <Landing scrollToSection={scrollToSection} />
            </div>
            <ValuesSection />
            <div ref={aboutUsRef}>
                <About />
            </div>
            <div ref={servicesRef}>
                <Services />
            </div>
            <div ref={galleryRef}>
                <Gallery />
            </div>
            {/* <div ref={reviewsRef}>
                <Review />
            </div> */}
            <div ref={contactRef}>
                <Contact />
            </div>
            <Footer />
        </>
    );
};