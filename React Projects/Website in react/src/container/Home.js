import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutDispatch } from '../redux/actions/actions'
import { useHistory } from 'react-router-dom'
import './home.css'
import HomeIcon from '@material-ui/icons/Home';
import Header from '../posts/Header'
import Post from './Post'
import Footer from './Footer'
import MenuIcon from '@material-ui/icons/Menu';





const Home = () => {

    const { currentUser } = useSelector(state => state.userReducer)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleAuth = () => {
        if (currentUser) {
            dispatch(logoutDispatch())
            //  history.push('/login')
        }




    }



    return (
        <div>


            <nav className="mynav navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#">SOCIAL WEB</a>
                <button style={{backgroundColor:"fff"}} className="navbar-toggler  span_light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span className="navbar-toggler-icon span_light " /> */}
                    <MenuIcon />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" style={{color:"#fff"}} href="#">HOME <span className="sr-only">(current)</span></a>
                        </li>
                      
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                       
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                         <button className="btn_logout " onClick={handleAuth}>LogOut</button>
                    </form>
                </div>
            </nav>


            <Header />
            {/* posting */}
            <Post />
            {/* Footer */}
            <Footer />
        </div>
    )
}

export default Home
