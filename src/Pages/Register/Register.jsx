import { useContext } from "react";
import { AuthContext } from "../../Probiders/AuthProbider";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const { createUserT, loading } = useContext(AuthContext);

  const notify = () => toast.success("Successfully register");

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const fName = form.get("fName");
    const lName = form.get("lName");
    const email = form.get("email");
    const password = form.get("password");
    console.log(fName, lName, email, password);

    createUserT(email, password)
      .then((result) => {
        console.log(result.user);
        notify();
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                name="fName"
                placeholder="Enter Your First Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                name="lName"
                placeholder="Enter Your last Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p className="text-lime-600">
              Allready have an account{" "}
              <Link to={"/login"} className="text-orange-500 font-bold">
                login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
