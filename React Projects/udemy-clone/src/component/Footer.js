import React from 'react'
import './Footer.css'
import udemy from '../images/udemy.png'




const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_logo">
                <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg' className="footer_image" />
            </div>
            <div className="copyRight">All &copy; CopyRight Reserved</div>
        </div>
    )
}

export default Footer
