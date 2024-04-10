import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import { useState, useEffect } from "react";

function PlantPage() {
  const [plantList,setPlantList] = useState([])
  const [search,setSearch] = useState("")
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
    .then(r=>r.json())
    .then(data=>setPlantList(data))
    .catch(e=>console.log(e))
  },[])
  function addPlant(newPlant) {
    setPlantList(plantList=>[...plantList,newPlant])
  }
  const searchedPlantList=plantList.filter(plant=>plant.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch} search={search} />
      <PlantList plantList={searchedPlantList} />
    </main>
  );
}

export default PlantPage;
