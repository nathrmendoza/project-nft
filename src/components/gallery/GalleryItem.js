import React from 'react'
import Popup from 'reactjs-popup';

const GalleryItem = (props) => {
    const element = 
    <div className='gallery-item'>
        <img src={props.src} alt='#'/>
    </div>

    return (
        <Popup trigger={element} position="center center" modal nested>
            <img src={props.src} alt="#"/>
        </Popup>
    )
}

export default GalleryItem
