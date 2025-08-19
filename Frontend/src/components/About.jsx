import React from 'react';

function About({ show, onClose }) {
  if (!show) return null;

  return (
    <dialog className="modal" open={show}>
      <div className="modal-box p-4 pb-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">About BookBasket</h3>
        <div className="mt-4 space-y-2">
          <p>
            Welcome to <strong>BookBasket</strong>, your ultimate destination for discovering and purchasing books online. 
            We aim to provide a seamless experience with a wide range of courses and resources to enhance your learning journey.
          </p>
          <p>
            Our mission is to make education accessible and enjoyable for everyone. Whether you're a student, professional, 
            or lifelong learner, BookBasket has something for you!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Version: 1.0 | Developed by [Shubhrajit Biswas]
          </p>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn bg-gray-200 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500" onClick={onClose}>Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default About;