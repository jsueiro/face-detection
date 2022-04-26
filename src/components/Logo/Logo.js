import React from "react";
import './Logo.css'
import l1 from './Logo.png'

const Logo = () => {

    return (
        <div className="ma4 mt3">
            <div className="Logo" style={{ height: '64px', width: '64px' }}>
                <img src={l1} alt='bearded man logo' style={{ paddingTop: '1px' }} />
            </div>

        </div>
    );

}

export default Logo;