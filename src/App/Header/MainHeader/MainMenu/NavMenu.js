import React from 'react'

import NavMenuData from '../../../../common/data/NavMenuData'
import NavMenuItem from './NavMenuItem'

const NavMenu = () => {
    return (
        <nav className="nav-menu">
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
        </nav>
    )
}

export default NavMenu