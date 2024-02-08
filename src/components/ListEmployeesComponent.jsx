import React, { useEffect, useState } from 'react'
import { listEmployees } from '../service/EmployeeService';

const ListEmployeesComponent = () => {

    const [employees,setEmployees] = useState([]);

    useEffect(() => {
        listEmployees()
        .then((resp) => {
            setEmployees(resp.data);
        })
        .catch(err => console.log(err));
    },[employees])

  return (
    <>
    <div className="container mt-5">
        <div className="card">
            <div className="card-header">
                List Employees
            </div>
            <a className='btn btn-primary' href='/add-employee'>Add Employee</a>
            <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
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