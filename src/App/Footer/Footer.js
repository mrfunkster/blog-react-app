import React from 'react'
import SignLanguage from '../Header/TopMenu/SignLanguage/SignLanguage'

import './Footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row footer-row">
                    <div className="footer-nav-menu"></div>
                    <div className="search">
                        {/* <input type="search" placeholder="Search"/> */}
                        <h2 className="top-menu-text" style={{textAlign: "center"}}>Copyright Reserved. Dmytro Luhovskiy React Project.</h2>
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