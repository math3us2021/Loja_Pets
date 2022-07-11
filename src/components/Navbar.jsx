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
            {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" onChange={props.onChange}></input>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form> */}
        </div>

    )
}