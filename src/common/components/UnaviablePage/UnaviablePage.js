import React, { Component } from 'react'

import './UnaviablePage.css'

class UnaviablePage extends Component {

    pageHeight = () => {
        let clientHeight = document.documentElement.clientHeight;
        let footerHeight = document.querySelector('.footer').offsetHeight;
        let headerHeight = document.querySelector('.header').offsetHeight;
        let res = clientHeight - footerHeight - headerHeight + 'px'
        return res
    }

    scrollToMyRef = () => {
        let pageWidth = document.documentElement.clientWidth;
        if (pageWidth > 768) {
            window.scrollTo(0, this.myRef.offsetTop)
        } else {
            window.scrollTo(0, 0)
        }
    }
    
    componentDidMount() {
        this.scrollToMyRef();
    }

    render() {
        return (
            <div className="main" style={{minHeight: this.pageHeight()}}
                ref={(ref) => this.myRef=ref}
            >
                <section className="main-content">
                    <div className="container">
                        <div className="row">
                            <div className="col unaviable">
                                <div>
                                    <img src="/images/preloader.svg" alt=""/>
                                    <h1 style={{fontSize: "24px", textAlign: "center"}}>This page are temporary unaviable!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default UnaviablePage