
import "./Register.css"

import {useState, useContext} from "react"

import { authContext } from "../../../contexts/authContext"

import {Link, useNavigate} from "react-router-dom" 


export const Register = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

	const userContext = useContext(authContext);
	const user = userContext.user;

	const navigate = useNavigate();

	function SubmitHandler(e) {
		e.preventDefault()
		fetch('http://localhost:3030/user/register',{
			method: "POST",
			body: JSON.stringify({username, password}),
			headers: {
				"Content-Type": "Application/JSON",
			},
		}).then(res=>res.json()).then(response=>{
			if(response.username && response.accessToken && response._id){
				userContext.loginHandler({
					"username": response.username,
					"accessToken": response.accessToken,
					"_id": response._id
				})
				}
				navigate('/')
			navigate("/404")
		})
	}

    return (
	<>	
		<div className="login-page">
				<div className="form">
					<form className="login-form" onSubmit={(e)=>SubmitHandler(e)}>
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<input type="password" placeholder="repeat password" value={repeatedPassword} onChange={(e)=>{setRepeatedPassword(e.target.value)}}/>
						<button>Register</button>
						<p className="message">Already registered? <Link to={"/profile/login"}>Sign in</Link></p>
					</form>
				</div>
			</div>
	</>
    )
}