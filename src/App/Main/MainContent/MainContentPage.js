import React from 'react'
import { connect } from 'react-redux'
import { keys } from 'lodash'

import BlogCardBig from './BlogCardBig/BlogCardBig'
import BlogCardSmallHorizontal from './BlogCardSmall/SmallCardHorizontal'
import BlogCardSmallVertical from './BlogCardSmall/SmallCardVertical'
import SmallCardHorizontalItem from './BlogCardSmall/SmallCardHorizontalItem'
import BlogData from '../../../common/data/BlogData'
import { getProductsMap } from '../../../common/data/Functions'
import NavigationBlock from './NavigationBlock/NavigationBlock'

const showSortedPosts = (tag, copyBlogDataToState) => {
    let resultArray = BlogData.filter(dataObj => dataObj.cardTag === tag)
    if (resultArray.length) {
        return (
            resultArray.map(({
                cardId,
                cardTag,
                cardName,
                cardImage,
                cardContent,
                cardAuthorName,
                cardAuthorPhoto,
                cardDate,
                cardComments,
                cardLikes
            })=>(
                <SmallCardHorizontalItem key={cardId}
                    cardTag = {cardTag}
                    cardName = {cardName}
                    cardImage = {cardImage}
                    cardContent = {cardContent}
                    cardAuthorName = {cardAuthorName}
                    cardAuthorPhoto = {cardAuthorPhoto}
                    cardDate = {cardDate}
                    cardComments = {cardComments}
                    cardLikes = {cardLikes}
                    copyBlogDataToState = {copyBlogDataToState}
                    cardId = {cardId}
                />
            ))
        )
    } else {
        return "EMPTY"
    }
}

const showLikedPosts = (likedPosts, copyBlogDataToState) => {
    let resultArray = keys(likedPosts)
    let likedPostsObj = getProductsMap(BlogData)
    if (resultArray.length) {
        return (
            resultArray.map((cardId) => (
                <SmallCardHorizontalItem key={likedPostsObj[cardId].cardId}
                    cardTag = {likedPostsObj[cardId].cardTag}
                    cardName = {likedPostsObj[cardId].cardName}
                    cardImage = {likedPostsObj[cardId].cardImage}
                    cardContent = {likedPostsObj[cardId].cardContent}
                    cardAuthorName = {likedPostsObj[cardId].cardAuthorName}
                    cardAuthorPhoto = {likedPostsObj[cardId].cardAuthorPhoto}
                    cardDate = {likedPostsObj[cardId].cardDate}
                    cardComments = {likedPostsObj[cardId].cardComments}
                    cardLikes = {likedPostsObj[cardId].cardLikes}
                    copyBlogDataToState = {copyBlogDataToState}
                    cardId = {cardId}
                />
            ))
        )
    } else {
        return <p style={{paddingBottom: "30px", textAlign: "center"}}>There is no liked posts to show yet</p>
    }
}

const MainContentPage = ({
    copyBlogDataToState,
    show,
    likedPosts
}) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-73 main-blog">
                {
                    show === "allPosts" ?
                    <div className="main-blog-content">
                        <BlogCardBig 
                            copyBlogDataToState = {copyBlogDataToState}
                        />
                        <BlogCardSmallHorizontal 
                            copyBlogDataToState = {copyBlogDataToState}
                        />
                        <BlogCardSmallVertical 
                            copyBlogDataToState = {copyBlogDataToState}
                        />
                    </div>
                    : show === "inspiration" ? 
                        <div className="main-blog-content">
                            {
                                showSortedPosts("Inspiration", copyBlogDataToState)
                            }
                        </div>
                    : show === "lifestyle" ?
                        <div className="main-blog-content">
                            {
                                showSortedPosts("Lifestyle", copyBlogDataToState)
                            }
                        </div>
                    : show === "likedPosts" ? 
                        <div className="main-blog-content">
                            {
                                showLikedPosts(likedPosts, copyBlogDataToState)
                            }
                        </div>
                    : "EMPTY"
                }
            </div>
            <div className="col-sm-12 col-27 navigation-block">
                <NavigationBlock />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    show: state.postsToShow.show,
    likedPosts: state.postsLikeState
})

export default connect(
    mapStateToProps
)(MainContentPage)