import React, { useEffect, useState } from 'react'
import './LoginPage.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {Link} from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom' 
import Auth from '../Database/firebase'
import firebase from 'firebase'
import { google_auth_error, google_auth_start, google_auth_success, sign_in_error, sign_in_start, sign_in_success } from '../redux/action/loginActions';
import swal from 'sweetalert'

const LoginPage = () => {


const [email , setEmail ] =useState("")
const [password , setPassword ] =useState("")
const [name , setName ] =useState("")

const dispatch=useDispatch()
const history = useHistory()
const {current_state} = useSelector(state=>state.allReducer)
const {error} = useSelector(state=>state.allReducer)
// const currentUser = JSON.parse(sessionStorage.currentUser)

// console.log(currentUser)



const handleSignIn=(e)=>{

    e.preventDefault()
    if(!email || !password){
        return ;
    }
    dispatch(sign_in_start())
 Auth.signInWithEmailAndPassword(email,password)
    .then((userCredential) => {
           
        console.log(userCredential)
        var user = userCredential.user;
        console.log(user)
        dispatch(sign_in_success({user , name}))
        localStorage.setItem("currentUser",JSON.stringify(user))
        localStorage.setItem('name',name)
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        dispatch(sign_in_error(errorMessage))
        // ..
    });
    swal(error,"error",'error')


   
}


const googleAuthButton=()=>{
    
    const provider = new firebase.auth.GoogleAuthProvider();
    dispatch(google_auth_start())
      Auth.signInWithPopup(provider)
        .then((result) => {

            // var user = result;
           
           var email_name =result.user.displayName
            // console.log(user.displayName)
            localStorage.setItem("currentUser",JSON.stringify(result))
            localStorage.setItem('name',email_name)
            dispatch(google_auth_success({result , email_name}))
           
        }).catch((error) => {
            console.log(error.message)
            dispatch(google_auth_error(error.message))


        });

        swal(error,"error",'error')
}




 useEffect(()=>{
     if(current_state ){
         history.push('/home')
     }
 


},[history,current_state])




    return (
        <div className="login">
            <div className="login_main">

                <div className="login_title"> Login To Your Udemy Account</div>
                <div className="login_container">
                    <div className="google_auth" onClick={googleAuthButton}>
                        <i className="fab fa-google"></i>

                      Login With Google</div>

                    <div className="input_container">
                        <form>
                        <div className="input_div">
                                    {/* <i class="far fa-envelope"></i> */}
                                    <AccountCircleRoundedIcon className="login_icons" />
                                    <input type="text" onChange={(e)=>setName(e.target.value)} className="user_input" placeholder="enter your name" />
                                </div>

                        <div className="input_div">
                            {/* <i class="far fa-envelope"></i> */}
                            <EmailOutlinedIcon className="login_icons" />
                            <input type="email"  onChange={(e)=>setEmail(e.target.value)} className="user_input" placeholder="enter your email" />
                        </div>
                        <div className="input_div">
                            {/* <i class="fas fa-lock"></i> */}
                            <LockOutlinedIcon className="login_icons" />
                            <input type="password"  onChange={(e)=>setPassword(e.target.value)} className="user_input" placeholder="enter your password" />
                        </div>
                        <button className="submit" onClick={handleSignIn} type="submit">Login</button>
                        </form>
                    </div>
                   <a className="forget_password"><Link to='/forget'> or forget password </Link> </a>
                </div>

            <div className="have_account">
               <span className="account_reg">Dont have account ? <Link to="/sign"><a className="forget_password2">SignUp</a></Link></span>
            </div>
            </div>

        </div>
    )
}

export default LoginPage
