import React from 'react'

import './SocialLinks.css'

import SocialLinksData from '../../../../common/data/SocialLinksData'
import SocialLinksItem from './SocialLinksItem'

const SocialLinks = () => {
    return (
        <div className="social-links">
            {
                SocialLinksData.map(({
                    name,
                    link,
                    icon,
                    id
                })=>(
                    <SocialLinksItem key={id}
                        name = {name}
                        link = {link}
                        icon = {icon}
                    />
                ))
            }
        </div>
    )
}

export default SocialLinks