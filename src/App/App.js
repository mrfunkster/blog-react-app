import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../common/style/reset.css'
import '../common/style/grid.css'
import '../common/style/style.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

    state = {
        burgerButtonPressed: false,
        overlayVisible: false
    }

    componentDidMount() {
        this.pageLoader()
    }

    pageLoader = () => {
        let images = document.images;
        let imagesTotalCount = images.length;
        let imagesLoadedCount = 0;
        let percentDisplay = document.getElementById('load-progress');

        const hideLoader = () => {
            let loader = document.querySelector("#page-loader")
            loader.classList.add("hide")
            setTimeout(() => {
                document.body.classList.remove("lock")
            }, 500)
        }

        const imageLoaded = () => {
            imagesLoadedCount++;
            percentDisplay.innerHTML = ' ' + (((100 / imagesTotalCount) * imagesLoadedCount) << 0) + '%';
            if (imagesLoadedCount >= imagesTotalCount) {
                setTimeout(() => {
                    hideLoader();
                }, 500)
            }
        }

        for (let i = 0; i < imagesTotalCount; i++) {
            let imageClone = new Image();
            imageClone.onload = imageLoaded;
            imageClone.onerror = imageLoaded;
            imageClone.src = images[i].src
        }
    }

    burgerButtonToggle = () => {
        let body = document.body;
        let screenWidth = document.documentElement.clientWidth
        if (screenWidth <= 768) {
            this.setState({
                burgerButtonPressed: !this.state.burgerButtonPressed,
            })
            if (!this.state.burgerButtonPressed) {
                body.classList.add('lock')
            } else {
                body.classList.remove('lock')
            }
        }
    }

    render() {
        return (
            <div className="react-app-code">
                <Header 
                    burgerButtonToggle = {this.burgerButtonToggle}
                    burgerButtonPressed = {this.state.burgerButtonPressed}
                />
                <Main />
                <div className={this.state.burgerButtonPressed ? "overlay active" : "overlay"}></div>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageLoaded: () => dispatch({
        type: "PAGE_LOADED"
    })
})

export default connect(
    null,
    mapDispatchToProps
)(App)