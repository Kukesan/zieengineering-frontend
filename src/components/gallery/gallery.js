import React, { useEffect, useRef, useState } from 'react';
import './gallery.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const galleryData = [
    { src: 'https://zieengineeringimages.s3.amazonaws.com/5e9589799aea1High-precision-turning-components.jpg', alt: 'Image 1' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/5e958ad8c738fBronze-CNC-Turned-Parts.jpg', alt: 'Image 2' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/CNC-machining-1280x720.jpg', alt: 'Image 3' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/CNC-Threading.jpeg', alt: 'Image 4' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/cnc-turned-components-machining.jpg', alt: 'Image 5' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/cnc-turned-components.jpg', alt: 'Image 6' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/CNC-turning-1.jpg', alt: 'Image 7' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/cnc-turning-center-3d-graphic.jpeg', alt: 'Image 8' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/depositphotos_18592409-stock-photo-cnc-machinery-detail.jpg', alt: 'Image 9' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/Hub-and-Rings.jpg', alt: 'Image 10' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/ply-1.jpg', alt: 'Image 11' },
    { src: 'https://zieengineeringimages.s3.amazonaws.com/shutterstock_304656242.jpg', alt: 'Image 12' },
];

const Gallery = () => {
    const [modalImage, setModalImage] = useState(null);
    const containerRef = useRef(null);

    const openModal = (image) => {
        setModalImage(image);
        document.body.style.overflow = 'hidden'; // Disable scrolling when modal is open
    };

    const closeModal = () => {
        setModalImage(null);
        document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const items = entry.target.querySelectorAll('.gallery-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('visible');
                        }, index * 200); // Delay of 200ms for each item
                    });
                    observer.unobserve(entry.target);
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
    }, []);

    return (
        <div ref={containerRef} className="gallery-container">
            <p className="container-title">OUR GALLERY</p>
            <h1 className="container-heading">EXPLORE WHAT WE HAVE ACHIEVED SO FAR</h1>
            <div className="gallery-grid">
                {galleryData.map((image, index) => (
                    <div key={index} className={`gallery-item item-${index}`} onClick={() => openModal(image)}>
                        <LazyLoadImage src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            {modalImage && (
                <div className="modal" style={{ display: 'flex' }} onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <LazyLoadImage className="modal-content" src={modalImage.src} alt={modalImage.alt} />
                </div>
            )}
        </div>
    );
};

export default Gallery;
