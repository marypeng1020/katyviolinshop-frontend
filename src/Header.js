import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
    backgroundColor: '#282c34',
    padding: '120px 80px',
    color: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/header.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textAlign: 'left'  // 使标题文本左对齐
};
const titleStyle = {
    margin: '0',     // 移除标题的默认边距
    fontSize: '48px' // 可以调整字体大小
};

const linkStyle = {
    marginRight: '20px',
    color: 'white',
    textDecoration: 'none'
};

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>My Violin Shop</h1>
            <nav>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/contact" style={linkStyle}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
