import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
    return (
        <div>
            {/* <nav className="navbar navbar-dark bg-dark">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Marca escondida</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home Page<span className="sr-only"></span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Desativado</a>
                        </li>
                    </ul>
                    <nav class="navbar navbar-light bg-light">
                        <form onSubmit={props.onSubmit} className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Pesquisar" onChange={props.onChange} value={props.value}></input>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                        </form>
                    </nav>
                </div>
            </nav> */}
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