import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import Slider from 'react-slick';
import heroImage from '../assets/project1.jpg';
import projectImage from '../assets/泰州中医院.png';
import projectImage2 from '../assets/江苏艾兰德营养品有限公司.jpg';
import projectImage3 from '../assets/湖州农产品批发市场.png';
import projectImage4 from '../assets/王氏高淳水产养殖基地.jpg';
import projectImage5 from '../assets/兴化周氏食品有限公司.jpg';
import projectImage6 from '../assets/苏州菜甄鲜食品有限公司.jpg';
import projectImage7 from '../assets/江苏百汇农业发展有限公司.jpg';
import chinaMap from '../assets/chinaMap.jpg';

function Home() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowScrollIndicator(false);
            } else {
                setShowScrollIndicator(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const projects = [
        {
            id: 1,
            title: '泰州中医院',
            img: projectImage,
            gallery: [projectImage, projectImage, projectImage]
        },
        {
            id: 2,
            title: '江苏艾兰德营养品有限公司',
            img: projectImage2,
            gallery: [projectImage2, projectImage2, projectImage2]
        },
        {
            id: 3,
            title: '湖州农产品批发市场',
            img: projectImage3,
            gallery: [projectImage3, projectImage3, projectImage3]
        },
        {
            id: 4,
            title: '王氏高淳水产养殖基地',
            img: projectImage4,
            gallery: [projectImage3, projectImage3, projectImage3]
        },
        {
            id: 5,
            title: '兴化周氏食品有限公司',
            img: projectImage5,
            gallery: [projectImage3, projectImage3, projectImage3]
        },
        {
            id: 6,
            title: '苏州菜甄鲜食品有限公司',
            img: projectImage6,
            gallery: [projectImage3, projectImage3, projectImage3]
        },
        {
            id: 7,
            title: '江苏百汇农业发展有限公司',
            img: projectImage7,
            gallery: [projectImage3, projectImage3, projectImage3]
        }

    ];

    const serviceTags = [
        { chinese: "冷库工程" },
        { chinese: "食品冷库" },
        { chinese: "医药冷库" },
        { chinese: "餐饮冷库" },
        { chinese: "防爆冷库" },
        { chinese: "工业冷库" },
        { chinese: "气调冷库" },
        { chinese: "科研冷库" },
        { chinese: "物流冷库" }
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
        <div className="home">
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 100 },
                            color: { value: '#fff' },
                            shape: { type: 'circle' },
                            opacity: { value: 0.7 },
                            size: { value: 4, random: true },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: 'bottom',
                                random: true,
                            },
                        },
                        interactivity: {
                            events: { onHover: { enable: true, mode: 'repulse' } },
                            modes: { repulse: { distance: 100 } },
                        },
                    }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
                <div className="hero-overlay">
                    <div className="hero-content">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            泰州优库冷库设备有限公司
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            高效 · 节能 · 可靠 - 您的冷链专家
                        </motion.p>
                        <motion.button
                            className="cta-button"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            立即咨询
                        </motion.button>
                    </div>
                </div>
                {showScrollIndicator && (
                    <div className="scroll-indicator" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
                        <div className="arrow"></div>
                    </div>
                )}
            </div>


            <section className="projects-tags">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    我们的服务
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Cold Storage Project
                </motion.h3>
                <div className="tags-container">
                    {serviceTags.map((tag, index) => (
                        <motion.div
                            key={index}
                            className="tag-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <span>{tag.chinese}</span>
                            <span>{tag.english}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="projects-grid">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    我们的项目
                </motion.h2>
                <div className="projects-container">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <img src={project.img} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="contact-banner">
                <div className="contact-banner-content">
                    <div className="contact-banner-text">
                        <span>售前咨询</span>
                        <span>-</span>
                        <span>免费设计</span>
                        <span>-</span>
                        <span>专业施工</span>
                        <span>-</span>
                        <span>售后服务</span>
                    </div>
                    <div className="contact-banner-phone">
                        <span>13701430468</span>
                        <span>、</span>
                        <span>13605263288</span>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="about-header">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            关于我们
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            About Us
                        </motion.h3>
                    </div>
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <p>
                            泰州优库冷库设备有限公司是集产品设计、产品开发、产品制造、工程成套、售后服务、技术咨询为一体的综合性公司。公司以生产和定制各种组合式冷库为主导,专业安装组合式冷冻库、速冻库、冷藏库、保鲜库、气调库、实验库、防爆库、冷链物流设备和超低温(0°C至-120°C)库等并提供制冷设备,满足客户的各种需要。产品广泛的应用于食品、医疗卫生、制药、生物工程、水产品、农产品、超市、电子、酒店、化工、服务业等各类行业。在自身发展的过程中,本公司始终本着以人为本,以科技促发展的经营理念,与上海农科院、上海水产大学、上海蔬菜研究院、上海同济建筑设计院等多所大学及科研机构联合协作,致力于产品的开发研究。同时也打造出一支工作经验丰富、服务体系完善的施工队伍,为客户提供优质的服务。
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            <section className="faq-section">
                <motion.div
                    className="faq-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="faq-header">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            新闻资讯
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            News
                        </motion.h3>
                    </div>

                    <div className="faq-grid">
                        {[
                            "冷库选用工艺、设备和技术的设计方案",
                            "冷库如何保养?",
                            "冷库中产生异味的原因",
                            "制冷设备如何避免酸性腐蚀伤害?",
                            "大型冷库智能化有哪些好处?",
                            "节能冷库工程降低能耗的有效途径有哪些?",
                            "冷库设计的时候需要注意哪些技术细节?"
                        ].map((question, index) => (
                            <motion.div
                                key={index}
                                className="faq-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className="faq-question">
                                    <span className="question-icon">·</span>
                                    <h4>{question}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="view-more"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <button className="view-more-button">
                            查看更多
                            <span className="arrow">→</span>
                        </button>
                    </motion.div>
                </motion.div>
            </section>

            {selectedProject && (
                <div className="carousel-modal" onClick={() => setSelectedProject(null)}>
                    <div className="carousel-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button" onClick={() => setSelectedProject(null)}>✕</button>
                        <h3>{selectedProject.title}</h3>
                        <Slider {...sliderSettings}>
                            {selectedProject.gallery.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`${selectedProject.title} - ${index + 1}`} className="carousel-image" />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;