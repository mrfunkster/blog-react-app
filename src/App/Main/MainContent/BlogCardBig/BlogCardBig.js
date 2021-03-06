import React from 'react'

import './BlogCardBig.css'
import BlogCardBigItem from './BlogCardBigItem'

import BlogData from '../../../../common/data/BlogData'
import { BlogCardSizeSort } from '../../../../common/data/Functions'

const BlogCardBig = ({
    cardBigContent = BlogCardSizeSort(BlogData, "blog-card-big"),
    copyBlogDataToState
}) => {
    return ( 
        <div className="blog-card-big-section">
            {
                cardBigContent.map(({
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
                    <BlogCardBigItem key={cardId}
                        cardTag = {cardTag}
                        cardName = {cardName}
                        cardImage = {cardImage}
                        cardContent = {cardContent}
                        cardAuthorName = {cardAuthorName}
                        cardAuthorPhoto = {cardAuthorPhoto}
                        cardDate = {cardDate}
                        cardComments = {cardComments}
                        cardLikes = {cardLikes}
                        cardId = {cardId}
                        copyBlogDataToState = {copyBlogDataToState}
                    />
                ))
            }
        </div>
    )
}

export default BlogCardBig