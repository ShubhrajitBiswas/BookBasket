import React, { useState, useEffect } from "react";
import Home from "./home/home";
import Course from "./components/Course";
import Courses from "./courses/courses";
import Signup from "./components/Signup";
import LoadingAnimation from "./components/Loader";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // Import Toaster
import './styles/fonts.css';
import { useAuth } from "./context/AuthProvider";

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
      localStorage.setItem('hasVisited', 'true');
      return true;
    }
    return false;
  });
  const [authUser, setAuthUser] = useAuth();

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <div className="min-h-screen dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        )}
      </div>
      <Toaster position="top-center" reverseOrder={false} /> {/* Add Toaster */}
    </>
  );
}

export default App;