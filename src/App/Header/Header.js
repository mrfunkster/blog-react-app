import React from 'react'

import './Header.css'

import TopMenu from './TopMenu/TopMenu'
import MainHeader from './MainHeader/MainHeader'

const Header = ({
    burgerButtonPressed,
    burgerButtonToggle
}) => {
    return (
        <header className="header">
            <TopMenu />
            <MainHeader 
                burgerButtonPressed = {burgerButtonPressed}
                burgerButtonToggle = {burgerButtonToggle}
            />
        </header>
    )
}

export default Header