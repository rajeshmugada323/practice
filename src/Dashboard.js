import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <center>
        <h2>Welcome to Dashboard Page</h2>
        <Link to='/'>Back to Home</Link>
      </center>
    </div>
  )

}

export default Dashboard
