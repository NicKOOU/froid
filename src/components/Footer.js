import React from 'react';
import { motion } from 'framer-motion';
import { FaWeixin, FaEnvelope, FaGlobe, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import wechat from '../assets/sg-wechat.jpg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h3>关于我们</h3>
                    <p>泰州优库冷库设备有限公司是一家专业从事冷库安装和维护的公司，拥有多年的行业经验。</p>
                </motion.div>

                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3>联系方式</h3>
                    <ul className="footer-links">
                        <li>
                            <FaPhone /> 1370-1430-468
                        </li>
                        <li>
                            <FaMapMarkerAlt /> 泰州市, 江苏省
                        </li>
                        <li>
                            <FaEnvelope /> info@coolinstall.cn
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    className="footer-section"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3>关注我们</h3>
                    <div className="social-icons">
                        <img src={wechat} alt="WeChat QR Code" className="wechat-qr" />
                        <a href="mailto:info@coolinstall.cn" className="social-link" aria-label="Email">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="footer-bottom"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <p>© 2025 泰州优库冷库设备有限公司 - 保留所有权利</p>
            </motion.div>
        </footer>
    );
}

export default Footer;