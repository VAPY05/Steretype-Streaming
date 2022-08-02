import "./Login.css"

import { useState, useContext } from "react"
import { authContext } from "../../../contexts/authContext"

import {Link, useNavigate} from "react-router-dom" 

export const Login = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const {loginHandler} = useContext(authContext);

	const navigate = useNavigate();

	function submitHandler(e) {
		e.preventDefault()
		fetch('http://localhost:3030/user/login',{
			method: "POST",
			body: JSON.stringify({username, password}),
			headers: {
				"Content-Type": "Application/JSON",
			},
		}).then(res=>res.json()).then(response=>{
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

	return (
		<>
			<div className="login-page">
				<div className="form">
					<form className="login-form" onSubmit={(e)=>submitHandler(e)}>
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<small>Username is too short!</small>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<small>Password is too short!</small>
						<button>login</button>
						<p className="message">Not registered? <Link to={"/profile/register"}>Create an account</Link></p>
					</form>
				</div>
			</div>
		</>
	)
}