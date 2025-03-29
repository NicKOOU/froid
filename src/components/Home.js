import React from 'react';
import heroImage from '../assets/project1.jpg'; // Ajoute une image dans src/assets/

function Home() {
    return (
        <div className="home">
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="hero-overlay">
                    <h1>专业冷库安装服务</h1>
                    <p>高效 · 节能 · 可靠 - 您的冷链专家</p>
                    <button className="cta-button">立即咨询</button>
                </div>
            </div>
            <div className="intro">
                <h2>为什么选择我们？</h2>
                <p>我们提供从设计到维护的全方位冷库解决方案，确保您的需求得到完美满足。</p>
            </div>
            <div className="stats">
                <div className="stat-item">
                    <span className="stat-icon">🏆</span>
                    <h3>10+</h3>
                    <p>年行业经验</p>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">✅</span>
                    <h3>500+</h3>
                    <p>成功项目</p>
                </div>
                <div className="stat-item">
                    <span className="stat-icon">⭐</span>
                    <h3>98%</h3>
                    <p>客户满意度</p>
                </div>
            </div>
        </div>
    );
}

export default Home;