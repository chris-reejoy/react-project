import React, { useState, useEffect } from 'react';
import axios from 'axios';


function First(props) {
    const [task, setTask] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users',
        })
        .then(function(response) {
            console.log('response', response.data);
            setTask(response.data);
        })
        .catch(function(response) {
            console.log('error', response)
        })
    }, [])
    console.log('task', task);
    return (
        <div class='employee-container'>
            <h1>Employees List</h1>
            <ul>
                {
                   task &&task.length > 0 &&task.map((item, index) => {
                        return (
                           ! (index !==0 && index!==1) &&
                            <li key={index}>
                                {item.username}
                                <span className='close'>&times;</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default First;