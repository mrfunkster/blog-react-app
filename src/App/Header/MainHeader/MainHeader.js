import React from 'react'

import MainMenu from './MainMenu/MainMenu'
import SliderSection from './SliderSection/SliderSection'

const MainHeader = ({
    burgerButtonPressed,
    burgerButtonToggle
}) => {
    return (
        <div className="main-header">
            <MainMenu
                burgerButtonPressed = {burgerButtonPressed}
                burgerButtonToggle = {burgerButtonToggle}
            />
            <div className="container">
                <SliderSection />
            </div>
        </div>
    )
}

export default MainHeader