import React from 'react'

const HeroImage = (props) => {

    const handleLoad = () => {
        console.log('yow')
    }

    return (
        <img src={props.src} alt={'layer'+props.index} onLoad={handleLoad()}/>
    )
}

export default HeroImage
