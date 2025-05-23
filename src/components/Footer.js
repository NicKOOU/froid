import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import chinaMap from '../assets/chinaMap.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <motion.div
                    className="footer-map"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={chinaMap} alt="Location in China" />
                </motion.div>

                <motion.div
                    className="footer-contact"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3>联系我们 Contact Us</h3>
                    <ul className="footer-links">
                        <li>
                            <FaUser className="contact-icon" />
                            <span className="contact-label">联系人:</span>
                            <span className="contact-value">李经理</span>
                        </li>
                        <li>
                            <FaPhone className="contact-icon" />
                            <span className="contact-label">手机:</span>
                            <span className="contact-value">13701430468、13605263288</span>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <span className="contact-label">邮箱:</span>
                            <span className="contact-value">1004825690@qq.com</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <span className="contact-label">地址:</span>
                            <span className="contact-value">泰州市白马镇金马大街</span>
                        </li>
                        <li>
                            <FaGlobe className="contact-icon" />
                            <span className="contact-label">网址:</span>
                            <span className="contact-value">www.youkulengku.com</span>
                        </li>
                    </ul>
                </motion.div>
            </div>

            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p>© 2025 泰州优库冷库设备有限公司</p>
                <p>备案号:苏ICP备17055221号-2</p>
            </motion.div>
        </footer>
    );
}

export default Footer;