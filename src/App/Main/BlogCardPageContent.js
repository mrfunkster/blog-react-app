import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

class BlogCardPageContent extends Component {

    scrollToMyRef = () => window.scrollTo(0, this.myRef.offsetTop)
    
    componentDidMount() {
        this.scrollToMyRef()
    }

    render() {
        const {
            cardImage,
            cardName,
            cardTag,
            cardAuthorName,
            cardComments,
            cardLikes,
            cardAuthorPhoto,
            cardContent,
            cardDate,
            cardContentFull
        } = this.props
        return (
            <motion.div className="main"
                initial={{opacity: 0}}
                exit={{opacity: 0}}
                animate={{opacity: 1}}
                ref={(ref) => this.myRef=ref}
            > 
                <div className="container">
                    <div className="row">
                        <div className="blog-card-big" style={{width: "100%"}}>
                            <div className="blog-card-big-text">
                                    <h4 style={{textAlign: "center", fontSize: "26px"}}>{cardName}</h4>
                                </div>
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
                                    <p>{cardContent}</p>
                                    <p>{cardContentFull}</p>
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
                                    <Link to="/">Go Home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }
}

export default BlogCardPageContent