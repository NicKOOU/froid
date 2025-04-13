import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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
    const [openFaqId, setOpenFaqId] = useState(null);

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

    function FAQItem({ question, answer, id }) {
        const isOpen = openFaqId === id;

        return (
            <motion.div
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div
                    className="faq-question"
                    onClick={() => setOpenFaqId(isOpen ? null : id)}
                >
                    <span className="question-icon">·</span>
                    <h4>{question}</h4>
                </div>
                {isOpen && (
                    <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </motion.div>
        );
    }

    const faqData = [
        {
            question: "冷库选用工艺、设备和技术的设计方案",
            answer: `冷库作为现代食品、医药及冷链行业不可或缺的储藏设施，其设计工艺和设备选型直接关系到运营效率与能源消耗。通过科学合理的温度设定、技术优化与设备配置，不仅可保障食品品质，还能有效降低能耗成本。以下为您解析冷库在设计与选型中的几大关键技术策略：
            一、科学设定贮藏温度
            根据食品种类及贮藏周期，应采取不同的温度管理策略：
            • 短期贮藏（≤半年）：建议温度控制在 -15℃~ -18℃；
            • 长期贮藏（＞半年）：应维持在 ≤ -18℃；
            • 高脂肪食品（如深海鱼类）：为防止脂肪氧化，应控制在 -24℃~ -20℃；
            精准的温度设定不仅能更好地抑制微生物繁殖与生化反应，同时也有助于提高制冷压缩机效率，降低能耗。
            二、缩小蒸发温度与库内温度的温差
            当冷库内温度不变时，蒸发温度越接近库温，压缩机越节能。数据显示：
            • 每降低 1℃ 的蒸发温度，电耗增加 3~4%；
            • 缩小温差还能提高相对湿度，降低食品干耗，尤其对未包装的生鲜产品更为重要。
            三、优化冷库围护结构的保温性能
            围护结构单位热流量（q 值）越低，保温效果越好：
            • 传统设计 q 值约为 11.63W/m²；
            • 若优化至 6.9W/m²，对大型冷库可节约 约10% 动力费用；
            虽然初期投资增加（保温层加厚），但从长远运营角度看，节能效果显著，回报周期短。
            四、冻结间应采用双速或变速风机
            食品冻结过程分为三个阶段：
            1. 冷却阶段（温度由 >0℃ 降至 0℃ 左右）
            2. 冰晶形成阶段（0℃ 降至 -5℃） —— 制冷需求最大；
            3. 冻结降温阶段（-5℃ 降至 -15℃）
            建议配置 变速风机，在需求低的阶段降低风速，节省能耗；在关键阶段全力运转，保障制冷效果。相比传统单速风机，变速风机能显著优化能耗结构。
            五、合理利用冷库空间，提升使用效率
            冻结间具有旺淡季交替使用的特点：
            • 淡季可兼作冷藏间，储存已包装成型食品；
            • 既提高了空间利用率，又减少了围护结构损耗；
            • 冷风机可调整至超低温贮藏要求，满足特殊食品需求。
            通过以上几点在冷库工艺、设备与技术上的科学设计，不仅能提升冷库运行效率，更可在控制成本的同时保障贮藏质量。优库制冷将持续为您提供更先进、更节能的冷库技术解决方案。`
        },
        {
            question: "冷库如何保养？",
            answer: `冷库作为食品、医药、物流等行业的重要设备，良好的使用与保养对于冷库的寿命与性能至关重要。不当操作不仅会影响制冷效率，还可能带来安全隐患。下面我们为您总结了冷库日常保养的四大关键点：
            一、合理控制降温速度
            在冷库初次启用或长期停用后再次启动时，切勿急速降温。正确做法是：
            • 每日降温不超过 8~10℃；
            • 降至 0℃时应保持一段时间，让库体适应温度变化；
            • 这样能有效避免库板和设备因温差剧烈变化而损坏，保障系统稳定运行。
            二、冷库库板的日常维护
            冷库库体大多由金属保温板组成，使用中应特别注意：
            • 避免硬物碰撞、刮划库板，以防造成凹陷、生锈；
            • 局部损伤不仅影响外观，更可能降低冷库的整体保温性能。
            三、密封部位的检查与修补
            装配式冷库由多块保温板拼装而成，缝隙之间通常采用密封胶处理：
            • 使用过程中，若发现密封条老化、密封胶脱落或开裂，应及时进行修补；
            • 以防止空气和水分进入，避免结霜、结冰等影响制冷的现象发生。
            四、冷库地面保护注意事项
            小型冷库常采用保温地板，地面保养不可忽视：
            • 严禁地面积水结冰，以免影响人员操作安全；
            • 如遇结冰情况，禁止用硬物敲打清除，以防损坏保温层。
            通过科学规范的保养方式，不仅可以延长冷库使用寿命，更能保障冷藏食品与货物的质量。更多冷库维护知识，欢迎关注"优库冷库制冷设备有限公司"官网，我们将持续为您分享专业资讯。`
        },
        {
            question: "冷库中异味的成因与应对措施",
            answer: `在冷库使用过程中，若管理不当，很容易出现异味，不仅影响食品品质，还可能造成食品污染。所谓异味，是指食品在物理或化学变化后，产生的不正常气味，这些气味往往会粘附在冷库墙壁、顶棚以及设备上，日久积累难以清除。以下是常见异味的产生原因及预防方法：
一、冷库中异味产生的主要原因
1. 冷库本身已有异味
冷库在未使用前就存在异味，可能因施工时材料问题或未彻底清洁。
2. 入库食品已变质
如变质的肉类、蛋类、海产品等，会迅速释放异味并污染库内环境。
3. 交叉污染
未清洗的冷库存放过鱼类后直接储存其他食品，如肉类、蛋类、水果等，导致串味。
4. 通风不畅，湿度过高
易导致霉菌滋生，产生霉味。
5. 制冷剂泄漏
如氨气渗入食品，会造成不可逆的污染和异味。
6. 温度异常导致食品腐坏
如肉品未充分冻结即转入储藏区，会产生腐败气味。
7. 混合存放不同气味食品
导致食品间串味，影响品质。
二、预防冷库异味的措施
1. 严控入库食品质量
所有入库食品需经检验，确保无变质现象。
2. 库房使用前彻底除味
使用前若有异味，应技术处理后再使用。
3. 加强设备维护
禁止倒堆卸货，避免撞坏制冷管路导致泄漏。
4. 合理控制冷加工流程
确保库房温度达标后再进行食品转库和存放操作。
5. 合理分区存放食品
避免气味交叉污染，保持食品品质。
三、冷库除味的方法
1. 臭氧消毒法
使用臭氧发生器，不仅能去除异味，还可杀菌。但不适用于高脂肪食品，以免脂肪氧化。
2. 甲醛处理法
将货物搬出后，用2%甲醛溶液（福尔马林）喷洒库内，适用于彻底消毒和去味。
3. 食醋熏蒸法（去鱼腥味）
- 先清除冷库内冰霜层，保持温度在 -5℃ 以下；
- 每立方米用50~100克食醋配比，喷洒后关闭库门；
- 鼓风循环12~24小时后，再通风排出醋味。

通过以上管理与处理方法，可以有效避免冷库中异味的产生，确保食品安全和冷库卫生。如需了解更多冷库使用与维护知识，欢迎持续关注"优库冷库制冷设备有限公司"官方网站资讯栏目`
        }
    ];

    return (
        <div className="home">
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 70 },
                            color: { value: '#fff' },
                            shape: { type: 'circle' },
                            opacity: { value: 0.6 },
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
                        <Link to="/contact">
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
                        </Link>
                    </div>
                </div>
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

                    <div className="faq-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                id={index}
                                question={item.question}
                                answer={item.answer}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="view-more"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link to="/news">
                            <button className="view-more-button">
                                查看更多
                                <span className="arrow">→</span>
                            </button>
                        </Link>
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