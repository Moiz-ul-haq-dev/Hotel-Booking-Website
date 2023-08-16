import React, { useState, useEffect } from 'react';

export default function ManageEmployeesSection() {

  const [employees, setEmployees] = useState([]);

  const [name, setEmployeeName] = useState('');
  const [email, setEmployeeEmail] = useState('');
  const [contact, setEmployeeContact] = useState('');
  const [salary, setEmployeeSalary] = useState('');
  const [cnic, setEmployeeCNIC] = useState('');
  const [imageUrl, setEmployeeImage] = useState('');
  const [status, setEmployeeStatus] = useState('Active');

  const handleEmployeeNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  // const handleEmployeeImageChange = (e) => {
  //   setEmployeeImage(e.target.file[0]);
  // };

  const handleEmployeeCNICChange = (e) => {
    setEmployeeCNIC(e.target.value)
  };

  const handleEmployeeContactChange = (e) => {
    setEmployeeContact(e.target.value)
  };

  const handleEmployeeEmailChange = (e) => {
    setEmployeeEmail(e.target.value)
  };

  const handleEmployeeSalaryChange = (e) => {
    setEmployeeSalary(e.target.value)
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    console.log('fetchEmployees called');
    fetch('https://sheer-fixed-mask.glitch.me/getEmployees', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data);
      }
      );
  };

  return (
    <div className="p-4">
      <div className="my-4">
        <h3 className="text-lg font-semibold mb-2 text-center">Add New Employee</h3>
        <form action='https://sheer-fixed-mask.glitch.me/addEmployees' method='post' encType="multipart/form-data">
        <label className="block text-sm font-medium text-gray-700 mb-2"> Enter Employee Name</label>
          <input
            type="text"
            name='name'
            placeholder="Employee Name"
            // value={newEmployee.name}
            onChange={handleEmployeeNameChange}
            className="border block w-full border-gray-300 p-2 rounded-lg mb-2 mr-2"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2"> Select Employee Image</label>
          <input
            type="file"
            name='image'
            placeholder="Employee Image"
            // onChange={handleEmployeeImageChange}
            className="mb-2 mr-2 block w-full border border-gray-300 p-2 rounded-lg"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2"> Enter Employee CNIC</label>
          <input
            type="text"
            placeholder="CNIC"
            name='cnic'
            // value={newEmployee.cnic}
            onChange={handleEmployeeCNICChange}
            className="border border-gray-300 block w-full p-2 rounded-lg mb-2 mr-2"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2"> Enter Employee Contact</label>
          <input
            type="text"
            placeholder="Contact"
            name='contact'
            // value={newEmployee.contact}
            onChange={handleEmployeeContactChange}
            className="border border-gray-300 p-2 rounded-lg block w-full mb-2 mr-2"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2"> Enter Employee Email</label>
          <input
            type="email"
            placeholder="Email"
            name='email'
            // value={newEmployee.email}
            onChange={handleEmployeeEmailChange}
            className="border border-gray-300 p-2 rounded-lg mb-2 mr-2 block w-full"
          />
          <label className="block text-sm font-medium text-gray-700 mb-2"> Enter Employee Salary</label>
          <input
            type="text"
            placeholder="Salary"
            name='salary'
            // value={newEmployee.salary}
            onChange={handleEmployeeSalaryChange}
            className="border border-gray-300 p-2 rounded-lg mb-2 mr-2 block w-full"
          />
          <button
            className="bg-orange-400 text-white p-2 rounded-lg block w-full"
            // onClick={handleAddEmployee}
            type='submit'
          >
            Add Employee
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-bold mb-4">Manage Employees</h2>
      <div className="bg-white rounded-lg shadow p-4">
        {employees.map((employee,index) => (
          <div key={index} className="flex items-center mb-4">
            <img
              src={`https://sheer-fixed-mask.glitch.me/images/${employee.image}`} // Update the image path accordingly
              alt={employee.name}
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">{employee.name}</h3>
              <p className="text-gray-600">CNIC: {employee.cnic}</p>
              <p className="text-gray-600">Contact: {employee.contact}</p>
              <p className="text-gray-600">Email: {employee.email}</p>
              <p className="text-gray-600">Salary: ${employee.salary}</p>
              <div className="mt-2">
                <button
                  className="text-red-600"
                  onClick={() => deleteEmployee(index)} // Call deleteEmployee function with the employee's ID
                >
                  Delete
                </button>
                <button className="ml-2 text-blue-600">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
