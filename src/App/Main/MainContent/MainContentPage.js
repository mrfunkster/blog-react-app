import React from 'react'

import BlogCardBig from './BlogCardBig/BlogCardBig'
import BlogCardSmallHorizontal from './BlogCardSmall/SmallCardHorizontal'
import BlogCardSmallVertical from './BlogCardSmall/SmallCardVertical'

const MainContentPage = ({
    copyBlogDataToState
}) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-73 main-blog">
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
            <div className="col-sm-12 col-27 navigation-block"></div>
        </div>
    )
}

export default MainContentPage