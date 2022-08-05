import "./editMovie.css"

import { useEffect, useState, useContext } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { authContext } from "../../contexts/authContext"

import { editMovie, getMovieById } from "../../services/movies"


export const EditMovie = (props) => {

	const { id } = useParams()
	const navigate = useNavigate();

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState('')
	const [url, setUrl] = useState('')
	const [owner, setOwner] = useState('')
	const [allow, setAllow] = useState(false)

	const userContext = useContext(authContext);
	const user = userContext.user;
	

	useEffect(() => {
		getMovieById(id)
			.then(data => {
				setOwner(data.ownerId)
				setTitle(data.title)
				setDescription(data.description)
				setImg(data.img)
				setUrl(data.url)
				if (data.ownerId === localStorage.getItem("id")) {
					setAllow(true)
				} else {
					navigate("/")
				}
			})
	}, [])
	
	

	async function editMovieHandler(e) {
		e.preventDefault()
		const body = {
			title,
			description,
			img,
			url,
			_id: id
		}
		try{
			await editMovie(id, user.accessToken, body)
			navigate('/')
		}catch(err){
			navigate('/404')
		}
	}

	return (<>
			{allow ? <div className="login-page">
			<div className="form">
				<form className="create-movie" onSubmit={(e) => editMovieHandler(e)}>

					<input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} />
					<input type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} />
					<input type="text" placeholder="Image" value={img} onChange={(e) => { setImg(e.target.value) }} />
					<input type="text" placeholder="Video URL" value={url} onChange={(e) => { setUrl(e.target.value) }} />

					<button>Edit Movie</button>
				</form>
			</div>
		</div> : <></>}
		</>
	)
}