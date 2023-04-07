import React from "react";
//eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
//eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import styledZoo from "./Zoo.module.css";

export default function Zoo() {
  /* Escribe acá tu código */
  const handleInputChange = (event) => {
    setZoo({ ...zoo, zooName: event.target.value });
  };

  const handleSpecies = (e) => {
    setZoo({ ...zoo, species: e.target.value });
  };

  const handleAllSpecies = () => {};


  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  })


  React.useEffect (() => {
    fetch('http://localhost:3001/zoo')
  .then((res) => res.json())
  .then((data) =>
    setZoo({
        ...zoo,
        animals: data.animals,
        species: data.species,
        allAnimals: data.animals,
    })
  )
  .catch((error) => console.log(error));})
    


  return (
    <div>
    <label htmlFor="zooName">Zoo Name:</label>
    <input id="zooname" type="text" onChange={handleInputChange} value={zoo.zooName} ></input>
      <h1>{zoo.zooName}</h1>
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
        <Animals animals={zoo.animals} />
    </div>
  );
}
