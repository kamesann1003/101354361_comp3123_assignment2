const SessionManagement = {
    isLoggedIn: () => {
      // Check if a user is logged in based on session/token in local storage
      return !!localStorage.getItem('token');
    },
  
    login: (token) => {
      // Set the session/token in local storage after successful login
      localStorage.setItem('token', token);
    },
  
    logout: () => {
      // Remove the session/token from local storage upon logout
      localStorage.removeItem('token');
    },
  };
  
  export default SessionManagement;