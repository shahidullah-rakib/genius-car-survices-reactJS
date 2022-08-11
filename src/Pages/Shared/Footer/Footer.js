import React from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear();
    return (
        <div>
            <footer>
                <p><small>copyright @ {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;