import React , {useEffect} from 'react'
import './Header.css'
import AOS from 'aos';

const Header = () => {

    AOS.init();
    
    return (
      
        <div className="flex-container">
            <div className="flex-item-left" data-aos={"fade-left"}>
                <h1>Social Network<br />
                    <span>for Programmers and Developers</span></h1>
                <p>The era of Web 3.0 is coming, the digital economy is a radical new imagining of the future of work. We want to promote this vision by using the power of blockchain, crowd knowledge and mass collaboration to provide access to the global sharing economy to connect the talents of millions of programmers and developers around the world.

                    Become a pioneer of the future.</p>
            </div>
            <div className="flex-item-right">
                <img src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" />
            </div>
        </div>
    )
}

export default Header
