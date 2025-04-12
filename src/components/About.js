import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <div className="about-page">
            <section className="about-hero">
                <motion.div
                    className="about-hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        关于我们
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        About Us
                    </motion.h2>
                </motion.div>
            </section>

            <section className="about-sections">
                <motion.div
                    className="about-section company-profile"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            公司简介
                        </motion.h3>
                        <motion.h4
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Company Profile
                        </motion.h4>
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

                <motion.div
                    className="about-section strength"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            实力优势
                        </motion.h3>
                        <motion.h4
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Strength advantage
                        </motion.h4>
                    </div>
                    <motion.div
                        className="strength-content"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="offices">
                            <h5>办事处分布</h5>
                            <p>公司经过努力,发展到在全国各地设有办事机构:北京办事处、成都办事处、合肥办事处、青岛办事处、武汉办事处、南京办事处、海南办事处、广州办事处、南昌办事处、兰州办事处、乌鲁木齐办事处。</p>
                        </div>
                        <div className="products">
                            <h5>主要产品</h5>
                            <p>现已开发生产的主要产品:风冷凝器、水冷凝器、吊顶式冷风机、壳管式干式蒸发器、各类卧式、立式贮液瓶、系列风、水冷压缩冷凝机组、冷库一体机、奶罐机组、皮革定型机组(含蒸发器)、工业冷水机组。并且代理销售德国比泽尔半封闭压缩机、美国谷轮涡旋、半封闭压缩机,法国美优乐、法国泰康全封闭压缩机、日本三洋、日立压缩机,意大利莱富康螺杆机组、台湾汉钟螺杆压缩机组及各种进出口制冷配件,关键部件已申请国家专利。</p>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="about-section mission"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-header">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            我们的使命
                        </motion.h3>
                        <motion.h4
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Our Mission
                        </motion.h4>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        公司始终坚持"以人为本、以质取信、严格要求、稳中求进"的宗旨,严格贯彻"科学管理,精心施工,惠及顾客"的质量方针,强化内部管理,狠抓工程质量,规范经营行为,提高服务质量,提高公司在西南、华东、华南、华北等制冷界的企业形象。
                        <br /><br />
                        继往开来,业盛人旺;公司本着"奉献,诚信、务实、奋进"的企业精神,愿与各界新老朋友真诚合作,热忱为客户提供一流的服务,打造一流精品工程。
                    </motion.p>
                </motion.div>
            </section>
        </div>
    );
}

export default About;