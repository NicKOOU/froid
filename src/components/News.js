import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { FaQuestionCircle } from 'react-icons/fa';

function News() {
    const [openFaqId, setOpenFaqId] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "冷库选用工艺、设备和技术的设计方案",
            answer: "在冷库设计时，需考虑多方面因素以确保最佳性能和能源效率。应依据存储产品类型、容量需求和温度要求选择合适的制冷系统、隔热材料和控制技术。建议采用变频技术的制冷压缩机以适应负荷变化，并选用高效的隔热板材减少热传导。可结合环保制冷剂（如NH₃-CO₂复叠系统）降低环境影响，并采用智能监控系统实时调整运行参数以优化能耗。专业设计应包括详细的热负荷计算、气流分析及设备布局优化，确保各区域温度均匀、货物存取便捷，并留有维护空间。"
        },
        {
            id: 2,
            question: "冷库如何保养？",
            answer: "冷库保养应遵循定期检查制度。每周应清洁冷库表面和蒸发器，检查除霜系统；每月检查制冷系统运转情况，包括压缩机油位、制冷剂充注量、电控系统和安全装置；每季度全面检查所有部件，注意密封条磨损、绝缘材料状况、温度传感器准确性；每年进行一次彻底维护，包括管道系统清洗、制冷剂检漏和更换需要的零部件。此外，应严格培训操作人员正确使用冷库，减少开门次数和时间，避免热负荷突增和结霜。建立详细的保养记录，及时记录温度波动或设备异常，以便制定相应的维护计划。"
        },
        {
            id: 3,
            question: "冷库中异味的成因与应对措施",
            answer: "冷库异味主要源自细菌滋生、食品腐败、制冷系统泄漏或清洁不当。应对措施包括：首先，定期清洁设施，使用适当的消毒剂处理所有表面；其次，改进空气循环系统，增加活性炭过滤或臭氧发生器消除异味分子；第三，严格控制存储物品质量，确保其在入库前状态良好，并按类别分区存放；第四，检查制冷系统是否泄漏，及时修复可能的氨气或制冷剂泄漏点；最后，保持适当的湿度水平，防止过度潮湿导致的霉菌生长。在持续异味情况下，应聘请专业团队进行全面评估和处理。"
        },
        {
            id: 4,
            question: "制冷设备如何避免酸性腐蚀伤害？",
            answer: "预防制冷设备的酸性腐蚀需采取多项措施：首先，定期检测制冷剂和冷冻油的酸值，一旦超标立即更换；其次，安装高质量的过滤器和干燥器，去除系统中的水分和杂质；第三，维持正确的运行温度和压力，避免高温导致的油分解；第四，使用防腐蚀添加剂增强冷冻油的稳定性；第五，选择耐腐蚀材料制造的部件，特别是铜部件应有额外保护；最后，制定严格的维护计划，包括系统清洗和定期更换易受影响的部件。对于已出现轻微腐蚀的系统，应进行酸性清洗处理，并增加后续监测频率。"
        },
        {
            id: 5,
            question: "大型冷库智能化有哪些好处？",
            answer: "大型冷库智能化带来多方面优势：首先，通过先进传感器和算法实现精确温湿度控制，减少波动，提高产品质量保持；其次，能源管理系统可根据负荷和电价自动调整运行模式，降低30-40%能耗成本；第三，自动化库存管理系统提高存取效率，减少人力成本和错误率；第四，预测性维护功能通过分析设备运行数据，提前识别潜在故障，减少意外停机；第五，远程监控与控制允许管理人员随时查看冷库状态并进行调整，无需现场操作；最后，智能系统生成的详细运行和库存报告有助于优化业务决策和满足监管要求。这些功能共同提升了冷库的可靠性、安全性和经济性。"
        },
        {
            id: 6,
            question: "节能冷库工程降低能耗的有效途径有哪些？",
            answer: "降低冷库能耗的有效途径包括：首先，优化隔热设计，使用高性能保温材料并确保安装无热桥；其次，采用变频技术的制冷设备，根据实际负荷自动调节功率；第三，实施智能除霜控制，仅在必要时启动除霜过程；第四，优化风机设计和气流分布，减少循环能耗同时确保温度均匀；第五，安装热回收系统，将冷凝器释放的热量用于建筑其他区域供暖或热水；第六，设计气闸室或快速卷帘门，减少冷气流失；第七，采用LED照明和动作感应开关，降低照明能耗；第八，实施全面的能源管理系统，监控能耗并识别优化机会。这些措施综合应用可降低40-60%的能耗。"
        },
        {
            id: 7,
            question: "冷库设计的时候需要注意哪些技术细节？",
            answer: "冷库设计的关键技术细节包括：首先，精确的热负荷计算，考虑环境条件、产品特性和使用模式；其次，合理的空间布局，确保气流均匀并避免死角；第三，地面防冻设计，特别是低温冷库需安装地面加热系统防止冻胀；第四，门窗设计应最小化热渗透，配备适当的密封装置和防撞保护；第五，适合存储产品特性的温湿度控制系统；第六，充分的排水系统设计，便于清洁和除霜水排放；第七，符合安全规范的电气系统，包括应急照明和警报系统；第八，考虑未来扩展可能性的模块化设计；最后，制冷系统冗余设计，确保在设备维护或故障时仍能维持必要的制冷能力。这些细节对冷库的长期可靠运行至关重要。"
        }
    ];

    const toggleFaq = (id) => {
        setOpenFaqId(openFaqId === id ? null : id);
    };

    const FAQItem = ({ item }) => {
        const isOpen = openFaqId === item.id;

        return (
            <motion.div
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <div className="faq-question" onClick={() => toggleFaq(item.id)}>
                    <span className="question-icon">·</span>
                    <h4>{item.question}</h4>
                    <motion.div
                        style={{
                            marginLeft: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoIosArrowDown />
                    </motion.div>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="faq-answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <p>{item.answer}</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        );
    };

    return (
        <div className="news-page">


            <div className="news-content">
                <div className="news-header">
                    <h2>行业资讯</h2>
                    <div className="header-line"></div>
                </div>
                <div className="faq-grid">
                    {faqData.map(item => (
                        <FAQItem key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default News; 