import React from "react";

// simple component no state - pure fn
const Navigation = ({ onRouteChange, isSignedIn }) => {


    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('SignOut')} className="f5 link dim gray pa3 pointer">Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('SignIn')} className="f5 link dim gray pa3 pointer">Sign In</p>
                <p onClick={() => onRouteChange('Register')} className="f5 link dim gray pa3 pointer">Register</p>
            </nav>
        )

    }



}

export default Navigation