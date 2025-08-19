import React, { useState, useEffect } from "react";

const LoadingAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading progress with increased speed
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20); // Update every 20ms for faster loading (2 seconds to 100%)
    return () => clearInterval(interval);
  }, []);

  // Handle click to trigger sparkle burst and shake
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 1000); // Reset click state after 1s
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col items-center">
        {/* Book Stack with Flipping Pages */}
        <div
          className={`bookbasket-book-stack relative w-40 h-48 ${isClicked ? "bookbasket-shake" : ""}`}
          onClick={handleClick}
        >
          {/* Book Base (Stack) */}
          <div className="absolute bottom-0 w-40 h-32 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-md shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute bottom-5 w-40 h-32 bg-gradient-to-r from-green-500 to-green-700 rounded-t-md shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          <div className="absolute bottom-10 w-40 h-32 bg-gradient-to-r from-pink-500 to-pink-700 rounded-t-md shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          {/* Flipping Pages */}
          <div className="absolute top-0 w-40 h-48 bookbasket-page-flip">
            <div className={`bookbasket-page bg-white dark:bg-gray-800 shadow-md ${isHovered ? "bookbasket-page-flip-fast" : ""}`}></div>
            <div className={`bookbasket-page bg-white dark:bg-gray-800 shadow-md ${isHovered ? "bookbasket-page-flip-fast" : ""}`}></div>
            <div className={`bookbasket-page bg-white dark:bg-gray-800 shadow-md ${isHovered ? "bookbasket-page-flip-fast" : ""}`}></div>
          </div>
        </div>

        {/* Particle Effects (Sparkles) */}
        <div className="absolute inset-0">
          {/* Base Sparkles */}
          <div className={`bookbasket-particle bookbasket-particle1 bg-yellow-300 dark:bg-yellow-200 ${isHovered ? "bookbasket-particle-active" : ""}`}></div>
          <div className={`bookbasket-particle bookbasket-particle2 bg-yellow-300 dark:bg-yellow-200 ${isHovered ? "bookbasket-particle-active" : ""}`}></div>
          <div className={`bookbasket-particle bookbasket-particle3 bg-yellow-300 dark:bg-yellow-200 ${isHovered ? "bookbasket-particle-active" : ""}`}></div>
          <div className={`bookbasket-particle bookbasket-particle4 bg-yellow-300 dark:bg-yellow-200 ${isHovered ? "bookbasket-particle-active" : ""}`}></div>
          {/* Additional Sparkles on Click */}
          {isClicked && (
            <>
              <div className="bookbasket-particle bookbasket-particle5 bg-yellow-300 dark:bg-yellow-200 bookbasket-particle-burst"></div>
              <div className="bookbasket-particle bookbasket-particle6 bg-yellow-300 dark:bg-yellow-200 bookbasket-particle-burst"></div>
              <div className="bookbasket-particle bookbasket-particle7 bg-yellow-300 dark:bg-yellow-200 bookbasket-particle-burst"></div>
              <div className="bookbasket-particle bookbasket-particle8 bg-yellow-300 dark:bg-yellow-200 bookbasket-particle-burst"></div>
            </>
          )}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bookbasket-glow-effect"></div>

        {/* Loading Text with Progress */}
        <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200 animate-pulse">
          Discovering Books... {loadingProgress}%
        </p>

        {/* Progress Bar */}
        <div className="w-40 h-2 mt-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 dark:bg-blue-400 transition-all duration-200"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      </div>

      {/* Embedded Styles */}
      <style>{`
        /* Book Stack and Page Flipping */
        .bookbasket-book-stack {
          perspective: 1000px;
          cursor: pointer;
        }

        .bookbasket-page-flip {
          position: relative;
          transform-style: preserve-3d;
        }

        .bookbasket-page {
          position: absolute;
          width: 100%;
          height: 100%;
          transform-origin: left center;
          animation: bookbasket-page-flip 3s infinite;
        }

        .bookbasket-page.bookbasket-page-flip-fast {
          animation: bookbasket-page-flip-fast 1.5s infinite;
        }

        .bookbasket-page:nth-child(1) {
          animation-delay: 0s;
        }

        .bookbasket-page:nth-child(2) {
          animation-delay: 0.2s;
        }

        .bookbasket-page:nth-child(3) {
          animation-delay: 0.4s;
        }

        @keyframes bookbasket-page-flip {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-180deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        @keyframes bookbasket-page-flip-fast {
          0% {
            transform: rotateY(0deg);
          }
          50% {
            transform: rotateY(-180deg);
          }
          100% {
            transform: rotateY(0deg);
          }
        }

        /* Shake Effect on Click */
        .bookbasket-shake {
          animation: bookbasket-shake 0.5s ease-in-out;
        }

        @keyframes bookbasket-shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          50% {
            transform: translateX(5px);
          }
          75% {
            transform: translateX(-5px);
          }
        }

        /* Particle Effects */
        .bookbasket-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          opacity: 0;
          animation: bookbasket-particle 2s infinite;
        }

        .bookbasket-particle.bookbasket-particle-active {
          animation: bookbasket-particle-active 1s infinite;
        }

        .bookbasket-particle.bookbasket-particle-burst {
          animation: bookbasket-particle-burst 1s forwards;
        }

        .bookbasket-particle1 {
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .bookbasket-particle2 {
          top: 30%;
          left: 70%;
          animation-delay: 0.5s;
        }

        .bookbasket-particle3 {
          top: 60%;
          left: 10%;
          animation-delay: 1s;
        }

        .bookbasket-particle4 {
          top: 80%;
          left: 80%;
          animation-delay: 1.5s;
        }

        .bookbasket-particle5 {
          top: 20%;
          left: 30%;
        }

        .bookbasket-particle6 {
          top: 40%;
          left: 60%;
        }

        .bookbasket-particle7 {
          top: 50%;
          left: 20%;
        }

        .bookbasket-particle8 {
          top: 70%;
          left: 50%;
        }

        @keyframes bookbasket-particle {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes bookbasket-particle-active {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }

        @keyframes bookbasket-particle-burst {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(2);
            opacity: 1;
            transform: translateY(-20px);
          }
          100% {
            transform: scale(0);
            opacity: 0;
            transform: translateY(-40px);
          }
        }

        /* Glow Effect */
        .bookbasket-glow-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
          opacity: 0.5;
          animation: bookbasket-glow 3s infinite;
        }

        @keyframes bookbasket-glow {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;