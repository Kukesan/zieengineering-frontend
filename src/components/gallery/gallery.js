import React, { useEffect, useRef, useState } from 'react';
import './gallery.css';

const galleryData = [
    { src: 'https://www.cncmasters.com/wp-content/uploads/2021/07/cnc-day-in-life-1.jpg', alt: 'Image 1' },
    { src: 'https://www.tempstarstaffing.com/2022/10/20/what-is-a-cnc-operator-and-what-do-they-do/worker-in-metal-industry-operating-a-modern-cnc-machine/', alt: 'Image 2' },
    { src: 'https://img.newequipment.com/files/base/ebm/newequipment/image/2022/08/AdobeStock_327876982.62fc089a2325d.png?auto=format%2Ccompress&w=320', alt: 'Image 3' },
    { src: 'https://25784863.fs1.hubspotusercontent-eu1.net/hub/25784863/hubfs/CaseStudies_Header-1.png?width=575&name=CaseStudies_Header-1.png', alt: 'Image 4' },
    { src: 'https://t4.ftcdn.net/jpg/03/36/12/57/360_F_336125721_lMvrxLFIMf2UfVm0zozrYKLmYtwvxmzZ.jpg', alt: 'Image 5' },
    { src: 'https://t3.ftcdn.net/jpg/03/10/56/60/360_F_310566044_npH4T8KUv0Siv2JkAdVGOAsExqyEpsxT.jpg', alt: 'Image 6' },
    { src: 'https://s3.envato.com/files/293149165/DSC_6842.jpg', alt: 'Image 7' },
    { src: 'https://previews.123rf.com/images/primagefactory/primagefactory1708/primagefactory170800511/83698403-back-view-photo-of-elegant-woman-lathe-worker-working-at-milling-machine-department-and-using-pliers.jpg', alt: 'Image 8' },
    { src: 'https://static3.bigstockphoto.com/0/9/2/large1500/290005882.jpg', alt: 'Image 9' },
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
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            {modalImage && (
                <div className="modal" style={{ display: 'flex' }} onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={modalImage.src} alt={modalImage.alt} />
                </div>
            )}
        </div>
    );
};

export default Gallery;
