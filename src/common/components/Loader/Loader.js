import React from 'react'

import circle from './Loader.svg'
import './Loader.css'


const Loader = () => {
    return (
        <div className="loader-overlay-white">
            <div className="loader-animation">
                <img src={circle} alt="loader"/>
            </div>
        </div>
    )
}

export default Loader