import React from 'react'

const Buttons = (props) => {
    return (
        <div>
            <button onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Buttons