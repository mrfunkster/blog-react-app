import React from 'react'

import BlogData from '../../../../common/data/BlogData'
import SmallCardVerticalItem from './SmallCardVerticalItem'

const smallCardVerticalContent = BlogData.filter(dataObj => dataObj.belonging === "blog-card-small-ver");

const SmallCardVertical = () => {
    return (
        <div className="blog-card-small-vertical-section">
            {
                smallCardVerticalContent.map(({
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
                    <SmallCardVerticalItem key={cardId}
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

export default SmallCardVertical