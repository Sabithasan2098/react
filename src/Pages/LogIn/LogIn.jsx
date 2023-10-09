import { useContext } from "react";
import { AuthContext } from "../../Probiders/AuthProbider";
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn, googleLogIn, loading } = useContext(AuthContext);
  const notify = () => toast.success("Successfully login");
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        console.log(result.user);
        notify();
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        console.log(result.user);
        notify();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
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
            <div className="bg-blue-500 text-white font-bold rounded-lg py-2 px-4 flex gap-3 items-center">
              <FaGoogle></FaGoogle>
              <button onClick={handleGoogleLogIn}>Log In With Google</button>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-lime-600">
              Do not have an account{" "}
              <Link to={"/register"} className="text-orange-500 font-bold">
                register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
