import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import Google from "../../assets/banner-books/google.png";
const Register = () => {
  const { authInfo } = useContext(AuthContext);
  const { createUser, loginwithGoogle } = authInfo;
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((useCredential) => {
        // signed up
        const user = useCredential.user;
        alert("Sign Up Successfully!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleSignUp = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Sign Up Successfully.");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <section className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            ></input>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            ></input>
          </div>

          <div>
            <button className="bg-violet-600 text-white hover:bg-violet-400 font-bold py-2 px-8 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="align-baseline font-medium mt-4 text-sm">
          Have an account? Please{" "}
          <Link to="/login" className="text-violet-600 hover:text-violet-400">
            Login
          </Link>
        </p>

        <div className="flex justify-center items-center">
          <button
            onClick={googleSignUp}
            className="mt-7 flex justify-center items-center gap-2"
          >
            <img src={Google} alt="Google" className="w-6 h-6" />
            Login With Google
          </button>
        </div>
      </div>
    </section>
  );
};
export default Register;
