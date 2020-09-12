import React from 'react'

import BlogData from '../../../../common/data/BlogData'
import SmallCardHorizontalItem from './SmallCardHorizontalItem'
import { BlogCardSizeSort } from '../../../../common/data/Functions'

const SmallCardHorizontal = ({
    smallCardHorizontalContent = BlogCardSizeSort(BlogData, "blog-card-small-hor"),
    copyBlogDataToState
}) => {
    return (
        <div className="blog-card-small-horizontal-section">
            {
                smallCardHorizontalContent.map(({
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
            }
        </div>
    )
}

export default SmallCardHorizontal