import React from 'react'

import './SliderSection.css'

import SliderData from '../../../../common/data/SliderData'
import SliderItem from './SliderItem'

const SliderSection = () => {
    return (
        <div className="slider-section">
            {
                SliderData.map(({
                    slideId,
                    slideBackground,
                    tag,
                    name,
                    link,
                    authorName,
                    authorPhoto,
                    authorDate,
                    authorComments,
                    authorLikes
                })=>(
                    <SliderItem key = {slideId}
                        slideBackground = {slideBackground}
                        tag = {tag}
                        name = {name}
                        link = {link}
                        authorName = {authorName}
                        authorPhoto = {authorPhoto}
                        authorDate = {authorDate}
                        authorComments = {authorComments}
                        authorLikes = {authorLikes}
                    />
                ))
            }
        </div>
    )
}

export default SliderSection