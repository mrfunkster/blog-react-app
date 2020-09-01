import React from 'react'

import './Header.css'

import TopMenu from './TopMenu/TopMenu'
import MainHeader from './MainHeader/MainHeader'

const Header = () => {
    return (
        <header className="header">
            <TopMenu />
            <MainHeader />
        </header>
    )
}

export default Header