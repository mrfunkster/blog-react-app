import React from 'react'

const NavMenuItem = ({
    name,
    link
}) => {
    return (
        <li>
            <a href={link}>{name}</a>
        </li>
    )
}

export default NavMenuItem