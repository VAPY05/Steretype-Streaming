import "./Profile.css"

import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react"

import { authContext } from "../../contexts/authContext"

export const Profile = () => {
    
    //const user = sessionStorage.getItem("username") && sessionStorage.getItem("accessToken")
    const userContext = useContext(authContext);
    let user = userContext.user
    const navigate = useNavigate();
    
    function logoutHandler() {
            fetch('http://localhost:3030/user/logout',{
                headers: {
                    "X-Authorization": user.accessToken
                }
            })
            .then((data)=>{
                userContext.loginHandler({})
                localStorage.clear()
                navigate('/')
            })
    }

    return (
        <>
        {user.username 
            ?
            <div className="container">
        <div className="card">
            <img src="https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0" width={"130px"} height={"130px"} />
            <p className="card__name">{user.username}</p>

            <Link to={"/movies/add-movie"}><button className="btn draw-border">Add Movie</button></Link>
            <Link to={"/bookmarks"}><button className="btn draw-border">Bookmarks</button></Link>
            <button className="btn draw-border" onClick={logoutHandler}>Logout</button>

        </div>
        </div>
            :
            <div className="container">
        <div className="card">
            <img src="https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0" width={"130px"} height={"130px"} />
            <p className="card__name">Guest</p>

            <Link to={"/profile/login"}><button className="btn draw-border">Login</button></Link>
            <Link to={"/profile/register"}><button className="btn draw-border">Register</button></Link>

        </div>
        </div>
        }
        </>
        
        
    )
} 