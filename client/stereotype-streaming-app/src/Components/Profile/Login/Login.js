import "./Login.css"

import { useState } from "react"

import {Link, useNavigate} from "react-router-dom" 

export const Login = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

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
			sessionStorage.setItem('username',response.username)
			sessionStorage.setItem('accessToken',response.accessToken)
			sessionStorage.setItem('_id',response._id)
			}
			navigate('/')
		})
	}

	return (
		<>
			<div className="login-page">
				<div className="form">
					<form className="login-form" onSubmit={(e)=>submitHandler(e)}>
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<button>login</button>
						<p className="message">Not registered? <Link to={"/profile/register"}>Create an account</Link></p>
					</form>
				</div>
			</div>
		</>
	)
}