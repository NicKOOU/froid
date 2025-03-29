import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <section className="about">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                关于我们
            </motion.h2>
            <div className="about-content">
                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>我们的故事</h3>
                    <p>
                        我们是冷库安装领域的专家，拥有超过10年的经验，致力于为客户提供高效、可靠的冷链解决方案。
                    </p>
                </motion.div>
                <motion.div
                    className="about-card"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3>我们的使命</h3>
                    <p>
                        以质量为本，服务至上，为每一位客户打造完美的冷库体验。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default About;