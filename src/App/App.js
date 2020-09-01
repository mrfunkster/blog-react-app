import React, { Component } from 'react'

import '../common/style/reset.css'
import '../common/style/grid.css'
import '../common/style/style.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

    render() {
        return (
            <div className="react-app-code">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App