import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider';



function Login(){
const [state,dispatch]=useStateValue();


    const signIn = ()=>{
           auth
           .signInWithPopup(provider)
           .then(result => {
               dispatch({
                   type:actionTypes.SET_USER,
                   user:result.user,
               })
               console.log(result);
            })
            .catch(error=>{
                alert(error.message)
            })
               
    }
    return(
        <div className="login">
            <div className="login__logo">
            {/* https://p7.hiclipart.com/preview/286/412/950/facebook-scalable-vector-graphics-icon-facebook-logo-png-thumbnail.jpg */}
            {/* https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png */}

            {/* https://e7.pngegg.com/pngimages/943/983/png-clipart-facebook-inc-logo-facebook-blue-text.png */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" />
            <img src=" https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" />
            
            </div>
            <Button type="Submit" onClick={signIn}>
SignIn
            </Button>

        </div>
    )
}



export default Login;
