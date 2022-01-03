import React, {useState} from 'react'

import RoadmapNavDot from './RoadmapNavDot';
import RoadmapItem from './RoadmapItem';

const Roadmap = () => {

    const [data, setData] = useState([
        {
            id: 0,
            year: '2020',
            shown: true,
            milestones: [
                {
                    id: 0,
                    title: 'Release of NFT',
                    desc: 'Description of accomplishment',
                    year: '4th half',
                    finished: true
                },
            ]
        },
        {
            id: 1,
            year: '2021',
            shown: false,
            milestones: [
                {
                    id: 0,
                    title: 'Accomplishment',
                    desc: 'Description of accomplishment',
                    half: '1st half',
                    finished: true
                },
                {
                    id: 1,
                    title: 'Accomplishment',
                    desc: 'Description of accomplishment',
                    half: '2nd half',
                    finished: true
                }
            ]
        },
        {
            id: 2,
            year: '2022',
            shown: false,
            milestones: [
                {
                    id: 0,
                    title: 'TEST',
                    desc: 'Description of accomplishment',
                    year: '1st half',
                    finished: false
                },
            ]
        },
        {
            id: 3,
            year: '2023',
            shown: false,
            milestones: [
                {
                    id: 0,
                    title: 'TEST',
                    desc: 'Description of accomplishment',
                    year: '1st half',
                    finished: false
                },
            ]
        },
    ]);

    const navClick = (e, yr) => {
        e.preventDefault();

        let temp = data;
        temp.forEach(x=>{
            x.shown=false;
            if (x.year === yr) {
                x.shown=true;
            }
        });
        setData([...temp]);

        //remove active class
        let nav = document.querySelector('.rmap-nav.active');
        nav.classList.remove('active');
        e.target.parentElement.classList.add('active');
    }

    const items = [];
    return (
        <section className='sec-roadmap'>
            <div className='primary-wrapper'>
                <div className='top-text'>
                    <h3>The Roadmap</h3>
                    <p>Here's a showcase of some of our deadliest feline adventurers. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Quisque id enim vel tortor molestie imperdiet.</p>
                </div>
                <div className='roadmap'>
                    <div className='roadmap-navi'>
                        {
                            data.map((e,i)=>{
                                let checkfin = true;
                                e.milestones.forEach(m => {
                                    if (m.finished === false) {
                                        checkfin = false;
                                    }
                                });
                                return (
                                    <RoadmapNavDot key={i} iter={i} hasfin={checkfin} year={e.year} action={navClick}/>
                                )
                            }) 
                        }
                    </div>
                    {
                        data.forEach((e)=>{
                            if (e.shown === true) {
                                e.milestones.forEach((m,i)=>{
                                    items.push(<RoadmapItem key={i} {...m} />);
                                });
                            }
                        })
                    } 
                    <div className='roadmap-content'>
                    {items}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Roadmap
