import React, { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService'; // Import your service

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from backend upon component mount
    const fetchEmployees = async () => {
      try {
        const data = await EmployeeService.getAllEmployees();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  // Render employee list with UI design as per your requirements

  return (
    <div>
      <h1>List of Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.position}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;