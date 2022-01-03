import React from 'react'

const RoadmapNavDot = ({year, action, hasfin}) => {
    return (
        <div className={(hasfin === false) ? 'rmap-nav not-done' : 'rmap-nav'} data-year={year} onClick={e=>action(e, year)}>
            <span className='date-popup'>{year}</span>
            <span className='circle'></span>
        </div>
    )
}

export default RoadmapNavDot
