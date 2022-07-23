import "./createMovie.css"

import { useState } from "react"

export const CreateMovie = (props) => {

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState('')
	const [url, setUrl] = useState('')

	function createMovieHandler(e) {
		e.preventDefault()
		fetch('http://localhost:3030/movies',{
			method: "POST",
			headers: {
				"Content-Type": "Application/JSON",
				"X-Authorization": sessionStorage.getItem('accessToken')
			},
			body: JSON.stringify({title: title, description: description, img: img, url: url, ownerId: sessionStorage.getItem('_id')})
		})
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