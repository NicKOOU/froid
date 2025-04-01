import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">冷库安装专家</Link>
            <nav>
                <ul>
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