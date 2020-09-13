import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { linkNameParser } from '../../../../common/data/Functions'


class NavMenuItem extends Component {

    state = {
        isClicked: false
    }

    navMenuClick = () => {
        this.setState({
            isClicked: true
        })
    }

    render() {
        const {
            name,
            isActive,
            markActive
        } = this.props
        return (
            <li className={isActive[name] ? "active" : ""}>
                <Link onClick={()=>markActive(name)} to={linkNameParser(name)==="home" ? "/" : `/${linkNameParser(name)}`}>{name}</Link>
            </li>
        )
    }
}

export default NavMenuItem