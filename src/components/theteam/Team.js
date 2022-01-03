import React, {useState} from 'react'

import TeamItem from './TeamItem';
import image from '../../assets/images/sample-showcase.png';
import image2 from '../../assets/images/sample-showcase2.png';

const Team = () => {

    const [data,setData] = useState([
        {
            id: 0,
            name: 'Nath',
            role: 'Co-Founder | Dev lead',
            photo: image
        },
        {
            id: 1,
            name: 'Vico',
            role: 'Co-Founder | Art lead',
            photo: image2
        }
    ])

    return (
        <section className='sec-the-team'>
            <div className='primary-wrapper'>
                <div className='top-text'>
                    <h3>The Team</h3>
                    <p>Here's a showcase of some of our deadliest feline adventurers. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Quisque id enim vel tortor molestie imperdiet.</p>
                </div>
                <div className='team-list'>
                    {data.map(e=><TeamItem key={e.id} name={e.name} role={e.role} photo={e.photo} />)}
                </div>
            </div>
        </section>
    )
}

export default Team
