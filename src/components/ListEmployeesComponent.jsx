import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeesComponent = () => {

    const [employees,setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    },[employees])

    const getAllEmployees = () => {
        listEmployees()
        .then((resp) => {
            setEmployees(resp.data);
        })
        .catch(err => console.log(err));
    }

    const addEmployee = () => navigate("/add-employee")
    const updateEmployee = (id) => navigate(`/edit-employee/${id}`);
    const removeEmployee = (id) => deleteEmployee(id)
                                    .then((resp) => {
                                        console.log(resp);
                                        getAllEmployees()
                                        navigate("/employees");
                                    })
                                    .catch(err => console.log(err))
  return (
    <>
    <div className="container mt-5">
        <div className="card">
            <div className="card-header">
                List Employees
            </div>
            <button className='btn btn-primary' onClick={addEmployee}>Add Employee</button>
            <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(e =>(
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.first_name}</td>
                            <td>{e.last_name}</td>
                            <td>{e.email}</td>
                            <th>
                                <button onClick={() => updateEmployee(e.id)} className='btn btn-info'>Update</button>
                                <button onClick={() => removeEmployee(e.id)} className='btn btn-outline-danger ms-5'>Delete</button>
                            </th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default ListEmployeesComponent