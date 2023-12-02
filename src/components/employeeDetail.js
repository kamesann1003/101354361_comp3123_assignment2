import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'; // Import your service

const EmployeeDetails = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const data = await EmployeeService.getEmployeeById(id);
        setEmployee(data);
      } catch (error) {
        console.error('Error fetching employee details:', error);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  // Render employee details with UI design as per your requirements

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      {/* Other employee details */}
    </div>
  );
};

export default EmployeeDetails;