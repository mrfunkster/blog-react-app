import React from 'react'
import { connect } from 'react-redux'

import './Preloader.css'
import preloader from './preloader.svg'

const Preloader = ({
    isLoaded,
    pageLoaded
}) => {
    return (
        <div className={isLoaded ? "page-loader hide" : "page-loader"}>
            <div className="loader-overlay"></div>
            <div className="loader-svg">
                <img src={preloader} alt="loader"/>
                <p>Page is loading...</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLoaded: state.loaderState.isLoaded
})

export default connect(
    mapStateToProps
)(Preloader)