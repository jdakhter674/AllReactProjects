import React ,{useState} from 'react'
import './Skills.css'
import design from '../images/design.jpg'
import design2 from '../images/design2.jpg'
import marketing from '../images/marketing.jpg'
import music from '../images/music.jpg'
import personal from '../images/personal.jpg'
import photography from '../images/photography.jpg'
import business from '../images/business.jpg'
import software from '../images/software.jpg'



const Skills = () => {
     const allskills=[
         {image:design ,title:'Design'},
         {image:design2 ,title:'Development'},
         {image:marketing ,title:'Marketing'},
         {image:software ,title:'Software'},
         {image:business ,title:'business'},
         {image:photography ,title:'Photography'},
         {image:music ,title:'Music'},
         {image:personal ,title:'Personal'},
    
        
        ]
    const [skills , setSkills ]= useState(allskills)



    return (
        <div className="skills_container">
            {
                skills.map((v,i)=>(

                <div className="skills_main_card" key={i}>
                    <div className="skills_image">
                    <img className="skills_main_image" src={v.image} />
                    </div>
                    <div className="skills_main_title">
                        <h2 className="skills_title">{v.title}</h2>
                    </div>
                </div>
                    ))
                }
                

         

        </div>
    )
}

export default Skills
