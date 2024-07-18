import React from "react";
import Landing from "../../components/landing/landing";
import Contact from "../../components/contact/contact";
import Footer from "../../shared/footer/footer";
import Header from "../../shared/header/Header";

const Home = () => {
    return (
        <>
            <Header />
            <Landing />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;