import React, { useEffect } from 'react'
import './Navbar.css'
import img from '../images/udemy.png'
import { Link , useHistory} from 'react-router-dom'
import Auth from '../Database/firebase'
import {useDispatch , useSelector} from 'react-redux'
import { sign_out_error, sign_out_start, sign_out_success } from '../redux/action/loginActions'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




const Navbar = () => {

    const dispatch = useDispatch()
    const {current_state}=useSelector(state=>state.allReducer)
    const history=useHistory()


const handleSignOut=()=>{

    dispatch(sign_out_start()) 
     Auth.signOut()
        .then((res)=>{ 
            dispatch(sign_out_success()) 

            // console.log(user)
            // localStorage.removeItem("currentUser");
        })
        .catch(error=>{
        dispatch(sign_out_error(error.message))
            console.log(error)
        })
}

useEffect(()=>{
// if(!current_state){
//     history.push('/')
// }
},[current_state,history])

    
    return (
        <div className="wrapper">
            <nav>
                <input type="checkbox" id="show-search" />
                <input type="checkbox" id="show-menu" />
                <label htmlFor="show-menu" className="menu-icon"><i className="fas fa-bars" /></label>
                <div className="content">
                    <div className="logo"><img className="udemy" src={img} /></div>
                    <ul className="links">
                        <li><a href="#">
                            <Link to="/home">Home</Link></a></li>
                        {/* <li><a >
                           Profile
                            </a></li> */}

                        <li>
                            <a href="#" className="desktop-link">Courses</a>
                            <input type="checkbox" id="show-services" />
                            <label htmlFor="show-services">courses</label>
                            <ul>
                                <li><a href="#">Data Science</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">Aws Azure</a></li>
                                <li>
                                    <a href="#" className="desktop-link">Web Development</a>
                                    <input type="checkbox" id="show-items" />
                                    <label htmlFor="show-items">Web Development</label>
                                    <ul>
                                        <li><a href="#">Html Css </a></li>
                                        <li><a href="#">Javascript</a></li>
                                        <li><a href="#">React & Redux</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a  onClick={handleSignOut} >
                            <Link to="/">
                            Sign out
                            </Link>
                            </a></li>
                       
                    </ul>
                </div>
                <label htmlFor="show-search" className="search-icon"><i className="fas fa-search" /></label>
               
                <form action="#" className="search-box">
                    <input type="text" placeholder="Type Something to Search..." required />
                    <button type="submit" className="go-icon"><i className="fas fa-long-arrow-alt-right" /></button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar
