import React from 'react';
import { motion } from 'framer-motion';
import { FaWeixin, FaEnvelope, FaGlobe } from 'react-icons/fa'; // Icônes modernes
import wechat from '../assets/sg-wechat.jpg'; // Assurez-vous que le chemin est correct

function Footer() {
    return (
        <footer className="footer">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p>© 2025 泰州优库冷库设备有限公司 - 保留所有权利</p>
                <div className="social-icons">
                    <img src={wechat} alt="WeChat QR Code" className="wechat-qr" />
                    <a href="mailto:info@coolinstall.cn" className="social-link" aria-label="Email">
                        <FaEnvelope />
                    </a>
                </div>
                <p>联系我们: 1370-1430-468 | 泰州市, 江苏省</p>
            </motion.div>
        </footer>
    );
}

export default Footer;