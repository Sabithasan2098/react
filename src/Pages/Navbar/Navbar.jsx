import { Link } from "react-router-dom";
import logo from "../../assets/pexels-dilyar-sultan-596750.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Probiders/AuthProbider";
import userIcon from "../../assets/user icon.jpg";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const notify = () => toast.success("Successfully logout");

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
        notify();
      })
      .catch((error) => console.log(error));
  };

  const NavLink = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/details">Details</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      {user ? (
        <div className="flex">
          <li>
            <Link to="/facilites">Facilites</Link>
          </li>
          <li>
            <Link to="/error">More info</Link>
          </li>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );

  return (
    <div className=" bg-yellow-300">
      <div className="navbar w-3/4 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 font-bold text-rose-800 rounded-box w-52"
            >
              {NavLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-20 rounded-xl" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-rose-800">
          <ul className="menu menu-horizontal px-1 font-bold text-rose-800">
            {NavLink}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-10 ">
              <img className="w-10 rounded-full" src={userIcon} alt="" />
              <button
                onClick={handleLogOut}
                className="btn btn-warning font-bold text-rose-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="btn btn-warning font-bold text-rose-800">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
