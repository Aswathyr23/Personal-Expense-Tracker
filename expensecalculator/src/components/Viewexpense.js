import React from 'react';
import './Viewexpense.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Viewexpense = () => {

  const [Expenselist, SetExpenselist] = useState([])

  const Listexpenses = async () => {
    const Email = (JSON.parse(localStorage.getItem("currentuseremail") || " "))
    const body = {
      Email
    }
    console.log(Email);

    const result = await axios.post("http://localhost:8000/Listexpenses",body);
    SetExpenselist(result.data.expense);
  };
  useEffect(() => {

    Listexpenses()
    
  }, [])
  console.log(Expenselist)
  return (
    <div className="table-container">
      <p> The history your expense transactions records</p>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Expenselist.map((item, index) => (
            <tr key={index}>
              <td>{item.Title}</td>
              <td>{item.Description}</td>
              <td>{item.Amount}</td>
              <td>{item.Date}</td>
              <td>
                <button className="action-button">Edit</button>
                <button className="action-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewexpense;
