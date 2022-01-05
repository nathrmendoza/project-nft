import React from 'react'
import HeroImage from './HeroImage';
import {Parallax} from 'react-parallax';

//layers
import layer1 from '../assets/images/parallax_layers/1.png';
import layer2 from '../assets/images/parallax_layers/2.png';
import layer3 from '../assets/images/parallax_layers/3.png';
import layer4 from '../assets/images/parallax_layers/4.png';
import layer5 from '../assets/images/parallax_layers/5.png';
import layer6 from '../assets/images/parallax_layers/6.png';
import layer7 from '../assets/images/parallax_layers/7.png';
import layer8 from '../assets/images/parallax_layers/8.png';

const layers = [
    {
        src : layer1,
        parallaxed: true,
        strength: 0,
        disabled: true
    },
    {
        src : layer2,
        parallaxed: true,
        strength: 0,
        disabled: false
    },
    {
        src : layer3,
        parallaxed: false,
        strength: 50,
        disabled: false
    },
    {
        src : layer4,
        parallaxed: false,
        strength: 100,
        disabled: false
    },
    {
        src : layer5,
        parallaxed: false,
        strength: 100,
        disabled: false
    },
    {
        src : layer6,
        parallaxed: false,
        strength: 150,
        disabled: false
    },
    {
        src : layer7,
        parallaxed: false,
        strength: 250,
        disabled: false
    },
    {
        src : layer8,
        parallaxed: false,
        strength: 300,
        disabled: false
    },
];

const Hero = () => {

    return (
        <section className='hero-parallax'>
            <div className='layers_holder'>
                {layers.map((e,i)=>{return(
                    <Parallax className={(e.disabled) ? 'disabled' : ''} key={i} disabled={e.disabled} bgImage={e.src} strength={e.strength}>
                    {/* <HeroImage key={i} {...e}/> */}
                    </Parallax>
                )})}
            </div>
        </section>
    )
}


export default Hero
