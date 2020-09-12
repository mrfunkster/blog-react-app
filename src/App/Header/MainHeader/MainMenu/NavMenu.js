import React from 'react'

import NavMenuData from '../../../../common/data/NavMenuData'
import NavMenuItem from './NavMenuItem'

const NavMenu = () => {
    return (
        <ul>
            {
                NavMenuData.map(({
                    name,
                    link
                })=>(
                    <NavMenuItem key = {name} 
                        name = {name}
                        link = {link}
                    />
                ))
            }
        </ul>
    )
}

export default NavMenu