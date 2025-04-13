import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import projectImage from '../assets/泰州中医院.png';
import projectImage2 from '../assets/江苏艾兰德营养品有限公司.jpg';
import projectImage3 from '../assets/湖州农产品批发市场.png';
import projectImage4 from '../assets/王氏高淳水产养殖基地.jpg';
import projectImage5 from '../assets/兴化周氏食品有限公司.jpg';
import projectImage6 from '../assets/苏州菜甄鲜食品有限公司.jpg';
import projectImage7 from '../assets/江苏百汇农业发展有限公司.jpg';

// Import directory images dynamically
// 食品冷库 images
const 食品冷库Images = require.context('../assets/食品冷库/', false, /\.(png|jpe?g)$/);
const 食品冷库Files = 食品冷库Images.keys().map(image => 食品冷库Images(image));

// 医药冷库 images
const 医药冷库Images = require.context('../assets/医药冷库/', false, /\.(png|jpe?g)$/);
const 医药冷库Files = 医药冷库Images.keys().map(image => 医药冷库Images(image));

// 餐饮冷库 images
const 餐饮冷库Images = require.context('../assets/餐饮冷库/', false, /\.(png|jpe?g)$/);
const 餐饮冷库Files = 餐饮冷库Images.keys().map(image => 餐饮冷库Images(image));

// 工业冷库 images
const 工业冷库Images = require.context('../assets/工业冷库/', false, /\.(png|jpe?g)$/);
const 工业冷库Files = 工业冷库Images.keys().map(image => 工业冷库Images(image));

// 气调冷库 images
const 气调冷库Images = require.context('../assets/气调冷库/', false, /\.(png|jpe?g)$/);
const 气调冷库Files = 气调冷库Images.keys().map(image => 气调冷库Images(image));

// 科研冷库 images
const 科研冷库Images = require.context('../assets/科研冷库/', false, /\.(png|jpe?g)$/);
const 科研冷库Files = 科研冷库Images.keys().map(image => 科研冷库Images(image));

// 物流冷库 images
const 物流冷库Images = require.context('../assets/物流冷库/', false, /\.(png|jpe?g)$/);
const 物流冷库Files = 物流冷库Images.keys().map(image => 物流冷库Images(image));

// 速冻冷库 images
const 速冻冷库Images = require.context('../assets/速冻冷库/', false, /\.(png|jpe?g)$/);
const 速冻冷库Files = 速冻冷库Images.keys().map(image => 速冻冷库Images(image));

function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            title: "食品冷库",
            img: 食品冷库Files.length > 0 ? 食品冷库Files[0] : projectImage,
            gallery: 食品冷库Files.length > 0 ? 食品冷库Files : [projectImage, projectImage2, projectImage3]
        },
        {
            id: 2,
            title: "医药冷库",
            img: 医药冷库Files.length > 0 ? 医药冷库Files[0] : projectImage2,
            gallery: 医药冷库Files.length > 0 ? 医药冷库Files : [projectImage2, projectImage3, projectImage4]
        },
        {
            id: 3,
            title: "餐饮冷库",
            img: 餐饮冷库Files.length > 0 ? 餐饮冷库Files[0] : projectImage3,
            gallery: 餐饮冷库Files.length > 0 ? 餐饮冷库Files : [projectImage3, projectImage4, projectImage5]
        },
        {
            id: 5,
            title: "工业冷库",
            img: 工业冷库Files.length > 0 ? 工业冷库Files[0] : projectImage5,
            gallery: 工业冷库Files.length > 0 ? 工业冷库Files : [projectImage5, projectImage6, projectImage7]
        },
        {
            id: 6,
            title: "气调冷库",
            img: 气调冷库Files.length > 0 ? 气调冷库Files[0] : projectImage6,
            gallery: 气调冷库Files.length > 0 ? 气调冷库Files : [projectImage6, projectImage7, projectImage]
        },
        {
            id: 7,
            title: "科研冷库",
            img: 科研冷库Files.length > 0 ? 科研冷库Files[0] : projectImage7,
            gallery: 科研冷库Files.length > 0 ? 科研冷库Files : [projectImage7, projectImage, projectImage2]
        },
        {
            id: 8,
            title: "物流冷库",
            img: 物流冷库Files.length > 0 ? 物流冷库Files[0] : projectImage,
            gallery: 物流冷库Files.length > 0 ? 物流冷库Files : [projectImage, projectImage3, projectImage5]
        },
        {
            id: 9,
            title: "速冻冷库",
            img: 速冻冷库Files.length > 0 ? 速冻冷库Files[0] : projectImage2,
            gallery: 速冻冷库Files.length > 0 ? 速冻冷库Files : [projectImage2, projectImage4, projectImage6]
        }
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="services-page">
            <div className="services-header">
                <h2>我们的服务</h2>
                <div className="header-line"></div>
            </div>

            <div className="services-container">
                {services.map((service) => (
                    <motion.div
                        key={service.id}
                        className="service-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setSelectedService(service)}
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="service-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = projectImage; // Fallback image
                            }}
                        />
                        <div className="service-info">
                            <h3>{service.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {selectedService && (
                <div className="carousel-modal" onClick={() => setSelectedService(null)}>
                    <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedService(null)}>✕</button>
                        <h3>{selectedService.title}</h3>
                        <Slider {...sliderSettings}>
                            {selectedService.gallery.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`${selectedService.title} - ${index + 1}`}
                                        className="carousel-image"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = projectImage; // Use a fallback image on error
                                        }}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Services;