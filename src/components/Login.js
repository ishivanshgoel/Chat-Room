import React from 'react'
import "./Login.css"
import {Button} from "@material-ui/core"
import {auth,provider} from "./firebase"
import {useStateValue} from "./StateProvider"
import {actionTypes} from "./Reducer"


function Login() {

    const [state,dispatch] = useStateValue();

    const signIn=(e)=>{
       auth.signInWithPopup(provider).then(result =>{
           console.log(result);
           dispatch({
               type: actionTypes.SET_USER,
               user: result.user
           })
       }).catch(error=>{
           alert(error.message)
       }) 
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i.pcmag.com/imagery/reviews/07td46ju7p6lLVb0QGwc5VF-6.1569479844.fit_scale.size_1182x667.jpg" alt=""/>
                <h1>Hey.. Sign In to Drop a Message in My Clone</h1>
                <p>Shivansh's personal slack chat room!!</p>
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
