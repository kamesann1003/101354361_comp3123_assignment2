import axios from 'axios';

const BASE_URL = 'http://your-backend-url.com/api'; // Replace with your backend URL

const EmployeeService = {
  getAllEmployees: async () => {
    const response = await axios.get(`${BASE_URL}/employees`);
    return response.data;
  },

  getEmployeeById: async (employeeId) => {
    const response = await axios.get(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  },

  createEmployee: async (employeeData) => {
    const response = await axios.post(`${BASE_URL}/employees`, employeeData);
    return response.data;
  },

  updateEmployee: async (employeeId, updatedData) => {
    const response = await axios.put(`${BASE_URL}/employees/${employeeId}`, updatedData);
    return response.data;
  },

  deleteEmployee: async (employeeId) => {
    const response = await axios.delete(`${BASE_URL}/employees/${employeeId}`);
    return response.data;
  },
};

export default EmployeeService;