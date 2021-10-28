import python1 from '../images/python1.jpg'
import python2 from '../images/pthon2.jpg'
import python3 from '../images/python3.png'
import python4 from '../images/python4.jpg'
import python5 from '../images/python5.png'
import web1 from '../images/web1.png'
import web2 from '../images/web2.png'
import web3 from '../images/web3.png'
import web4 from '../images/web4.jpg'
import data1 from '../images/data1.jpg'
import data2 from '../images/data2.jpg'
import data3 from '../images/data3.jpg'
import data4 from '../images/datar4.jpg'


const courses = [
    {
        category:'python',
      
        course:[
            {
                img:python1,
                cardTitle:'2021 Complete Python Bootcamp From Zero to Hero',
                rate:'5.0',
                price:'65'
            },
            {
                img:python2,
                cardTitle:'Python for Data Science and Machine Learning Bootcamp',
                rate:'4.o',
                price:'95'
            },
            {
                img:python3,
                cardTitle:'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                rate:'4.5',
                price:'50'
            },
            {
                img:python4,
                cardTitle:'Learn Python Programming Masterclass',
                rate:'4',
                price:'60'
            },
           
        ]
    } ,




    {
        category:'web Development',
      
        course:[
            {
                img:web1,
                cardTitle:'The Web Developer Bootcamp 2021',
                rate:'4.7',
                price:'90'
            },
            {
                img:web2,
                cardTitle:'The Complete Web Developer Course 2.0',
                rate:'5.0',
                price:'120'
            },
            {
                img:web3,
                cardTitle:'The Complete 2021 Web Development Bootcamp',
                rate:'4.2',
                price:'90'
            },
            {
                img:web4,
                cardTitle:'The Complete Web Developer in 2021: Zero to Mastery',
                rate:'5.0',
                price:'130'
            },
          


        ]
    },









    
    {
        category:'Data Science',
       
        course:[
            {
                img:data1,
                cardTitle:'Machine Learning A-Z™: Hands-On Python & R In Data Science',
                rate:'4',
                price:'120'
            },
            {
                img:data2,
                cardTitle:'Python for Data Science and Machine Learning Bootcamp',
                rate:'4',
                price:'100'
            },
            {
                img:data3,
                cardTitle:'The Data Science Course 2021: Complete Data Science Bootcamp',
                rate:'5.0',
                price:'160'
            },
            {
                img:data4,
                cardTitle:'R Programming A-Z™: R For Data Science With Real Exercises!',
                rate:'5.0',
                price:'90'
            },
           



            





            

        ]
    }







]





export default courses
























{/* <div className="courses_container">
<h5 className="course_main_heading">Expand your career opportunities with Python</h5>
<p className="course__main_para">
    Whether you work in machine learning or finance, or are pursuing a career in web development or data science, Python is one of the most important skills you can learn. Python's simple syntax is especially suited for desktop, web, and business applications. Python's design philosophy emphasizes readability and usability. Python was
</p>
<button className="explore_button">Explore Python</button>
<div className="card_scrolling">
  
  
   <div className="main_card">
       <div className="imageBox">
           <img src={img} className="card_image" alt="not found" />
       </div>
       <div className="card_title">
          <h5 className="card_heading">2021 Complete Python Bootcamp From Zero to Hero i...</h5>
          <span className="author_span">Jose Portilla</span>
          <div className="rating">4.5 <StarIcon className="star_icon" /></div>
          <div className="price">	&#36; 18 <s clasName="price_cut">1888</s></div>
       </div>
   </div>







   
</div>
</div> */}