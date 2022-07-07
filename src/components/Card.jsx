import React from "react";
import './Card.css';


export default  (props) => {
    
    function typeImage(){
        const tipo = props.type;
        if (tipo.toLowerCase() === "cachorro")
            return (
                <img class="card-img-top" src="https://media.npr.org/assets/img/2022/05/17/licking-9e90945ed8527990b7bbff992143dc75293549e6-s1100-c50.jpg" alt="Imagem de capa do card"></img>
             )
        else if (tipo.toLowerCase() === "gato")
            return (
            <img class="card-img-top" src="https://wallpaperaccess.com/full/30882.jpg" alt="Imagem de capa do card"></img>)
            
        else if (tipo.toLowerCase() === "passaro")
        return (
            <img class="card-img-top" src="https://sonhamos.com.br/wp-content/uploads/2020/09/sonhar-com-calopsita-colorida.jpg" alt="Imagem de capa do card"></img>)

        else if (tipo.toLowerCase() == "tartaruga")
        return (
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyNN7KZJU9LTVtsJcFtjFWPZhnaK70c3EmbFH91HTzQLhKyom59_Kaf2aAo_5mnLV0t4&usqp=CAU" alt="Imagem de capa do card"></img>)
        else if (tipo.toLowerCase() === "outros")
        return (
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sUWHGI36ykVALQcJyfXdPEgmdPunowWzEGPtzRWyCJ6jhAtL_8Pco-OaOM5zQ-1W9Js&usqp=CAU" alt="Imagem de capa do card"></img>)
    }


    return (
        <div>
            
        <div className="card" style={{width: "18rem"}}>
            {typeImage()}
                <div class="card-body">
                    
                    <h3 class="card-title"><strong>Nome: </strong>{props.name}</h3>
                    <p class="card-text"><strong>Tipo   : </strong>{props.type}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Idade: </strong>{props.age}</li>
                    <li class="list-group-item"><strong>Peso: </strong>{props.weight}</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-danger" name="Deletar" onClick={() => props.handleDelete(props.id)} >Deletar </button>
                <button type="button" class="btn btn-secondary" name="Editar"  >Editar </button>
                    
                </div>
        </div>
        </div>
    )
}