import React, { useState, useEffect } from 'react';
import './Viewexpense.css';
import axios from 'axios';

const Viewincome = () => {
    const [Incomelist, SetIncomelist] = useState([]);

    // const Listincomes = async () => {
    //     try {
    //         const Email = JSON.parse(localStorage.getItem("currentuseremail") || "");
    //         const body = { Email };
    //         const result = await axios.post("http://localhost:8000/Listincomes", body);
    //         SetIncomelist(result.data.income || []);
    //     } catch (error) {
    //         console.error('Error fetching incomes:', error);
    //         // Handle error here, e.g., display a message to the user or retry the request
    //     }
    // };

    useEffect(() => {
        Listincomes();
    }, []);

    console.log(Incomelist);
    const Listincomes = async () => {
        try {
            const Email = JSON.parse(localStorage.getItem("currentuseremail") || "");
            const body = { Email };
            const result = await axios.post("http://localhost:8000/Listincomes", body);
            console.log('Response from Listincomes:', result.data);
            SetIncomelist(result.data.income || []);
        } catch (error) {
            console.error('Error fetching incomes:', error);
            // Handle error here
        }
    };
    
    return (
        <div className="table-container">
            <p>The history of your expense transactions records</p>
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
                    {Incomelist && Incomelist.map((item, index) => (
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

export default Viewincome;


