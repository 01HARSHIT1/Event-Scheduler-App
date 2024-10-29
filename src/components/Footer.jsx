// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
            <p>&copy; {new Date().getFullYear()} Event Scheduler. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
