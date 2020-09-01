import React from 'react'

const MainHeader = () => {
    return (
        <div class="main-header">
            <div class="main-menu">
                <div class="container p-height">
                    <div class="row v-centered top-menu-pos p-height">
                        <div class="col logo">
                            <img src="images/logo.png" alt=""/>
                        </div>
                        <div class="mobile-menu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <nav class="nav-menu">
                            <ul>
                                <li class="active">
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#"> Blog</a>
                                </li>
                                <li>
                                    <a href="#">Pages</a>
                                </li>
                                <li>
                                    <a href="#">Shop</a>
                                </li>
                                <li>
                                    <a href="#">Components</a>
                                </li>
                                <li>
                                    <a href="#">Features</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="col main-menu-btns">
                            <div class="main-menu-btn search">
                                <img src="images/search_ico.png" alt=""/>
                            </div>
                            <div class="vertical-line"></div>
                            <div class="main-menu-btn favorite">
                                <img src="images/heart_ico.png" alt=""/>
                            </div>
                            <div class="vertical-line"></div>
                            <div class="main-menu-btn bin">
                                <img src="images/shopping_cart.png" alt=""/>
                                <div class="bin-count">0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="slider-section">
                    <div class="slide">
                        <div class="slide-background">
                            <img src="images/header_bg.png" alt=""/>
                        </div>
                        <div class="slide-content">
                            <h2>Inspiration</h2>
                            <h3>5 Ways milllennials can start building their future today</h3>
                            <div class="blue-btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="slide-author-info">
                            <div class="author-photo">
                                <img src="images/photo_ico.png" alt=""/>
                            </div>
                            <div class="author-name">
                                <h4>Henry Little</h4>
                            </div>
                            <div class="author-date">
                                <h4>Apri 28, 2016   10:15</h4>
                            </div>
                            <div class="author-social-activities">
                                <div class="author-activities comments">
                                    <div class="icon">
                                        <img src="images/forum.png" alt=""/>
                                    </div>
                                    <div class="text-info">Comments (28)</div>
                                </div>
                                <div class="author-activities likes">
                                    <div class="icon">
                                        <img src="images/favorite_border.png" alt=""/>
                                    </div>
                                    <div class="text-info">Likes (07)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainHeader