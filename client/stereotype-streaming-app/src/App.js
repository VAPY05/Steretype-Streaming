import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";

import { Menu } from '../src/Components/Menu/Menu'
import { Search } from '../src/Components/Search/Search'
import { MovieList } from '../src/Components/Movies/Movies'
import { NotFound } from './Components/404/404';
import { VideoPlayer } from './Components/Video/VideoPlayer';
import { Details } from './Components/Details/Details';
import { Profile } from './Components/Profile/Profile';
import { Login } from './Components/Profile/Login/Login';
import { Register } from './Components/Profile/Register/Register';
import { CreateMovie } from './Components/CreateMovie/createMovie';
import { EditMovie } from './Components/EditMovie/editMovie';
import { MoviesAll } from './Components/Movies/MoviesAll/MoviesAll';

import { authContext } from './contexts/authContext';
import { useEffect, useState } from 'react';

function App() {

  const [auth, setAuth] = useState({});

  const loginHandler = (authData) => {
    setAuth(authData)
  }

  const AuthHandler = ({children}) => {
    if(localStorage.getItem("username")) {
      console.log("user")
      return children;
    }
      return <Navigate to="/profile/login" replace />;
  }

  useEffect(() => {
    if(localStorage.getItem("token")) {
      loginHandler({
        username: localStorage.getItem("username"),
        accessToken: localStorage.getItem("token"),
        _id: localStorage.getItem("id")
      })
    } 
  }, [])

  return (
    <authContext.Provider value={{ user:auth, loginHandler }}>
      <div>
        <Menu />
        <Routes>
          <Route path='/' element={<MovieList />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/movies/:id/details' element={<Details />}></Route>
          <Route path='/movies/:id/watch' element={<VideoPlayer />}></Route>
          <Route path='/profile' element={<AuthHandler><Profile /></AuthHandler>}></Route>
          <Route path='/profile/login' element={<Login />}></Route>
          <Route path='/profile/register' element={<Register />}></Route>
          <Route path='/movies/add-movie' element={<AuthHandler><CreateMovie /></AuthHandler>}></Route>
          <Route path='/movies/:id/edit' element={<AuthHandler><EditMovie /></AuthHandler>}></Route>
          <Route path='/movies/new' element={<MoviesAll type={"new"} />}></Route>
          <Route path='/movies' element={<MoviesAll type={""} />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </authContext.Provider>
  )
}

export default App;
