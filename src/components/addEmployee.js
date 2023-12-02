import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService'; // Import your service

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  const handleAddEmployee = async () => {
    try {
      // Call API to add new employee
      await EmployeeService.createEmployee({ name, position });
      // Optionally, display success message or redirect to the employee list
    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle error scenarios
    }
  };

  // Render the form for adding an employee with appropriate design

  return (
    <div>
      <h2>Add Employee</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <button type="button" onClick={handleAddEmployee}>
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;