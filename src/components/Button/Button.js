import React from 'react'
import './Button.css';

const Button = ({text, icon}) => {
    return (
        <>
            <button className="site-btn icon">{text} <i>{icon}</i></button>
        </>
    )
}

export default Button
