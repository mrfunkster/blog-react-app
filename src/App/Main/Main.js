import React from 'react'

import './Main.css'

import MainSortField from './MainSortField/MainSortField'
import MainContent from './MainContent/MainContent'
import MainImages from './MainImages/MainImages'
import SubscribeSection from './SubscribeSection/SubscribeSection'

const Main = () => {
    return (
        <main className="main">
            <MainSortField />
            <MainContent />
            <MainImages />
            <SubscribeSection />
        </main>
    )
}

export default Main