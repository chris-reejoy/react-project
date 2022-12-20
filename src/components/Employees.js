import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../scss/employees.scss';
import { Link } from 'react-router-dom';

function Employees(props) {
    const [employee, setEmployee] = useState([]);

    const Delete = (employeeindex) => {
        const newEmployee = employee.filter((item, index) => index!==employeeindex);
        console.log('newEmployee', newEmployee);
        setEmployee(newEmployee);
    }
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
        .then(function(response) {
            console.log('response', response.data);
            setEmployee(response.data);
        })
        .catch(function(response) {
            console.log('error', response)
        })
    }, [])
    return (
        <div class='employee-container'>
            <h1>Employees List</h1>
            <ul>
                {
                    employee && employee.length > 0 && employee.map((item, index) => {
                        return (
                             <li key={index}>
                                 {item.id} &nbsp;
                                {item.name} 
                                <span className='close' onClick={() => Delete(index)}>&times;</span>
                            </li>
                        )
                    })
                }
            </ul>
            <Link to="parent"> Go to parent </Link>
        </div>
    );
}

export default Employees;