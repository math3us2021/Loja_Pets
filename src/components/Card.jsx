import React , {useState} from "react";
import './Card.css';
import {Link} from 'react-router-dom'

import Modal from './Modal'
import Checkbox from "./Checkbox";



export default  (props) => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    function typeImage(){

        const tipo = props.type;
        if (tipo.toLowerCase() === "cachorro")
            return (
                <img className="card-img-top" src="https://media.npr.org/assets/img/2022/05/17/licking-9e90945ed8527990b7bbff992143dc75293549e6-s1100-c50.jpg" alt="Imagem de capa do card"></img>
             )
        else if (tipo.toLowerCase() === "gato")
            return (
            <img className="card-img-top" src="https://wallpaperaccess.com/full/30882.jpg" alt="Imagem de capa do card"></img>)
            
        else if (tipo.toLowerCase() === "passaro")
        return (
            <img className="card-img-top" src="https://sonhamos.com.br/wp-content/uploads/2020/09/sonhar-com-calopsita-colorida.jpg" alt="Imagem de capa do card"></img>)

        else if (tipo.toLowerCase() == "tartaruga")
        return (
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyNN7KZJU9LTVtsJcFtjFWPZhnaK70c3EmbFH91HTzQLhKyom59_Kaf2aAo_5mnLV0t4&usqp=CAU" alt="Imagem de capa do card"></img>)
        else if (tipo.toLowerCase() === "outros")
        return (
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sUWHGI36ykVALQcJyfXdPEgmdPunowWzEGPtzRWyCJ6jhAtL_8Pco-OaOM5zQ-1W9Js&usqp=CAU" alt="Imagem de capa do card"></img>)
    }


    return (
        <div>
            
        <div className="card" style={{width: "18rem"}}>
            {typeImage()}
                <div className="card-body">
                    
                    <h3 className="card-title"><strong>Nome: </strong>{props.name}</h3>
                    <p className="card-text"><strong>Tipo   : </strong>{props.type}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Idade: </strong>{props.age}</li>
                    <li className="list-group-item"><strong>Peso: </strong>{props.weight}</li>
                    
                </ul>
               
                <div className="card-body">
                    <Checkbox 
                             id={props.id}
                             name={props.name}
                             type={props.type}
                             age={props.age}
                             weight={props.weight}
                             isDocile={props.isDocile}

                    />
                    <button type="button" className="btn btn-danger" name="Deletar" onClick={()=> setIsModalVisible(true)}  >Deletar </button>
                
                    {isModalVisible ? <Modal handleDelete={props.handleDelete} id={props.id} onClose={() =>setIsModalVisible(false)}><h1><strong>Deseja realmente excluir o item</strong></h1></Modal> : null}

                    <Link to={`/edit/${props.id}`}>
                        <button type="button" className="btn btn-warning" name="Editar" >Editar </button>
                    </Link>
             
                
                
             
                
                </div>
        </div>
        </div>
    )
}