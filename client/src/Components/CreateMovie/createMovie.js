import "./createMovie.css"

import { useState, useContext } from "react"
import { authContext } from "../../contexts/authContext"
import { useNavigate } from "react-router-dom"
import { createMovie } from "../../services/movies"

export const CreateMovie = (props) => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState('')
	const [url, setUrl] = useState('')

	const navigate = useNavigate()

	const userContext = useContext(authContext).user
	const accessToken = userContext.accessToken
	const userId = userContext._id

	

	async function createMovieHandler(e) {
		e.preventDefault()
		const body = {
			title,
			description,
			img,
			url,
			ownerId: userId
		}
		try{
			await createMovie(accessToken, body)
			navigate('/')
		}catch(err){
			navigate('/404')
		}
	}

	return (
		<>
			<div className="login-page">
				<div className="form">
					<form className="create-movie" onSubmit={(e)=>createMovieHandler(e)}>

						<input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
						<input type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
						<input type="text" placeholder="Image" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
						<input type="text" placeholder="Video URL" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>

						<button>Create Movie</button>
					</form>
				</div>
			</div>
		</>
	)
}