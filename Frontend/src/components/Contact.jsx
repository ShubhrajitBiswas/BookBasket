import React from 'react';
import { useForm } from 'react-hook-form';

function ContactUs({ show, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Optional: Reset form after submission
    onClose(); // Optional: Close modal after submission
  };

  if (!show) return null;

  return (
    <dialog className="modal" open={show}>
      <div className="modal-box p-4 pb-2 bg-white dark:bg-gray-800 text-black dark:text-white">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white"
              {...register('name', { required: 'Name is required' })}
            />
            <br />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <br />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          {/* Message */}
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              placeholder="Enter your message"
              className="w-80 px-3 py-1 border rounded-md outline-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-black dark:text-white"
              rows="4"
              {...register('message', {
                required: 'Message is required',
                minLength: {
                  value: 10,
                  message: 'Message must be at least 10 characters',
                },
              })}
            />
            <br />
            {errors.message && <span className="text-red-500">{errors.message.message}</span>}
          </div>
          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-gray-500 text-white rounded-md px-3 py-1 hover:bg-gray-700 duration-200"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

export default ContactUs;