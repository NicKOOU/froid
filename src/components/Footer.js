import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
    return (
        <footer className="footer">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <p>© 2025 冷库安装专家 - 保留所有权利</p>
                <div className="social-icons">
                    <a href="https://wechat.com" className="social-link" aria-label="WeChat">📱</a>
                    <a href="mailto:info@coolinstall.cn" className="social-link" aria-label="Email">✉️</a>
                    <a href="https://www.coolinstall.cn" className="social-link" aria-label="Website">🌐</a>
                </div>
                <p>联系我们: info@coolinstall.cn | +86 123-456-7890</p>
            </motion.div>
        </footer>
    );
}

export default Footer;