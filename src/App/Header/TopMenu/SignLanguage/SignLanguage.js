import React from 'react'

import './SignLanguage.css'

const SignLanguage = () => {
    return (
        <div className="col-sm-12 col sign-language">
            <div className="sign-in mobile-pos-2">
                <div className="top-menu-icon-container">
                    <img className="top-menu-icon" src="/images/icons/account_circle.png" alt="Account"/>
                </div>
                <div className="top-menu-text">Sign In</div>
            </div>
            <div className="vertical-line"></div>
            <div className="sign-in mobile-pos-1">
                <div className="top-menu-icon-container">
                    <img className="top-menu-icon" src="/images/icons/language.png" alt="language"/>
                </div>
                <div className="top-menu-text">Eng</div>
            </div>
        </div>
    )
}

export default SignLanguage