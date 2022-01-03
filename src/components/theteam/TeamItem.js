import React from 'react'

const TeamItem = (props) => {
    return (
        <div className='team-item'>
            <div className='item-wrap'>
                <aside className='photo'>
                    <img src={props.photo} alt={props.name}/>
                </aside>
                <article className='details'>
                    <h5 className='name'>{props.name}</h5>
                    <h6 className='pos'>{props.role}</h6>
                </article>
            </div>
        </div>
    )
}

export default TeamItem
