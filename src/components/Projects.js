import React from 'react';
import { motion } from 'framer-motion';
import project1 from '../assets/project1.jpg'; // Ajoute des images dans src/assets/
import project2 from '../assets/project1.jpg';
import project3 from '../assets/project1.jpg';
import project4 from '../assets/project1.jpg';

function Projects() {
    const projects = [
        { id: 1, title: '食品冷库 - 上海', img: project1 },
        { id: 2, title: '工业冷库 - 北京', img: project2 },
        { id: 3, title: '商业冷库 - 广州', img: project3 },
        { id: 4, title: '物流冷库 - 深圳', img: project4 },
    ];

    return (
        <section className="projects">
            <h2>项目案例</h2>
            <div className="projects-gallery">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-item"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                    >
                        <img src={project.img} alt={project.title} />
                        <div className="project-overlay">
                            <p>{project.title}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;