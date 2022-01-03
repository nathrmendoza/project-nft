import React, { useState, useEffect } from 'react';
import ShowcaseItem from './ShowcaseItem';
import Slider from 'react-slick';

//images
import image1 from '../../assets/images/sample-showcase.png';
import image2 from '../../assets/images/sample-showcase2.png'

const About = () => {

    const [showcase, setShowcase] = useState([
        {
            id: 0,
            desc: 'test',
            src: image1
        },
        {
            id: 1,
            desc: 'test',
            src: image2
        },
        {
            id: 2,
            desc: 'test',
            src: image1
        }
    ]);
    const [focus, setFocus] = useState(1);

    //component mounted
    useEffect(()=> {
        flipUX();
    });

    return (
        <section className='sec-about-us'>
            <div className='primary-wrapper'>
                <div className='left-col'>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque sit amet bibendum arcu, id euismod orci. Donec 
                    tincidunt neque at leo lobortis, ac congue massa imperdiet. 
                    Phasellus scelerisque ante in erat interdum scelerisque. Sed a 
                    purus dui. Vestibulum vel elit mi. Vivamus sed pulvinar turpis, 
                    in rhoncus tellus. Praesent posuere.</p>
                </div>
                <div className='right-col'>
                    <div className={'showcase focus-' + focus}>
                        {showcase.map((item, i) => <ShowcaseItem index={i} key={item.id} src={item.src} alt={item.desc}/>)}
                    </div>
                </div>
            </div>
        </section>
    )

}

//flipping images
const flipUX = () => {
    let cards = document.querySelectorAll('.showcase-item');
    setInterval(() => {
        for (var x=0; x < cards.length; x++) {
            let card = cards[x];
            if (cards[x].classList.contains('fir')) {
                cards[x].classList.add('frw');
                setTimeout(() => {
                    card.classList.remove('fir');
                    card.classList.add('thi');
                }, 400);
                setTimeout(()=> {
                    card.classList.remove('frw');
                }, 700);
            }
            else if (cards[x].classList.contains('sec')) {
                cards[x].classList.remove('sec');
                cards[x].classList.add('fir');
            }
            else if (cards[x].classList.contains('thi')) {
                cards[x].classList.remove('thi');
                cards[x].classList.add('sec');
            }
        }
    }, 5000);
}

export default About
