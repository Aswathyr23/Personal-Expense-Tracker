import React, { useState } from 'react';
import './Newexpense.css';
import axios from 'axios';


const Newincome = () => {
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const [Amount, setAmount] = useState('');
  const [Date, setDate] = useState('');

  const Addeincome= async (e)=>{
    e.preventDefault()
    const Email=(JSON.parse(localStorage.getItem("currentuseremail") || " "))
 
  const body={
    Title,
    Description,
    Amount,
    Date,
    Email
  }
 
try{
 const result=await axios.post('http://localhost:8000/Addincome',body)

alert(result.data.message)
}catch(error){
console.log(error.response.data)
}
  }

  return (
    <div className="expense-container">
      <h1>INCOME</h1>
      <h2>ADD NEW INCOME</h2>
      <div className="expense-form">
        <input
          type="text"
          placeholder="Enter Title"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        />
         <input
          type="date"
          placeholder="Enter Date"
          value={Date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Amount"
          value={Amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={Addeincome}>Record Income</button>
      </div>
    </div>
  );
};
export default Newincome;