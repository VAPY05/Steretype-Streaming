
import "./Register.css"

import {useState, useContext} from "react"

import { authContext } from "../../../contexts/authContext"

import {Link, useNavigate} from "react-router-dom" 
import { register } from "../../../services/user"



export const Register = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

	const [usernameHasError, setUsernameHasError] = useState('')
	const [passwordHasError, setPasswordHasError] = useState('')
	const [repeatedPasswordHasError, setRepeatedPasswordHasError] = useState('')

	const userContext = useContext(authContext);
	const user = userContext.user;

	const navigate = useNavigate();

	function SubmitHandler(e) {
		e.preventDefault()
		const body = {
			username,
			password
		}
		register(body)
		.then(response=>{
			if(response.username && response.accessToken && response._id){
				userContext.loginHandler({
					"username": response.username,
					"accessToken": response.accessToken,
					"_id": response._id
				})
				localStorage.setItem("token", response.accessToken)
				localStorage.setItem("id", response._id)
				localStorage.setItem("username", response.username)
				navigate('/')
				}else{
					navigate("/404")
				}
				
		})
	}

	function usernameValidator() {
		if(username.length > 3){
			setUsernameHasError(false)
		}else{
			setUsernameHasError(true)
		}
	}
	
	function passwordValidator() {
		if(password.length > 3){
			setPasswordHasError(false)
		}else{
			setPasswordHasError(true)
		}
	}

	function repeatPasswordValidator() {
		if(repeatedPassword.length > 3 && repeatedPassword == password){
			setRepeatedPasswordHasError(false)
		}else{
			setRepeatedPasswordHasError(true)
		}
	}

    return (
	<>	
		<div className="login-page">
				<div className="form">
					<form className="login-form" onSubmit={(e)=>SubmitHandler(e)}>
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} onBlur={usernameValidator}/>
						
						{usernameHasError && 
						<small className="error">Username is too short!</small>
						}

						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} onBlur={passwordValidator}/>
						
						{passwordHasError && 
						<small className="error">Password is too short!</small>
						}

						<input type="password" placeholder="repeat password" value={repeatedPassword} onChange={(e)=>{setRepeatedPassword(e.target.value)}} onBlur={repeatPasswordValidator}/>

						{repeatedPasswordHasError && 
						<small className="error">Repeated Password is too short or not matching!</small>
						}

						{usernameHasError != false || passwordHasError != false || repeatedPasswordHasError != false
						?<button disabled>Register</button>
						:<button>Register</button>
						}
						<p className="message">Already registered? <Link to={"/profile/login"}>Sign in</Link></p>
					</form>
				</div>
			</div>
	</>
    )
}