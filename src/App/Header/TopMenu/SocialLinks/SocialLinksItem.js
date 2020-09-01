import React from 'react'

const SocialLinksItem = ({
    name,
    link,
    icon
}) => {
    return (
        <div className="social-link">
            <a href={link} target="blank">
                <img src={icon} alt={name + "Icon"}/>
            </a>
        </div>
    )
}

export default SocialLinksItem