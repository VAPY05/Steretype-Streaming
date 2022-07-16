import "./Profile.css"

import { Link } from "react-router-dom"

export const Profile = () => {
    
    const user = false
    
    return (
        <>
        {user 
            ?
            <div className="container">
        <div className="card">
            <img src="https://th.bing.com/th/id/R.e62421c9ba5aeb764163aaccd64a9583?rik=DzXjlnhTgV5CvA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_210318.png&ehk=952QCsChZS0znBch2iju8Vc%2fS2aIXvqX%2f0zrwkjJ3GA%3d&risl=&pid=ImgRaw&r=0" width={"130px"} height={"130px"} />
            <p className="card__name">Lily-Grace Colley</p>
            <div className="grid-container">

                <div className="grid-child-posts">
                    156 Post
                </div>

                <div className="grid-child-followers">
                    1012 Likes
                </div>
            </div>

            <Link to={"/movies/add-movie"}><button className="btn draw-border">Add Movie</button></Link>
            <Link to={"/bookmarks"}><button className="btn draw-border">Bookmarks</button></Link>
            <button className="btn draw-border">Logout</button>

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