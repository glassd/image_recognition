import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Logo = () => {
    return (
        <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 250, width: 250 }}>
            <div className="Tilt-inner ma4 mt0">text</div>
        </Tilt>
    )
}

export default Logo;