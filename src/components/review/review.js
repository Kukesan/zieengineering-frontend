import React from 'react';
import './review.css';

const reviewsData = [
    {
        text: "I've been sourcing parts from [Your Company Name] for over a year, and they never disappoint. Their multi-axis CNC machining capabilities are top-notch, and their customer service is excellent.",
        name: "Hellen Jummy",
        image: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg",
        rating: 5,
    },
    {
        text: "From start to finish, company provided an outstanding experience. Their CNC turning services are incredibly precise, and the turnaround time was impressive. Will definitely use their services again.",
        name: "Hellena John",
        image: "https://image1.masterfile.com/getImage/NzAwLTAwNjA4NDgwZW4uMDAwMDAwMDA=AN7Puh/700-00608480en_Masterfile.jpg",
        rating: 3,
    },
    {
        text: "We needed custom-made parts for a complex project, and [Your Company Name] delivered flawlessly. The quality and precision of their work are unmatched. Great communication and reliable service.",
        name: "David Oshodi",
        image: "https://thumbs.dreamstime.com/b/head-shot-portrait-confident-businessman-looking-camera-posing-profile-picture-making-video-call-to-business-partners-coach-212585716.jpg",
        rating: 4,
    },
    {
        text: "Outstanding reliability and consistency. The parts manufactured by [Your Company Name] have never let us down. Great service and timely delivery.",
        name: "Samantha Smith",
        image: "https://thumbs.dreamstime.com/b/close-up-headshot-portrait-smiling-young-caucasian-businessman-formal-suit-look-camera-posing-office-profile-picture-288411750.jpg",
        rating: 2,
    },
];

const Review = () => {
    return (
        <div className="review-container">
         <p className="container-title">USER REVIEWS</p>
         <h1 className="container-heading">SEE WHAT OUR CUSTOMERS SAY</h1>
            <div className="reviews-wrapper">
                <div className="reviews-carousel">
                    {reviewsData.map((review, index) => (
                        <div key={index} className="review-item">
                            <p>{review.text}</p>
                            <div className="reviewer">
                                <img src={review.image} alt={review.name} />
                                <div className="reviewer-info">
                                    <p>{review.name}</p>
                                    <div className="reviewer-rating">
                                        {Array(review.rating).fill().map((_, i) => (
                                            <span key={i}>&#9733;</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Duplicate the reviews to create a seamless loop */}
                    {reviewsData.map((review, index) => (
                        <div key={`duplicate-${index}`} className="review-item">
                            <p>{review.text}</p>
                            <div className="reviewer">
                                <img src={review.image} alt={review.name} />
                                <div className="reviewer-info">
                                    <p>{review.name}</p>
                                    <div className="reviewer-rating">
                                        {Array(review.rating).fill().map((_, i) => (
                                            <span key={i}>&#9733;</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Review;
