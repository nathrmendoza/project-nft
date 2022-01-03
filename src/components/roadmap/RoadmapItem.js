import React from 'react'

const RoadmapItem = (props) => {
    return (
        <div className={(props.finished === true) ? 'milestone fin' : 'milestone'}>
            <h4>{props.title}</h4>
            <span className='release'>{props.half}</span>
            <p>{props.desc}</p>
        </div>
    )
}

export default RoadmapItem
