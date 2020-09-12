import React from 'react'

import BlogCardBig from './BlogCardBig/BlogCardBig'
import BlogCardSmallHorizontal from './BlogCardSmall/SmallCardHorizontal'
import BlogCardSmallVertical from './BlogCardSmall/SmallCardVertical'

const MainContentPage = ({
    copyBlogDataToState
}) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-73 main-blog">
                <BlogCardBig 
                    copyBlogDataToState = {copyBlogDataToState}
                />
                <BlogCardSmallHorizontal 
                    copyBlogDataToState = {copyBlogDataToState}
                />
                <BlogCardSmallVertical 
                    copyBlogDataToState = {copyBlogDataToState}
                />
                <div className="blog-card-medium-vertical-section">
                    <div className="blog-card-medium-vertical">
                        <div className="blog-card-medium-img">
                            <img src="images/medium-card-1.png" alt=""/>
                            <div className="card-tag">Lifestyle</div>
                            <div className="author-social-activities">
                                <div className="author-activities comments">
                                    <div className="icon">
                                        <img src="images/forum_white.png" alt=""/>
                                    </div>
                                    <div className="text-info">7</div>
                                </div>
                                <div className="author-activities likes">
                                    <div className="icon">
                                        <img src="images/favorite_border_white.png" alt=""/>
                                    </div>
                                    <div className="text-info">15</div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-cart-small-vertical-content">
                            <div className="blog-cart-small-horizontal-text vertical-card">
                                <h4>11 Fantastic Ways Passionate</h4>
                                <p>Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar.</p>
                            </div>
                            <div className="blog-card-small-horizontal-author-info">
                                <div className="author-info-horizontal vertical">
                                    <div className="author-photo">
                                        <img src="images/james-lemn.png" alt=""/>
                                    </div>
                                    <div className="author-name-date">
                                        <div className="author-name dark">
                                            <h4>Henry Little</h4>
                                        </div>
                                        <div className="author-date dark">
                                            <h4>Apri 28, 2016   10:15</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-btn">
                                    <div className="div"></div>
                                    <div className="div"></div>
                                    <div className="div"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-card-medium-vertical">
                        <div className="blog-card-medium-img">
                            <img src="images/medium-card-2.png" alt=""/>
                            <div className="card-tag">Lifestyle</div>
                            <div className="author-social-activities">
                                <div className="author-activities comments">
                                    <div className="icon">
                                        <img src="images/forum_white.png" alt=""/>
                                    </div>
                                    <div className="text-info">7</div>
                                </div>
                                <div className="author-activities likes">
                                    <div className="icon">
                                        <img src="images/favorite_border_white.png" alt=""/>
                                    </div>
                                    <div className="text-info">15</div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-cart-small-vertical-content">
                            <div className="blog-cart-small-horizontal-text vertical-card">
                                <h4>Art Makes You Mentally Healthy</h4>
                                <p>Lorem ipsum dolor sit amet, to consectetur  adipi scing elit. Nulla vehicula lorem and lacus. Vestibulum vitae mauris lorem ipsum doar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed omnis tempore similique doloribus debitis officiis totam eaque iste facere dolore.</p>
                            </div>
                            <div className="blog-card-small-horizontal-author-info">
                                <div className="author-info-horizontal vertical">
                                    <div className="author-photo">
                                        <img src="images/henry_little_photo.png" alt=""/>
                                    </div>
                                    <div className="author-name-date">
                                        <div className="author-name dark">
                                            <h4>Henry Little</h4>
                                        </div>
                                        <div className="author-date dark">
                                            <h4>Apri 28, 2016   10:15</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-btn">
                                    <div className="div"></div>
                                    <div className="div"></div>
                                    <div className="div"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="show-more">
                        <div className="more">More</div>
                        <div className="show-more-arrow-container">
                            <a href="/" className="show-more-arrow">
                                <img src="images/arrow-forward.png" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-27 navigation-block"></div>
        </div>
    )
}

export default MainContentPage