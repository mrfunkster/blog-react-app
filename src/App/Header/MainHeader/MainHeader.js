import React from 'react'

import MainMenu from './MainMenu/MainMenu'
import SliderSection from './SliderSection/SliderSection'

const MainHeader = () => {
    return (
        <div className="main-header">
            <MainMenu/>
            <div className="container">
                <SliderSection />
            </div>
        </div>
    )
}

export default MainHeader