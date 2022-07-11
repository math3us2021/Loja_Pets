import React from "react";      
import './Button.css';

export default (props) => {
    return(
        <div>
            <button className="button"  type="submit"  onClick={props.onClick}>{props.name}</button>
        </div>
    )
}