import React, { useState, useEffect } from 'react'
import './LoginPage.css'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import { Link } from 'react-router-dom'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Auth from '../Database/firebase'
import { useDispatch, useSelector } from 'react-redux';
import { sign_up_error, sign_up_start, sign_up_success } from '../redux/action/loginActions';
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'




const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const {current_state} = useSelector(state => state.allReducer)
    const {error} = useSelector(state => state.allReducer)
    
    // console.log(error)







    const handleSignUp = (e) => {
        e.preventDefault()
        if(!email || !password){
            return ;
        }
    


        dispatch(sign_up_start())
      Auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
           
                // console.log(userCredential)
                var user = userCredential.user;
                // console.log(user)
                dispatch(sign_up_success({user , name}))
                localStorage.setItem("currentUser",JSON.stringify(user))
                localStorage.setItem('name',name)
                
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // console.log(errorMessage)
                dispatch(sign_up_error(errorMessage))
                // ..
            });
            if(error){
                // alert(error)
                swal(error, "Error", "error");
            }


    }


    useEffect(() => {
        if (current_state) {
            history.push('/home')
        }
    }, [history,current_state])

    return (
        <div>
            <div className="login">
                <div className="login_main">

                    <div className="login_title"> Sign up & Start Your Learning</div>
                    <div className="login_container">


                        <div className="input_container">
                            <form>

                                <div className="input_div">
                                    {/* <i class="far fa-envelope"></i> */}
                                    <AccountCircleRoundedIcon className="login_icons" />
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="user_input" placeholder="enter your name" />
                                </div>
                                <div className="input_div">
                                    {/* <i class="far fa-envelope"></i> */}
                                    <EmailOutlinedIcon className="login_icons" />
                                    <input type="email" onChange={(e) => setEmail(e.target.value)} className="user_input" placeholder="enter your email" />
                                </div>
                                <div className="input_div">
                                    {/* <i class="fas fa-lock"></i> */}
                                    <LockOutlinedIcon className="login_icons" />
                                    <input type="password" onChange={(e) => setPassword(e.target.value)} className="user_input" placeholder="enter your password" />
                                </div>
                                <button className="submit" onClick={handleSignUp} type="submit">Sign Up</button>
                            </form>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}

export default SignUp
