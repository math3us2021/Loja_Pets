import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

import Input from "./components/Input";
import Card from "./components/Card";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {

  const [pets, setPets] = useState([]);
  //const [newPet, setNewPet] = useState("");
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3004/pets",
      {
        name: String(formValues.nome),
        type: String(formValues.type),
        age: Number(formValues.age),
        weight: Number(formValues.peso)
        
      })
      .then((res) => {
        setPets([...pets, res.data]) /// data, traz a resposta do backend
        
        
      }) 
      setFormValues({})
  }

 
    
  

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3004/pets/${id}`)
      .then((res) => {
        setPets(pets.filter(pet => pet.id !== id))      
      }
      ) 
  }

  useEffect(() => {
    axios.get("http://localhost:3004/pets").then((res) => setPets(res.data));
  }, []);


  const handleInputChange = (e) => { // escuta a mudança do input
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  console.log('***** handleInputChange', formValues)
  return (
    <div className="App">
      <Navbar/>
      <form onSubmit={handleSubmit}>
        <Input name="nome" onChange={handleInputChange} value={formValues.nome} placeholder="Adicione um nome do Pet"></Input>
        <Input type="text" name="type" placeholder="Adicione um type do Pet" onChange={handleInputChange} value={formValues.type}></Input>
        <Input type="text" name="age" placeholder="Adicione a idade" onChange={handleInputChange} value={formValues.age}></Input>
        <Input type="text" name="peso" placeholder="Adicione o peso" onChange={handleInputChange} value={formValues.peso}></Input>
        <Button name="Adicionar"/>
        
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
                handleDelete={handleDelete}
              />

            </li>
          ))}
        </ul>
      </div>







    </div>

  );
}


export default App;
