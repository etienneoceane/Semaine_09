import React from 'react'
import Logo from '../assets/logo.png'

function Banner() {
    const title = 'La maison jungle'

    return (
            <div className="lmj-banner">
            <img src={Logo} alt='La maison jungle' className='lmj-logo'/>
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner
