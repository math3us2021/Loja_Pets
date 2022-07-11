import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div>
            
        <Link to={"/"}>
                <div className="titulo">
                    <p><strong>Pet's</strong></p>
                </div>
            </Link>
        </div>

    )
}