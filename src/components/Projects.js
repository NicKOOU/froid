import React from 'react';
import { motion } from 'framer-motion';
import projectImage from '../assets/泰州中医院.png';
import projectImage2 from '../assets/江苏艾兰德营养品有限公司.jpg';
import projectImage3 from '../assets/湖州农产品批发市场.png';
import projectImage4 from '../assets/王氏高淳水产养殖基地.jpg';
import projectImage5 from '../assets/兴化周氏食品有限公司.jpg';
import projectImage6 from '../assets/苏州菜甄鲜食品有限公司.jpg';
import projectImage7 from '../assets/江苏百汇农业发展有限公司.jpg';

function Projects() {
    const projects = [
        {
            id: 1,
            title: '泰州中医院',
            img: projectImage,
            desc: '为泰州中医院提供了全套医疗冷库解决方案，包括药品冷藏、样本保存、特殊试剂储存等多个温区的冷库系统。'
        },
        {
            id: 2,
            title: '江苏艾兰德营养品有限公司',
            img: projectImage2,
            desc: '为艾兰德营养品公司打造了食品级标准的原料与成品双温区冷库，确保产品在生产和存储过程中的品质与安全。'
        },
        {
            id: 3,
            title: '湖州农产品批发市场',
            img: projectImage3,
            desc: '设计建造的大型气调保鲜冷库，为农产品批发市场提供了稳定的温湿度环境，延长果蔬保鲜期，减少损耗。'
        },
        {
            id: 4,
            title: '王氏高淳水产养殖基地',
            img: projectImage4,
            desc: '为水产养殖基地定制的快速冷冻和低温储存冷库系统，保障水产品的新鲜度和口感，提升产品市场竞争力。'
        },
        {
            id: 5,
            title: '兴化周氏食品有限公司',
            img: projectImage5,
            desc: '为周氏食品公司提供的速冻加工车间和成品冷库整体解决方案，满足大规模食品加工企业的生产需求。'
        },
        {
            id: 6,
            title: '苏州菜甄鲜食品有限公司',
            img: projectImage6,
            desc: '为菜甄鲜打造的一体化冷链系统，涵盖加工、冷藏、物流配送的全流程控温方案，确保食品安全与品质。'
        },
        {
            id: 7,
            title: '江苏百汇农业发展有限公司',
            img: projectImage7,
            desc: '为百汇农业定制的智能化气调保鲜冷库群，配备远程监控系统，实现温湿度精准控制和智能化管理。'
        }
    ];

    return (
        <div className="projects-page">
            <div className="projects-header">
                <h2>我们的项目</h2>
                <div className="header-line"></div>
            </div>

            <div className="projects-container">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="project-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="project-image"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = projectImage; // Fallback image
                            }}
                        />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <style jsx>{`
                .projects-page {
                    padding: 60px 0;
                    background-color: #f9f9f9;
                }
                .projects-header {
                    text-align: center;
                    margin-bottom: 40px;
                }
                .projects-header h2 {
                    font-size: 36px;
                    color: #333;
                    margin-bottom: 10px;
                }
                .header-line {
                    width: 60px;
                    height: 3px;
                    background-color: #1890ff;
                    margin: 0 auto;
                }
                .projects-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
                    gap: 25px;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .project-card {
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .project-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
                }
                .project-image {
                    width: 100%;
                    height: 220px;
                    object-fit: cover;
                }
                .project-info {
                    padding: 20px;
                }
                .project-info h3 {
                    margin: 0 0 10px 0;
                    font-size: 20px;
                    color: #333;
                }
                .project-info p {
                    margin: 0;
                    color: #666;
                    line-height: 1.5;
                }
                @media (max-width: 768px) {
                    .projects-container {
                        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    }
                    .projects-header h2 {
                        font-size: 28px;
                    }
                    .project-info h3 {
                        font-size: 18px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Projects; 