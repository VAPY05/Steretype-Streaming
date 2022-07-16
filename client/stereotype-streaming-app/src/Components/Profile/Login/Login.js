import { useState } from "react"

import "./Login.css"

import {Link} from "react-router-dom" 

export const Login = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function session() {

	}

	return (
		<>
			<div className="login-page">
				<div className="form">
					{/* <form className="register-form">
						<input type="text" placeholder="name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<input type="text" placeholder="email address" />
						<button>create</button>
						<p className="message">Already registered? <a href="#">Sign In</a></p>
					</form> */}
					<form className="login-form">
						<input type="text" placeholder="name" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<button>login</button>
						<p className="message">Not registered? <Link to={"/profile/register"}>Create an account</Link></p>
					</form>
				</div>
			</div>
		</>
	)
}