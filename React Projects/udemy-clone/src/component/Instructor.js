import React from 'react'
import './Instructor.css'
import instructor_image from '../images/instructor.jpg'
import business_image from '../images/businessMan.jpg'
import transform_image from '../images/transform.jpg'


const Instructor = () => {
    return (
        <div className="container instructor">
           {/* instructor */}
            <div className="instructor_main">
                <div className="intructor_imageBox">
                    <img src={instructor_image} className="instructor_image" />

                </div>
                <div className="instructor_info">
                <h2 className="instructor_title">Become an instructor</h2>
                <p className="instructor_para">
                Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.

                </p>
                <button className="intsructor_button">Start Teaching Today</button>
                </div>

            </div>




            {/* business */}
            <div className="instructor_business_main">
               
                <div className="instructor_info">
                <h2 className="business_title">Udemy <span className="business_span">Business</span></h2>
                <p className="instructor_para">
                Get unlimited access to 6,000+ of Udemy’s top courses for your team. Learn and improve skills across business, tech, design, and more.
                </p>
                <button className="intsructor_button">Get Udemy Business</button>
                </div>

                <div className="intructor_imageBox">
                    <img src={business_image} className="instructor_image" />

                </div>

            </div>




            {/* Transform */}

            <div className="instructor_main">
                <div className="intructor_imageBox">
                    <img src={transform_image} className="instructor_image" />

                </div>
                <div className="instructor_info">
                <h2 className="instructor_title">Transform your life through education</h2>
                <p className="instructor_para">
                
                Learners around the world are launching new careers, advancing in their fields, and enriching their lives.
                </p>
                <button className="intsructor_button">Find Out How</button>
                </div>

            </div>


        </div>
    )
}

export default Instructor
