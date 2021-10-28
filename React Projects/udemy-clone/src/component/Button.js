import React from 'react'
import './Course.css'



const Button = ({ category, filter }) => {





    return (
        <div className="course_button">

            {
                category.map((v , i) => (
                    <button id="button_name" className="course_main_button active"  onClick={() => filter(v)} > {v}</button>
                ))
            }

        </div>

    )

}


export default Button
