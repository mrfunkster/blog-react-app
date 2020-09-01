import React from 'react'

import './TopMenu.css'

import SocialLinks from './SocialLinks/SocialLinks'

const TopMenu = () => {
    return (
        <div className="top-menu">
            <div className="container p-height">
                <div className="row v-centered p-height top-menu-pos">
                    <SocialLinks />
                    <div className="col-sm-12 col sign-language">
                        <div className="sign-in mobile-pos-2">
                            <div className="top-menu-icon-container">
                                <img className="top-menu-icon" src="images/account_circle.png" alt="Account"/>
                            </div>
                            <div className="top-menu-text">Sign In</div>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="sign-in mobile-pos-1">
                            <div className="top-menu-icon-container">
                                <img className="top-menu-icon" src="images/language.png" alt="language"/>
                            </div>
                            <div className="top-menu-text">Eng</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopMenu