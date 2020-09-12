import React from 'react'
import {Link} from 'react-router-dom'
import { linkNameParser } from '../../../../common/data/Functions'

const BlogCardBigItem = ({
    cardTag,
    cardName,
    cardImage,
    cardContent,
    cardAuthorName,
    cardAuthorPhoto,
    cardDate,
    cardComments,
    cardLikes,
    cardId,
    copyBlogDataToState,
}) => {
    return (
        <div className="blog-card-big">
            <div className="blog-card-big-img">
                <img src={cardImage} alt=""/>
                <div className="card-tag">{cardTag}</div>
                <div className="author-social-activities">
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
            <div className="blog-card-big-content">
                <div className="blog-card-big-text">
                    <h4>{cardName}</h4>
                    <p>{cardContent}</p>
                </div>
                <div className="horizontal-line"></div>
                <div className="big-card-author-info">
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
                    <Link to={`/cards/${linkNameParser(cardName)}`} className="additional-btn" onClick={()=>copyBlogDataToState(cardId)}>
                        <div className="div"></div>
                        <div className="div"></div>
                        <div className="div"></div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCardBigItem