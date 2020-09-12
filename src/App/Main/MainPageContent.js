import React from 'react'
import {motion} from 'framer-motion'

import MainSortField from './MainSortField/MainSortField'
import MainContent from './MainContent/MainContent'
import MainImages from './MainImages/MainImages'
import SubscribeSection from './SubscribeSection/SubscribeSection'

const MainPageContent = ({
    copyBlogDataToState
}) => {
    return (
        <motion.div className="main"
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <MainSortField />
            <MainContent 
                copyBlogDataToState = {copyBlogDataToState}
            />
            <MainImages />
            <SubscribeSection />
        </motion.div>
    )
}

export default MainPageContent