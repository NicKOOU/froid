import React from 'react';
import { motion } from 'framer-motion';
import contactBg from '../assets/project1.jpg'; // Ajoute une image dans src/assets/

function Contact() {
    return (
        <section className="contact" style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="contact-overlay">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    联系我们
                </motion.h2>
                <motion.form
                    className="contact-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <input type="text" placeholder="您的姓名" required />
                    <input type="email" placeholder="您的邮箱" required />
                    <textarea placeholder="您的留言" rows="5" required></textarea>
                    <button type="submit" className="cta-button">发送</button>
                </motion.form>
                <motion.div
                    className="contact-info"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p>📞 电话: +86 123-456-7890</p>
                    <p>✉️ 邮箱: info@coolinstall.cn</p>
                    <p>📍 地址: 中国上海市冷库路88号</p>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;