import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './index.css';


import Input from "../../components/Input";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";

function App() {

  const [pets, setPets] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [filter, setFilter] = useState('');

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
    setFormValues() // limpa o formulário
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

  function handleOnChange(e) {
    axios.get("http://localhost:3004/pets")
    
      .then((res) => {
        setPets(res.data)
      })}


  const handleInputChange = (e) => { // escuta a mudança do input
    const { name, value } = e.target; // pega o name e value do input
    setFormValues({ ...formValues, [name]: value }); // atualiza o formValues

  }


  function handleSearch(e) {
    e.preventDefault();
    const response = axios
      .get(`http://localhost:3004/pets?${filter ? `name=${filter}` : ""}`)
      .then((response) => {
        setPets(response.data);

      });

    console.log(response);
  }



  console.log('***** handleInputChange', formValues)
  return (
    <div className="App">

      <Navbar />
      <form className="input" onSubmit={handleSubmit}>
        <Input name="nome" onChange={handleInputChange} value={formValues.nome} placeholder="Nome do Pet"></Input>
        <Input type="text" name="type" placeholder="Tipo do Pet" onChange={handleInputChange} value={formValues.type}></Input>
        <Input type="text" name="age" placeholder="Idade" onChange={handleInputChange} value={formValues.age}></Input>
        <Input type="text" name="peso" placeholder="Peso" onChange={handleInputChange} value={formValues.peso}></Input>
        <Button name="Adicionar" />

      </form>

      <nav className="searchPrincipal">
        <form className="form-inline " onSubmit={handleSearch}>
          <input className="search" type="search" placeholder="Pesquisar" aria-label="Pesquisar" onChange={(e) => setFilter(e.target.value)} value={filter}  ></input>
          <Button name="Pesquisar" type="submit">Pesquisar</Button>
        </form>
        <Button name="Todos os Pets"  onClick={handleOnChange}  ></Button>

      </nav>

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
                isDocile={pet.isDocile}
              />

            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}


export default App;