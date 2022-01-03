import React from 'react'

const RoadmapNavDot = ({iter, year, action, hasfin}) => {

    const setupClass = () => {
        let classstring = 'rmap-nav ';

        //first initial
        if (iter === 0) {
            classstring+='active ';
        }
        if (hasfin === false) {
            classstring+='not-done';
        } else {
            classstring+='done';
        }
        return classstring;
    }
    return (
        <div className={setupClass()} data-year={year} onClick={e=>action(e, year)}>
            <span className='circle'></span>
            <span className='date-popup'>{year}</span>
        </div>
    )
}

export default RoadmapNavDot
