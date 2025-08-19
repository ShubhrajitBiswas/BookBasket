import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12 dark:bg-gray-900">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold dark:text-white">
              Hello, welcome here to explore a world of{' '}
              <span className="text-pink-500">knowledge every day!!!</span>
            </h1>
            <p className="text-xl dark:text-gray-300">
              At BookBasket, we bring you a curated collection of books and courses to fuel your passion for learning. 
              Whether you're diving into new subjects, enhancing your skills, or simply enjoying a good read, our platform 
              offers endless opportunities to grow. Join a community of lifelong learners and start your journey today!
            </p>
            <label className="flex items-center bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md p-0">
              <svg
                className="h-[1em] opacity-50 dark:text-white mx-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                required
                className="px-3 py-1 h-8 text-sm bg-transparent border-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0"
              />
            </label>
            <div className="validator-hint hidden dark:text-gray-300">Enter valid email address</div>
          </div>
          <button className="btn mt-6 btn-secondary dark:bg-pink-600 dark:hover:bg-pink-700 dark:text-white">
            Get Started
          </button>
        </div>

        <div className="order-1 w-full md:w-1/2">
          <DotLottieReact
            src="https://lottie.host/1e934477-3404-4f54-ad62-ff7bc0016e1a/wLLIX7FJGh.lottie"
            loop
            autoplay
            className="mt-20 w-[45rem] h-[35rem] rounded-lg"
            alt="BookBasket Learning Experience"
            renderer="svg"
            speed={1.5}
            useFrameInterpolation={true}
            preload={true}
            priority={true}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;