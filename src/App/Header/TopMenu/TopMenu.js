import React from 'react'

import './TopMenu.css'

import SocialLinks from './SocialLinks/SocialLinks'
import SignLanguage from './SignLanguage/SignLanguage'

const TopMenu = () => {
    return (
        <div className="top-menu">
            <div className="container p-height">
                <div className="row v-centered p-height top-menu-pos">
                    <SocialLinks />
                    <SignLanguage />
                </div>
            </div>
        </div>
    )
}

export default TopMenu