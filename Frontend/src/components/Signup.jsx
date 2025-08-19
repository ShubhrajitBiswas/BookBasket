import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Login from './login';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Signup() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post("http://localhost:5000/user/signup", userInfo);
      if (res.data) {
        toast.success("Sign Up Successful");
        // Update both localStorage and auth context
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setAuthUser(res.data.user);
        // Redirect to course page after successful signup
        window.location.href = "/course";
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + (err.response?.data?.message || "Something went wrong"));
      }
    }
  };

  // Watch password field to compare with confirmPassword
  const password = watch('password');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="font-bold text-lg text-black dark:text-white">Sign Up</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('fullname', { required: 'Name is required' })}
            />
            {errors.fullname && <span className="text-red-500">{errors.fullname.message}</span>}
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          {/* Password */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          {/* Confirm Password */}
          <div className="mt-4 space-y-2">
            <span className="text-black dark:text-white">Confirm Password</span>
            <br />
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-3 py-1 border rounded-md outline-none text-black dark:text-white bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              {...register('confirmPassword', {
                required: 'Please confirm your password',
                validate: (value) => value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500">{errors.confirmPassword.message}</span>
            )}
          </div>
          {/* Button */}
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Sign Up
            </button>
            <p className="text-black dark:text-white">
              Already registered?{' '}
              <button
                type="button"
                className="underline text-blue-500 cursor-pointer"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>
            </p>
          </div>
        </form>
        <Login show={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </div>
    </div>
  );
}

export default Signup;