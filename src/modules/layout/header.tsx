import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  //   const navigate = useNavigate();

  return (
    <div className="header">
      <nav>
        <Link to="/" className="link">
          Homepage
        </Link>
        <Link to="/users" className="link">
          Users
        </Link>

        {/* <button onClick={() => navigate("/")}>Homepage</button>
        <button onClick={() => navigate("/users")}>Users</button> */}
      </nav>
    </div>
  );
};
