import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import contactBg from '../assets/project1.jpg'; // Ajoute une image dans src/assets/

function Contact() {
    // Utilisation de useMemo pour mémoriser les animations
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.3,
                staggerChildren: 0.1
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2
            }
        }
    }), []);

    return (
        <section className="contact">
            <motion.div
                className="contact-overlay"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h2 variants={itemVariants}>
                    联系我们
                </motion.h2>
                <motion.form
                    className="contact-form"
                    variants={itemVariants}
                >
                    <input type="text" placeholder="您的姓名" required />
                    <input type="email" placeholder="您的邮箱" required />
                    <textarea placeholder="您的留言" rows="5" required></textarea>
                    <button type="submit" className="cta-button">发送</button>
                </motion.form>
                <motion.div
                    className="contact-info"
                    variants={itemVariants}
                >
                    <div className="contact-info-item">
                        <p>📞 电话: 1370-1430-468</p>
                    </div>
                    <div className="contact-info-item">
                        <p>✉️ 邮箱: info@youkucold.com</p>
                    </div>
                    <div className="contact-info-item">
                        <p>📍 地址: 泰州优库冷库设备有限公司</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default React.memo(Contact);