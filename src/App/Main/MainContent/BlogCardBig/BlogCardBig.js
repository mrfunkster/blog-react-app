import React from 'react'

import './BlogCardBig.css'
import BlogCardBigItem from './BlogCardBigItem'

import BlogData from '../../../../common/data/BlogData'

const cardBigContent = BlogData.filter(dataObj => dataObj.belonging === "blog-card-big");

const BlogCardBig = () => {
    return ( 
        <div className="blog-card-big-section">
            {
                cardBigContent.map(({
                    cardId,
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
                })=>(
                    <BlogCardBigItem key={cardId}
                        cardTag = {cardTag}
                        cardLink = {cardLink}
                        cardName = {cardName}
                        cardImage = {cardImage}
                        cardContent = {cardContent}
                        cardAuthorName = {cardAuthorName}
                        cardAuthorPhoto = {cardAuthorPhoto}
                        cardDate = {cardDate}
                        cardComments = {cardComments}
                        cardLikes = {cardLikes}
                    />
                ))
            }
        </div>
    )
}

export default BlogCardBig