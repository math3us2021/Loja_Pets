import React, { useEffect, useState } from "react";
import axios from "axios";
import './index.css';
import { Link , useParams} from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

function App() {

  const [pets, setPets] = useState([]);
  const [formValues, setFormValues] = useState({});

  function upDateFormValues(e) {
    axios.put(`http://localhost:3004/pets/${formValues.id}`,
      {
        name: String(formValues.name),
        type: String(formValues.type),
        age: Number(formValues.age),
        weight: Number(formValues.weight)
    })
    .then((res) => {
      setPets(pets.map(pet => pet.id === formValues.id ? res.data : pet))
    })
  }
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3004/pets/${id}`).then((res) => setFormValues(res.data));
    
  } 
  , []);



  // useEffect(() => {
  //   axios.get("http://localhost:3004/pets").then((res) => setPets(res.data));
  // }, []);


  const handleInputChange = (e) => { // escuta a mudança do input
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  console.log('***** handleInputChange', formValues)
  return (
    <div className="App">
      <Navbar/>
      <form onSubmit={upDateFormValues}>
        <Input name="name" onChange={handleInputChange} value={formValues.name} placeholder="Adicione um nome do Pet"></Input>
        <Input type="text" name="type" placeholder="Adicione um type do Pet" onChange={handleInputChange} value={formValues.type}></Input>
        <Input type="text" name="age" placeholder="Adicione a idade" onChange={handleInputChange} value={formValues.age}></Input>
        <Input type="text" name="weight" placeholder="Adicione o peso" onChange={handleInputChange} value={formValues.weight}></Input>
        <Button name="Alterar"/>
        <Link to="/">
          <Button name="Voltar"/>
        </Link>
        
      </form>



      <div >
        <ul className="Cards">
          {pets.map((pet) => (
            <li key={pet.id}>
            
              <Card
                id={pet.id}
                name={pet.name}
                type={pet.type}
                age={pet.age}
                weight={pet.weight}
              />

            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}


export default App;