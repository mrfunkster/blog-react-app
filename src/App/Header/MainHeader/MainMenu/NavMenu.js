import React, { Component } from 'react'

import NavMenuData from '../../../../common/data/NavMenuData'
import NavMenuItem from './NavMenuItem'


class NavMenu extends Component {

    state = {
        isActive: {}
    }

    isActiveObject = () => {
        let objArr = NavMenuData.map(({name}, index) => (
            (index === 0) ? {[name]: true} : {[name]: false}
        ))
        let isClickedObj = {}
        for (let i = 0; i < objArr.length; i++) {
            Object.assign(isClickedObj, objArr[i])
        }
        this.setState({
            isActive: isClickedObj
        })
    }

    markActive = (name) => {
        let clickedObj  = this.state.isActive
        for (let key in clickedObj) {
            clickedObj[key] = false
        }
        clickedObj[name] = true;
        this.setState({
            isActive: clickedObj
        })
    }

    componentDidMount() {
        this.isActiveObject()
    }
    

    render() {
        return (
            <ul> 
                {
                    NavMenuData.map(({name})=>(
                        <NavMenuItem key = {name} 
                            name = {name}
                            isActive = {this.state.isActive}
                            markActive = {this.markActive}
                        />
                    ))
                }
            </ul>
        )
    }
}

export default NavMenu