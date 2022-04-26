import React from "react";

// simple component no state - pure fn
const Navigation = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p className="f5 link dim gray pa3 pointer">Sign Out</p>
        </nav>
    );
}

export default Navigation