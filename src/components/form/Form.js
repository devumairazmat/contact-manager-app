import React from 'react'
import { useState } from 'react';
function Form() {

const initialValue = {
    name: "",
    email: "",
    password: "" 
}
   const [formData, setformData] = useState(initialValue);

const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert(JSON.stringify(formData, undefined, 2));
}
  return (
    <>
    <form onSubmit={handleOnSubmit}>
        <label>Name</label>
        <input type="text" value={formData.name} 
        onChange={(e) => setformData({...formData, name: e.target.value})} />
        <br/>
        <label>Email</label>
        <input type="email" value={formData.email} 
         onChange={(e) => setformData({...formData, email: e.target.value})}/>
        <br/>
        <label>Password</label>
        <input type="password" value={formData.password}
         onChange={(e) => setformData({...formData, password: e.target.value})} />
        <br/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
        <p>{JSON.stringify(formData)}</p>
        <br/>
    </form>
    </>
  )
}

export default Form