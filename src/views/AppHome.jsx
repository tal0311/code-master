import { Link } from "react-router-dom";

function AppHome() {
  return (

    <div className="home-container">
      <h1>Home</h1>

      <p>
        Welcome to Code_Master!
      </p>


      <Link to='/code'>
        <button>Get Started</button>
      </Link>
      
    </div>

  );
}

export default AppHome;