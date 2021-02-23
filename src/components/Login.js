import React from 'react'
import "./Login.css"
import { auth, provider } from "./firebase"
import { useStateValue } from "./StateProvider"
import { actionTypes } from "./Reducer"


function Login() {

    const [state, dispatch] = useStateValue();

    const signIn = (e) => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        }).catch(error => {
            alert(error.message)
        })
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://cdn.jim-nielsen.com/ios/512/spike-email-messenger-chat-2019-05-01.png" alt="logo" />
                <h1>Hey.. Sign In to Drop a Message in My Clone</h1>
                <button onClick={signIn} className="ui google plus button">
                    <i className="google plus icon"></i>Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login
