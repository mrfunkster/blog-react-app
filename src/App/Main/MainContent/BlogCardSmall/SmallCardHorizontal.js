import React from 'react'

import BlogData from '../../../../common/data/BlogData'
import SmallCardHorizontalItem from './SmallCardHorizontalItem'
import { BlogCardSizeSort } from '../../../../common/data/Functions'

const SmallCardHorizontal = ({
    smallCardHorizontalContent = BlogCardSizeSort(BlogData, "blog-card-small-hor")
}) => {
    return (
        <div className="blog-card-small-horizontal-section">
            {
                smallCardHorizontalContent.map(({
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
                    <SmallCardHorizontalItem key={cardId}
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

export default SmallCardHorizontal