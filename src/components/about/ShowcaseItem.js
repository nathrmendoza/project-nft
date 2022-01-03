import React from 'react'

const ShowcaseItem = (props) => {
    return (
        <div className={'showcase-item ' + checkPos(props.index)}>
            <div className='avatar'>
                <img src={props.src} alt={props.desc}/>
            </div>
        </div>
    )
}

const checkPos = (e) => {
    if (e === 0)
        return 'fir';
    else if(e === 1)
        return 'sec';
    else
        return 'thi';
}

export default ShowcaseItem
