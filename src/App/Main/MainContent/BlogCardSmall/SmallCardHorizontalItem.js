import React from 'react'

const SmallCardHorizontalItem = ({
    cardTag,
    cardLink,
    cardName,
    cardImage,
    cardContent,
    cardAuthorName,
    cardAuthorPhoto,
    cardDate,
    cardComments,
    cardLikes
}) => {
    return (
        <div className="blog-card-small-horizontal">
            <div className="blog-cart-small-img">
                <img src={cardImage} alt=""/>
                <div className="card-tag">{cardTag}</div>
                <div className="social-activities">
                    <div className="author-activities comments">
                        <div className="icon">
                            <img src="/images/icons/forum_white.png" alt=""/>
                        </div>
                         <div className="text-info">{cardComments}</div>
                    </div>
                    <div className="author-activities likes">
                        <div className="icon">
                            <img src="/images/icons/favorite_border_white.png" alt=""/>
                        </div>
                        <div className="text-info">{cardLikes}</div>
                    </div>
                </div>
            </div>
            <div className="blog-cart-small-horizontal-content">
                <div className="blog-cart-small-horizontal-text">
                    <h4>{cardName}</h4>
                    <p>{cardContent}</p>
                </div>
                <div className="blog-card-small-horizontal-author-info">
                    <div className="author-info-horizontal">
                        <div className="author-photo">
                            <img src={cardAuthorPhoto} alt=""/>
                        </div>
                        <div className="author-name-date">
                            <div className="author-name dark">
                                <h4>{cardAuthorName}</h4>
                            </div>
                            <div className="author-date dark">
                                <h4>{cardDate}</h4>
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
    )
}

export default SmallCardHorizontalItem