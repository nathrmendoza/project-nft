import React, {useState} from 'react'

import RoadmapNavDot from './RoadmapNavDot';
import RoadmapItem from './RoadmapItem';

const Roadmap = () => {

    const [data, setData] = useState([
        {
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
                    finished: false
                }
            ]
        }
    ]);

    const navClick = (e, yr) => {
        e.preventDefault();
        let temp = data;
        temp.map(x=>{
            x.shown=false;
            if (x.year === yr) {
                x.shown=true;
            }
        });
        setData([...temp]);
    }

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
                                let checkfin = false;
                                e.milestones.forEach(m => {
                                    console.log(m.finished);
                                    console.log(checkfin);
                                    if (m.finshed === true) {
                                        checkfin = true;
                                        console.log(checkfin);
                                    }
                                });
                                return (
                                    <RoadmapNavDot key={i} hasfin={checkfin} year={e.year} action={navClick}/>
                                )
                            }) 
                        }
                    </div>
                        {data.map(e=>{
                            if (e.shown === true) {
                                return (
                                    <div className='roadmap-content'>
                                        {e.milestones.map(e=><RoadmapItem {...e} key={e.id}/>)}
                                    </div>
                                )
                            }
                            return null;
                        })}
                </div>
            </div>
        </section>
    )
} 


export default Roadmap
