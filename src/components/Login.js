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
            <div className="login__container" style={{padding:"80px"}}>
                <img src="https://cdn.jim-nielsen.com/ios/512/spike-email-messenger-chat-2019-05-01.png" alt="logo" />
                <h1>Hey 👋 Nice to see you here.</h1>
                <div style={{margin:"10px"}}>
                    <a className="ui linkedin button" href="https://www.linkedin.com/in/shivansh-goel-260019a7/" target="_blank">
                        <i className="linkedin icon"></i>
                        LinkedIn
                        </a>
                    <a className="ui instagram button" href="https://www.instagram.com/_shivansh_21/" target="_blank">
                        <i className="instagram icon"></i>
                        Instagram
                    </a>
                    <a className="ui github button" href="https://github.com/ishivanshgoel" target="_blank">
                        <i className="github icon"></i>
                        Github
                    </a>
                </div>
                <h1>Sign In to drop a Message. 👨‍💻</h1>
                <button onClick={signIn} className="ui google plus button">
                    <i className="google plus icon"></i>Sign In with Google</button>
            </div>
        </div>
    )
}

export default Login
