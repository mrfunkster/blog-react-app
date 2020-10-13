import React from 'react'
import NavMenu from '../Header/MainHeader/MainMenu/NavMenu'
import SignLanguage from '../Header/TopMenu/SignLanguage/SignLanguage'

import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="nav-menu">
                        <NavMenu />
                    </div>
                    <div className="search">
                        <input type="search" placeholder="Search"/>
                    </div>
                    <div className="sign-language">
                        <SignLanguage />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Footer