import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'; // Import your service

const UpdateEmployee = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const data = await EmployeeService.getEmployeeById(id);
        setName(data.name);
        setPosition(data.position);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  const handleUpdateEmployee = async () => {
    try {
      // Call API to update employee information
      await EmployeeService.updateEmployee(id, { name, position });
      // Optionally, display success message or redirect to employee list
    } catch (error) {
      console.error('Error updating employee:', error);
      // Handle error scenarios
    }
  };

  // Render the form for updating employee information with appropriate design

  return (
    <div>
      <h2>Update Employee</h2>
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
        <button type="button" onClick={handleUpdateEmployee}>
          Update Employee
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployee;