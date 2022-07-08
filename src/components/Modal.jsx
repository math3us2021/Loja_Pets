import React from "react";
import './Modal.css';

export default ({ onClose=() => {} , children }) => {
    return (
        <div className="modal">
            <div className="container">
                <br></br>
                <br></br>
                <br></br>
                <div classNameName="content">{children}</div>
                <br></br>
                <p>Após a exclusão não será possível obter mais nenhum dado do Pet!</p>
                <button  type="button" className="btn btn-danger btn-lg" >Excluir</button>
                <br></br>
                <br></br>
                <button onClick={onClose} type="button" className="btn btn-secondary btn-lg" >Voltar ao card</button>
            </div>
        </div>
    )
}