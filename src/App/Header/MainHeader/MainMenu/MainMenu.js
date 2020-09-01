import React from 'react'

import NavMenu from './NavMenu'

const MainMenu = () => {
    return (
        <div className="main-menu">
            <div className="container p-height">
                <div className="row v-centered top-menu-pos p-height">
                    <div className="col logo">
                        <img src="/images/content/logo.png" alt=""/>
                    </div>
                    <div className="mobile-menu">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <NavMenu />
                    <div className="col main-menu-btns">
                        <div className="main-menu-btn search">
                            <img src="/images/icons/search_ico.png" alt=""/>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="main-menu-btn favorite">
                            <img src="/images/icons/heart_ico.png" alt=""/>
                        </div>
                        <div className="vertical-line"></div>
                        <div className="main-menu-btn bin">
                            <img src="/images/icons/shopping_cart.png" alt=""/>
                            <div className="bin-count">0</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainMenu