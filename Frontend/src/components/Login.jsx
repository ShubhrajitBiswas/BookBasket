import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from "axios";
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Login({ show, onClose }) {
  const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post("http://localhost:5000/user/login", userInfo);
      if (res.data) {
        toast.success("Login Successful");
        onClose();
        // Update both localStorage and auth context
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        // Redirect to course page after successful login
        window.location.href = "/course";
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  }

  if (!show) return null;

  return (
    <dialog className="modal" open={show}>
      <div className="modal-box p-4 pb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg text-black dark:text-white">Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('email', { required: true })}
            />
            {errors.email && <span className="text-red-500"><br />Email is required</span>}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('password', { required: true })}
            />
            {errors.password && <span className="text-red-500"><br />Password is required</span>}
          </div>
          {/* Button */}
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Login
            </button>
            <p className="text-black dark:text-white">
              Not registered?{' '}
              <Link to="/signup" className="underline text-blue-500 dark:text-blue-400 cursor-pointer">
                Sign Up
              </Link>{' '}
            </p>
          </div>
        </form>
        <div className="modal-action">
          <Link
            to="/"
            className="btn bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500"
            onClick={onClose}
          >
            Close
          </Link>
        </div>
      </div>
    </dialog>
  );
}

export default Login;