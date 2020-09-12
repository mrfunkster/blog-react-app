import React from 'react'

import MainContentPage from './MainContentPage'

const MainContent = ({
    copyBlogDataToState
}) => {
    return (
        <section className="main-content">
            <div className="container">
                <MainContentPage 
                    copyBlogDataToState = {copyBlogDataToState}
                />
            </div>
        </section>
    )
}

export default MainContent