import React, { useRef, useState } from "react";
import Landing from "../../components/landing/landing";
import Contact from "../../components/contact/contact";
import Footer from "../../shared/footer/footer";
import Header from "../../shared/header/Header";

const Home = () => {
    const contactRef = useRef(null);

    const scrollToSection = (section) => {
        const scrollOptions = {
            behavior: 'smooth',
            block: 'start'
        };
        if (section === 'contact') {
            contactRef.current.scrollIntoView(scrollOptions);
        }
    }
    return (
        <>
            <Header />
            <Landing scrollToSection={scrollToSection}/>
            <div ref={contactRef}>
                <Contact />
            </div>
            <Footer />
        </>
    );
};

export default Home;