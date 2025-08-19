import React from 'react'
import Navbar from '../components/Navbar';
import Course from '../components/Course';
import Footer from '../components/Footer';


function Courses() {

  return (
    <>
      <Navbar/>
      {/* Adding padding to push the Course content above the min-height screen */}
      <div className="pt-20">
        <Course/>
      </div>
      <div className='min-h-screen'></div>
      <Footer/>
    </>
  )
}

export default Courses;
