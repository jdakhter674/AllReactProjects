import React, { useState } from 'react'
import Button from './Button'
// import './Course.css'
import StarIcon from '@mui/icons-material/Star';
import './Course.css'
import img from '../images/python1.jpg'
import courses from './coursejson'
import { useDispatch, useSelector } from 'react-redux';
import { shop } from '../redux/action/shopingAction';
import Title from './Title';



const Courses = () => {

    const [buttons, setButtons] = useState(['python', 'data Science', 'web Development', 'Excel'])
    const [course, setCourse] = useState(courses)
    const allCategory = ['All', ...new Set(course.map(data => data.category))]
    const counter = useSelector(state => state.allReducer.count)

    // console.log(counter)
    const dispatch = useDispatch()

    const shoppingCart = () => {
        dispatch(shop())
    }

    const filter = (btnData) => {


        if (btnData === "All") {
            return setCourse(courses)

        }

        const filterData = courses.filter(item => item.category === btnData)
        setCourse(filterData)
        //  console.log(filterData)
    }



    return (
        <div className="container course">






            <h2 className="course_heading">A broad selection of courses</h2>
            <p className="course_para">Choose from 155,000 online video courses with new additions published every month</p>
            <div className="course_button">


                <Button category={allCategory} filter={filter} />


            </div>



            <div className="courses_container">

                <h5 className="course_main_heading">Expand your career opportunities with Python</h5>
                <p className="course__main_para">
                    Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skil
                </p>
                <button className="explore_button">Explore</button>



                <div className="card_scrolling">


                    {
                        course.map((v, i) => (


                            v.course.map((j, k) => (

                                <div className="main_card" onClick={shoppingCart}>
                                   



                                        {/* <div className="header">Hello</div> */}
                                        <div>

                                            <div className="imageBox">
                                                <img src={j.img} className="card_image" alt="not found" />
                                            </div>
                                            <div className="card_title">
                                                <h5 className="card_heading">{j.cardTitle}</h5>
                                                <span className="author_span">Jose Portilla</span>
                                                <div className="rating">{j.rate}<StarIcon className="star_icon" /></div>
                                                <div className="price">	&#36; {j.price} </div>

                                            </div>
                                        </div>
   
                                </div>
                            ))

                        ))

                    }







                </div>
            </div>




        </div>
    )
}

export default Courses
