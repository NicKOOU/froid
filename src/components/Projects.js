import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick'; // Import de react-slick pour le carrousel
import projectImage from '../assets/project1.jpg'; // Import unique de l'image (à adapter si tu as plusieurs images)

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    // Données des projets
    const projects = [
        {
            id: 1,
            title: '食品冷库 - 上海',
            desc: '高效冷冻食品储存解决方案',
            img: projectImage,
            gallery: [projectImage, projectImage, projectImage],
        },
        {
            id: 2,
            title: '工业冷库 - 北京',
            desc: '大规模工业冷藏设施',
            img: projectImage,
            gallery: [projectImage, projectImage, projectImage],
        },
        {
            id: 3,
            title: '商业冷库 - 广州',
            desc: '商业用途的冷链支持',
            img: projectImage,
            gallery: [projectImage, projectImage, projectImage],
        },
        {
            id: 4,
            title: '物流冷库 - 深圳',
            desc: '物流中心的冷链优化',
            img: projectImage,
            gallery: [projectImage, projectImage, projectImage],
        },
    ];

    // Configuration du carrousel
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="projects">
            {/* Titre avec animation simple */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                项目案例
            </motion.h2>

            {/* Galerie de projets */}
            <div className="projects-gallery">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-item"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        onClick={() => setSelectedProject(project)}
                    >
                        <img src={project.img} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal du carrousel */}
            {selectedProject && (
                <div
                    className="carousel-modal"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="carousel-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-button"
                            onClick={() => setSelectedProject(null)}
                        >
                            ✕
                        </button>
                        <h3>{selectedProject.title}</h3>
                        <Slider {...sliderSettings}>
                            {selectedProject.gallery.map((image, index) => (
                                <div key={index}>
                                    <img
                                        src={image}
                                        alt={`${selectedProject.title} - ${index + 1}`}
                                        className="carousel-image"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Projects;