import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { connect } from 'react-redux'

import './BlogCardPageContent.css'
import CommentsForm from '../../common/components/CommentsForm'
import Loader from '../../common/components/Loader/Loader'

class BlogCardPageContent extends Component {

    state = {
        isImageLoaded: false
    }

    scrollToMyRef = () => {
        let pageWidth = document.documentElement.clientWidth;
        if (pageWidth > 768) {
            window.scrollTo(0, this.myRef.offsetTop)
        } else {
            window.scrollTo(0, 0)
        }
    }
    
    componentDidMount() {
        this.scrollToMyRef();
    }

    imageLoaded = () => {
        this.setState({
            isImageLoaded: true
        })
    }

    render() {
        const {
            cardId,
            cardImage,
            cardName,
            cardTag,
            cardAuthorName,
            cardComments,
            cardLikes,
            cardAuthorPhoto,
            cardContent,
            cardDate,
            cardContentFull,
            isLiked,
            addLike,
            removeLike
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
                            <div className="card-comment-section">
                                <div className="blog-page-card-section">
                                    <div className="blog-card-big-img">
                                        <img src={cardImage} alt=""
                                            onLoad={this.imageLoaded}
                                        />
                                        {!this.state.isImageLoaded && <Loader />}
                                        <div className="card-tag">{cardTag}</div>
                                        <div className="author-social-activities">
                                            <div className="author-activities comments">
                                                <div className="icon">
                                                    <img src="/images/icons/forum_white.png" alt=""/>
                                                </div>
                                                <div className="text-info">{cardComments}</div>
                                            </div>
                                            <div className="author-activities likes"
                                                onClick={() => isLiked ? removeLike(cardId) : addLike(cardId)}
                                            >
                                                <div className="icon">
                                                    <img src="/images/icons/favorite_border_white.png" alt=""/>
                                                </div>
                                                <div className="text-info">{isLiked ? +cardLikes + 1 : cardLikes}</div>
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
                                <div className="navigation-block">
                                    <CommentsForm 
                                        cardComments = {cardComments}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    isLiked: state.postsLikeState[props.cardId]
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (cardId) => dispatch({
        type: "LIKE",
        id: cardId
    }),
    removeLike: (cardId) => dispatch({
        type: "DISLIKE",
        id: cardId
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlogCardPageContent)