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
        burgerButtonPressed: false
    }

    componentDidMount() {

    }

    burgerButtonToggle = () => {
        let body = document.body;
        console.log(body)
        this.setState({
            burgerButtonPressed: !this.state.burgerButtonPressed
        })
        if (!this.state.burgerButtonPressed) {
            body.classList.add('lock')
        } else {
            body.classList.remove('lock')
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