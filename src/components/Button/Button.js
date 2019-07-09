import React from 'react';
import './Button.css'

const Button = (props)=>{
    return(
     <button className='Button' type="button" onClick={props.click} disabled={props.isDisabled}>{props.children}</button>
    )
}

export default Button;