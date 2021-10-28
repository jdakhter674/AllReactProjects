import React ,{useEffect}from 'react'
import './Home.css'
import { useHistory , useParams } from 'react-router-dom'
import Courses from './Courses'
import DemandSkills from './DemandSkills'
import Skills from './Skills'
import Instructor from './Instructor'
import Footer from './Footer'
import auth from '../Database/firebase'
import Navbar from './Navbar'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useSelector , useDispatch} from 'react-redux'
import { shop } from '../redux/action/shopingAction'
import addToCart from '../redux/reducer/addToCart'
import axios from 'axios'





const Home = () => {

    const history = useHistory()
    const addToCartData=useSelector(state=>state.addToCart)
    // console.log(addToCartData)
  const user = useSelector(state=>state.allReducer.name)
  const userStorage=localStorage.getItem('name')
//   const userName = user !== "" ? user :userStorage 
  const userName = userStorage 
    // console.log(userName)










    useEffect(()=>{
        if(JSON.parse(localStorage.currentUser)){
            history.push('/home')
        }
        // apiHandlingData()

    },[])
    return (
        <div className="home">
            <Navbar />
                 <button className="shoppingIcon" ><span className="icon_count">{addToCartData}</span><ShoppingCartOutlinedIcon className="shopping" /></button>
            <div className="banner_height">

                <div className="banner">
                    <div className="box">
                        <h3 className="box_heading"><span className="box_span"> Hello  {userName} </span> Always something new to learn</h3>
                        <p className="box_title">
                            With courses added regularly to our catalog, you always get the latest skills. Courses from $15.99 through tomorrow.
                        </p>
                    </div>
                </div>
            </div>
            <div >
                <Courses />
            </div>
            <div>
                <DemandSkills />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Instructor />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
