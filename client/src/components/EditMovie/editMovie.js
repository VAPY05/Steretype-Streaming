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

	const [titleHasError, setTitleHasError] = useState('')
	const [descriptionHasError, setDescriptionHasError] = useState('')
	const [imgHasError, setImgHasError] = useState('')
	const [videoHasError, setVideoHasError] = useState('')

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
		try {
			await editMovie(id, user.accessToken, body)
			navigate('/')
		} catch (err) {
			navigate('/404')
		}
	}

	function titleValidator(){
		if(title.length > 1){
			setTitleHasError(false)
		}else{
			setTitleHasError(true)
		}
	}

	function descriptionValidator(){
		if(description.length > 10){
			setDescriptionHasError(false)
		}else{
			setDescriptionHasError(true)
		}
	}

	function imgValidator(){
		if(img.length > 10 && img.startsWith("http") || img.startsWith("https")){
			setImgHasError(false)
		}else{
			setImgHasError(true)
		}
	}

	function videoValidator(){
		if(url.length > 10 && url.startsWith("http") || url.startsWith("https")){
			setVideoHasError(false)
		}else{
			setVideoHasError(true)
		}
	}

	return (<>
		{allow ? <div className="login-page">
			<div className="form">
				<form className="create-movie" onSubmit={(e) => (editMovieHandler)}>

					<input type="text" placeholder="Title" value={title} onChange={(e) => { setTitle(e.target.value) }} onBlur={titleValidator} />
					{titleHasError == true
						? <small className="error">The title is too short!</small>
						: null
					}
					<input type="text" placeholder="Description" value={description} onChange={(e) => { setDescription(e.target.value) }} onBlur={descriptionValidator} />
					{descriptionHasError == true
						? <small className="error">The description is too short!</small>
						: null
					}

					<input type="text" placeholder="Image" value={img} onChange={(e) => { setImg(e.target.value) }} onBlur={imgValidator} />
					{imgHasError == true
						? <small className="error">The image url is too short or should start with http or https!</small>
						: null
					}

					<input type="text" placeholder="Video URL" value={url} onChange={(e) => { setUrl(e.target.value) }} onBlur={videoValidator} />
					{videoHasError == true
						? <small className="error">The video url is too short or should start with http or https</small>
						: null
					}

					{titleHasError == true || descriptionHasError == true || imgHasError == true || videoHasError == true
						? <button disabled>Create Movie</button>
						: <button >Create Movie</button>
					}

				</form>
			</div>
		</div> : <></>}
	</>
	)
}