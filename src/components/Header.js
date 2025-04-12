import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaInfoCircle, FaBriefcase, FaEnvelope, FaTimes, FaNewspaper } from 'react-icons/fa';
import logo from '../assets/youkuNew.jpg';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>

                <button
                    className={`mobile-menu-button ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className="desktop-nav">
                    <ul>
                        <li>
                            <Link to="/">
                                <FaHome className="nav-icon" />
                                <span>首页</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <FaInfoCircle className="nav-icon" />
                                <span>关于我们</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                                <FaBriefcase className="nav-icon" />
                                <span>服务</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/news">
                                <FaNewspaper className="nav-icon" />
                                <span>新闻资讯</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <FaEnvelope className="nav-icon" />
                                <span>联系我们</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mobile-menu-overlay"
                            onClick={closeMobileMenu}
                        >
                            <motion.nav
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                className="mobile-nav"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ul>
                                    <li>
                                        <Link to="/" onClick={closeMobileMenu}>
                                            <FaHome className="nav-icon" />
                                            <span>首页</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" onClick={closeMobileMenu}>
                                            <FaInfoCircle className="nav-icon" />
                                            <span>关于我们</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" onClick={closeMobileMenu}>
                                            <FaBriefcase className="nav-icon" />
                                            <span>服务</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/news" onClick={closeMobileMenu}>
                                            <FaNewspaper className="nav-icon" />
                                            <span>新闻资讯</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" onClick={closeMobileMenu}>
                                            <FaEnvelope className="nav-icon" />
                                            <span>联系我们</span>
                                        </Link>
                                    </li>
                                </ul>
                            </motion.nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}

export default Header;