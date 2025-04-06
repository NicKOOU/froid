import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/youkuv1.png';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" className="logo-image" />
            </Link>
            <nav>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于我们</Link></li>
                    <li><Link to="/services">服务</Link></li>
                    <li><Link to="/projects">项目案例</Link></li>
                    <li><Link to="/contact">联系我们</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;