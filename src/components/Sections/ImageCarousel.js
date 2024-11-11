import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/lofi_bulbasaur.png';
import img2 from '../../assets/bewitchingmissfortuneprestige.png';
import img3 from '../../assets/ceruledgelul.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './ImageCarousel.module.css'; // Import the CSS module

const images = [
    { src: img1, alt: "Lofi Bulbasaur", caption: "Lofi Bulbasaur", description: "A relaxing lofi Bulbasaur." },
    { src: img2, alt: "Bewitching Miss Fortune", caption: "Bewitching Miss Fortune", description: "Prestige edition of Bewitching Miss Fortune." },
    { src: img3, alt: "Ceruledge", caption: "Ceruledge", description: "Ceruledge in a cool pose." }
];

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        pauseOnHover: true,
    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.title}>Check out some of my art!</h2>
            <h5 className={styles.title}>All my work is done on mspaint with just a mouse!</h5>
            <Slider {...settings} className={styles.carousel}>
                {images.map((image, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <img src={image.src} alt={image.alt} className={styles.image} />
                        <div className={styles.caption}>
                            <h3>{image.caption}</h3>
                            <p>{image.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
