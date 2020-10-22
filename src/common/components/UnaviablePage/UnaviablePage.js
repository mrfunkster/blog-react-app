import React from 'react'

import './UnaviablePage.css'

const UnaviablePage = () => {
    return (
        <div className="main" style={{minHeight: "100vh"}}>
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

export default UnaviablePage