import React from "react";
import './Input.css';

export default (props) => {
    
    return(
        <div>
            <div className="InputDiv">
                <input className="Input" type="text" value={props.value} name={props.name} onChange={props.onChange} placeholder={props.placeholder}></input>
            </div>
        </div>
    )
}