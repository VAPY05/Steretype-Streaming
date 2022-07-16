import {useState} from "react"

import "./Register.css"

import {Link} from "react-router-dom" 


export const Register = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

	function session() {

	}

    return (
	<>	
		<div className="login-page">
				<div className="form">
					<form className="login-form">
						<input type="text" placeholder="username" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
						<input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
						<input type="password" placeholder="repeat password" value={repeatedPassword} onChange={(e)=>{setRepeatedPassword(e.target.value)}}/>
						<button>Register</button>
						<p className="message">Already registered? <Link to={"/profile/login"}>Sing in</Link></p>
					</form>
				</div>
			</div>
	</>
    )
}