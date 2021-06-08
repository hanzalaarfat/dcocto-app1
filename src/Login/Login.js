import { NavLink, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Axios from "axios";

// import { LockClosedIcon } from "@heroicons/react/solid";

function Login() {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    // console.log(value);
    // console.log(name);

    setUser({ ...user, [name]: value }); //// will take the name from line 15
  };
  // console.log(user);

  const PostData = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    console.log("email.....", email);

    await Axios.post("https://capstone-health.herokuapp.com/doctor/login", {
      email,
      password,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        window.alert("resposne", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("drId", res.data._id);
        history.push("/dashboard");
      })
      .catch((err) => {
        window.alert("errr", err);
      });
  };

  return (
    <div className="min-h-0 items-center max-h-30 max-w-50  justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 lg:mt-35 lg:ml:30 md:mt-32 md:ml-64">
      <div className="max-w-md w-50 h-100  space-y-6">
        <div>
          <h2 className="mt-6 justify-center text-center text-3xl font-extrabold text-gray-900">
            Sign in
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={user.email}
                onChange={handleInputs}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <p className="ml-2 block text-sm text-gray-900 mr-2">
              Don't have an account
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </a>
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={PostData}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
