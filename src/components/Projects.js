import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project1.jpg';
import project3 from '../assets/project1.jpg';
import project4 from '../assets/project1.jpg';

function Projects() {
    const projects = [
        {
            id: 1,
            title: '食品冷库 - 上海',
            desc: '高效冷冻食品储存解决方案',
            img: project1,
            gallery: [project1, project1, project1],
        },
        {
            id: 2,
            title: '工业冷库 - 北京',
            desc: '大规模工业冷藏设施',
            img: project2,
            gallery: [project2, project1, project1],
        },
        {
            id: 3,
            title: '商业冷库 - 广州',
            desc: '商业用途的冷链支持',
            img: project3,
            gallery: [project3, project1, project1],
        },
        {
            id: 4,
            title: '物流冷库 - 深圳',
            desc: '物流中心的冷链优化',
            img: project4,
            gallery: [project4, project1, project1],
        },
    ];

    const [selectedProject, setSelectedProject] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <section className="projects">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                项目案例
            </motion.h2>
            <div className="projects-gallery">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
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

            {/* Carrousel Pop-up */}
            {selectedProject && (
                <div className="carousel-modal" onClick={() => setSelectedProject(null)}>
                    <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedProject(null)}>
                            ✕
                        </button>
                        <h3>{selectedProject.title}</h3>
                        <Slider {...settings}>
                            {selectedProject.gallery.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`${selectedProject.title} - ${index}`} className="carousel-image" />
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