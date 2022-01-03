import React, {useState} from 'react'
import GalleryItem from './GalleryItem';

import image from '../../assets/images/sample-showcase.png';
import image2 from '../../assets/images/sample-showcase2.png';

const Gallery = () => {
    const [data, setData] = useState([
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
        {
            src: image
        },
        {
            src: image2
        },
    ])

    return (
        <section className='sec-gallery'>
            <div className='primary-wrapper'>
                <div className='top-text'>
                    <h3>Cat Gallery</h3>
                    <p>Here's a showcase of some of our deadliest feline adventurers. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Quisque id enim vel tortor molestie imperdiet.</p>
                </div>
                <div className='gallery-list'>
                    {data.map((e,i)=><GalleryItem key={i} src={e.src}/>)}
                </div>
            </div>
        </section>
    )
}

export default Gallery
