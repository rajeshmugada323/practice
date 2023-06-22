import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = "Rajesh";
  return (
    <div>
      <center>
        <h1>Welcome to Home Page</h1>
        <Link to={`/dashboard/${user}`}>Dashboard</Link>
        <Link to='/about'>About</Link>
      </center>
    </div>
  )
}

export default Home
