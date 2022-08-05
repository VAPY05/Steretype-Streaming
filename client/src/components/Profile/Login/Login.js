import "./Login.css"

import { login } from "../../../services/user"

import { useState, useContext } from "react"
import { authContext } from "../../../contexts/authContext"

import {Link, useNavigate} from "react-router-dom" 

export const Login = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const [usernameHasError, setUsernameHasError] = useState(true)
	const [passwordHasError, setPasswordHasError] = useState(true)

	const {loginHandler} = useContext(authContext);

	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault()
		const body = {
			username,
			password
		}

		login(body)
			.then(response=>{
			if(response.username && response.accessToken && response._id){
				loginHandler({
					username: response.username,
					accessToken: response.accessToken,
					_id: response._id
				})
				localStorage.setItem("token", response.accessToken)
				localStorage.setItem("id", response._id)
				localStorage.setItem("username", response.username)
				navigate('/')
			}else{
				navigate('/404')
			}
		})
	}

	function usernameValidator() {
		if(username.length < 4){
			setUsernameHasError(true)
		}else{
			setUsernameHasError(false)
		}
	}

	function passwordValidator() {
		if(password.length < 4){
			setPasswordHasError(true)
		}else{
			setPasswordHasError(false)
		}
	}

	return (
		<>
			<div className="login-page">
				<div className="form">
					<form className="login-form" onSubmit={(e)=>submitHandler(e)}>
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} onBlur={usernameValidator}/>
		
						{usernameHasError && 
						<small className="error">Username is too short!</small>
						}
		
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} onBlur={passwordValidator}/>
						{passwordHasError && 
						<small className="error">Password is too short!</small>
						}

						{passwordHasError || usernameHasError ? <button disabled>login</button> : <button>login</button>}
						
						<p className="message">Not registered? <Link to={"/profile/register"}>Create an account</Link></p>
					</form>
				</div>
			</div>
		</>
	)
}