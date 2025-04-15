import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import wechatQR from '../assets/b-wechat.jpg'; // Assurez-vous d'ajouter une image QR code WeChat dans src/assets/

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
                <motion.h2 variants={itemVariants} style={{ textAlign: 'center', marginBottom: '2rem', color: '#01579B' }}>
                    联系我们
                </motion.h2>

                <motion.div
                    className="wechat-contact"
                    variants={itemVariants}
                >
                    <img src={wechatQR} alt="WeChat QR Code" className="wechat-qr" />
                    <p>请扫描二维码添加我们的微信</p>
                    <p>Scan QR code to add us on WeChat</p>
                </motion.div>

                <motion.div
                    className="contact-info"
                    variants={itemVariants}
                >
                    <div className="contact-info-item">
                        <p>📞 联系人: 李经理</p>
                    </div>
                    <div className="contact-info-item">
                        <p>📱 手机: 13701430468、13605263288</p>
                    </div>
                    <div className="contact-info-item">
                        <p>📍 销售地址: 泰州市白马镇金马大街</p>
                    </div>
                    <div className="contact-info-item">
                        <p>🌐 网址: www.youkulengku.com</p>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default React.memo(Contact);