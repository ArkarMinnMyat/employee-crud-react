import React, { useState } from 'react'

const EmployeeComponent = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    const handleLastName = e => setLastName(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const saveEmployee = e => {
        e.preventDefault();
        const employee = {first_name:firstName,last_name:lastName,email:email};
        console.log(employee);
    }
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>First Name</label>
                            <input type="text"
                                placeholder='Enter First Name'
                                name='first_name'
                                value={firstName}
                                className='form-control'
                                onChange={handleFirstName} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Last Name</label>
                            <input type="text"
                                placeholder='Enter Last Name'
                                name='last_name'
                                value={lastName}
                                className='form-control'
                                onChange={handleLastName} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Email</label>
                            <input type="email"
                                placeholder='Enter Email'
                                name='email'
                                value={email}
                                className='form-control'
                                onChange={handleEmail} />
                        </div>
                        <button onClick={saveEmployee} className='btn btn-success w-100 my-4 p-2'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent