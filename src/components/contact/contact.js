import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useInView } from 'react-intersection-observer';
import "./contact.css";

import phoneImg from "../../assests/svg/phone.svg";
import emailImg from "../../assests/svg/email.svg";
import locationImg from "../../assests/svg/location.svg";

export default function Contact () {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [statusMessage, setStatusMessage] = useState("");
    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Full Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }
        if (!formData.phone) {
            formErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = 'Phone number is invalid';
        }
        if (!formData.subject) formErrors.subject = 'Subject is required';
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Handle form submission
            emailjs.sendForm('service_fut766f', 'template_coftygp', e.target, 'ygKN_-2_Sv2AK_toF')
                .then((result) => {
                    setStatusMessage("Message sent successfully!");
                    setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                    setErrors({});
                }, (error) => {
                    // setStatusMessage("Failed to send the message, please try again.");
                });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className={`contact ${contactInView ? 'animate' : ''}`} ref={contactRef}>
            <div className="contact-container">
                <div className="form-section">
                    <h2 className='form-title'>Drop us a message</h2>
                    <p className="form-description">We will get back to you as soon as possible.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <span className="error">{errors.name}</span>}
                            </div>
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && <span className="error">{errors.phone}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                                {errors.subject && <span className="error">{errors.subject}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-container">
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                {errors.message && <span className="error">{errors.message}</span>}
                            </div>
                        </div>
                        <button className="form-button" type="submit">Send</button>
                        {statusMessage && <p className="status-message">{statusMessage}</p>}
                    </form>
                </div>
                <div className="contact-info">
                    <div className="info-item">
                        <img className="info-icon" src={phoneImg} alt="Phone" />
                        <div>
                            <p>0469 768 409</p>
                            <p>0286 064 198</p>
                            <span>Free support</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <img className="info-icon" src={emailImg} alt="Email" />
                        <div>
                            <p>zieengineering20@gmail.com</p>
                            <span>Help Email support</span>
                        </div>
                    </div>
                    <div className="info-item">
                        <img className="info-icon" src={locationImg} alt="Location" />
                        <div>
                            <p>Unit 7, 17A </p>
                            <p>Amax Ave</p>
                            <p>Girraween</p>
                            <p>NSW 2145</p>
                            <p>Australia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};