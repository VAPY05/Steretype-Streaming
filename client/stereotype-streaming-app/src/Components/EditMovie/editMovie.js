import "./editMovie.css"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const EditMovie = (props) => {

    const {id} = useParams()

	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState('')
	const [url, setUrl] = useState('')

    useEffect(()=>{
        fetch(`http://localhost:3030/movies/${id}`,{
            method: "GET",
        })
        .then((res)=>res.json())
        .then((data)=>{
            setTitle(data.title)
            setDescription(data.description)
            setImg(data.img)
            setUrl(data.url)
        })
    },[])

	function editMovieHandler(e) {
		e.preventDefault()
		fetch(`http://localhost:3030/movies/${id}`,{
			method: "PUT",
			headers: {
				"X-Authorization": sessionStorage.getItem('accessToken')
			},
			body: JSON.stringify({title: title, description: description, img: img, url: url, _id: id})
		})
	}

	return (
		<>
			<div className="login-page">
				<div className="form">
					<form className="create-movie" onSubmit={(e)=>editMovieHandler(e)}>

						<input type="text" placeholder="Title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
						<input type="text" placeholder="Description" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
						<input type="text" placeholder="Image" value={img} onChange={(e)=>{setImg(e.target.value)}}/>
						<input type="text" placeholder="Video URL" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>

						<button>Edit Movie</button>
					</form>
				</div>
			</div>
		</>
	)
}