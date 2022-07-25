import {useState} from "react"

import "./Register.css"

import {Link, useNavigate} from "react-router-dom" 


export const Register = () => {

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')

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
				sessionStorage.setItem('username',response.username)
				sessionStorage.setItem('accessToken',response.accessToken)
				sessionStorage.setItem('_id',response._id)
				}
				navigate('/')
			navigate('/')
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
						<p className="message">Already registered? <Link to={"/profile/login"}>Sing in</Link></p>
					</form>
				</div>
			</div>
	</>
    )
}