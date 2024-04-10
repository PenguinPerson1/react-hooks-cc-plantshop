import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [formData,setFormData]=useState({name:"",image:"",price:""})
  function handleFormChange(event) {
    setFormData({...formData,[event.target.name]:event.target.value})
  }
  function handleSubmit(event) {
    event.preventDefault()
    fetch('http://localhost:6001/plants',{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r=>r.json())
    .then(newPlant=>{
      addPlant(newPlant)
      setFormData({name:"",image:"",price:""})
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name"  value={formData.name} onChange={handleFormChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleFormChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleFormChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
