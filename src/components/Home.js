import React from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import heroImage from '../assets/project1.jpg';

function Home() {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    return (
        <div className="home">
            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 100 },
                            color: { value: '#fff' },
                            shape: { type: 'circle' },
                            opacity: { value: 0.7 },
                            size: { value: 4, random: true },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: 'bottom',
                                random: true,
                            },
                        },
                        interactivity: {
                            events: { onHover: { enable: true, mode: 'repulse' } },
                            modes: { repulse: { distance: 100 } },
                        },
                    }}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                />
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