import { Link } from "react-router-dom";
import { userService } from "../services/user.service";
import { useEffect, useState } from "react";

function AppHome({ user }) {

  return (

    <div className="home-container">
      <h1>Home</h1>

      <p>
        You are logged in as <span>{user.role}</span>
      </p>


      <Link to='/code'>
        <button>Get Started</button>
      </Link>

    </div>

  );
}

export default AppHome;