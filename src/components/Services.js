import React from 'react';
import { motion } from 'framer-motion';

function Services() {
    const services = [
        { title: '冷库设计', desc: '根据您的需求，设计高效节能的冷库方案。', icon: '❄️' },
        { title: '安装与施工', desc: '专业团队快速安装，确保冷库运行稳定。', icon: '🔧' },
        { title: '维护与支持', desc: '提供长期维护服务，让您的冷库始终如新。', icon: '🛠️' },
    ];

    return (
        <section className="services">
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                我们的服务
            </motion.h2>
            <div className="services-list">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="service-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}
                    >
                        <span className="service-icon">{service.icon}</span>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Services;