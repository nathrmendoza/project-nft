import React from 'react'
import check from '../../assets/images/checkmark.png';

const RoadmapItem = (props) => {
    return (
        <div className={(props.finished === true) ? 'milestone fin' : 'milestone'}>
            <h4>{props.title}{(props.finished === true) ? <img className='check' src={check} alt='done'/> : ''}</h4>
            <span className='release'>{props.half}</span>
            <p>{props.desc}</p>
        </div>
    )
}

export default RoadmapItem
