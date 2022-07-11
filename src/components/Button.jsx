import React from "react";      
import './Button.css';

export default (props) => {
    return(
        <>
            <button className="button"  type="submit">{props.name}</button>
        </>
    )
}