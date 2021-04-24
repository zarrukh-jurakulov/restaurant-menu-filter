import React from 'react'
//import products from './data'

const Card = (props) => {
    
    return (
        <div className='card-items' key={props.id}>
            <img src={props.image} alt='Products' />
            <div className='header'>
                <h4>{props.name}</h4>
                <h4>${props.price}</h4>
            </div>

        </div>
    )
     
    }

export default Card