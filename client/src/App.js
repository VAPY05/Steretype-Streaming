import './App.css';

import { Routes, Route, Navigate } from "react-router-dom";

import { Menu } from '../src/components/Menu/Menu'
import { Search } from '../src/components/Search/Search'
import { MovieList } from '../src/components/Movies/Movies'
import { NotFound } from './components/404/404';
import { VideoPlayer } from './components/Video/VideoPlayer';
import { Details } from './components/Details/Details';
import { Profile } from './components/Profile/Profile';
import { Login } from './components/Profile/Login/Login';
import { Register } from './components/Profile/Register/Register';
import { CreateMovie } from './components/CreateMovie/createMovie';
import { EditMovie } from './components/EditMovie/editMovie';
import { MoviesAll } from './components/Movies/MoviesAll/MoviesAll';
import { MovieSearch } from './components/Movies/MovieSearch/MovieSearch';

import { authContext } from './contexts/authContext';
import { useEffect, useState } from 'react';
import { Bookmarks } from './components/Movies/Bookmarks/Bookmarks';

function App() {

  const [auth, setAuth] = useState({});

  const loginHandler = (authData) => {
    setAuth(authData)
  }

  const AuthHandler = ({children}) => {
    if(localStorage.getItem("username")) {
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
          <Route path='/movies/search' element={<Search />}></Route>
          <Route path='/movies/search/:search' element={<MovieSearch/>}></Route>
          <Route path='/movies/:id/details' element={<Details />}></Route>
          <Route path='/movies/:id/watch' element={<VideoPlayer />}></Route>
          <Route path='/profile' element={<AuthHandler><Profile /></AuthHandler>}></Route>
          <Route path='/profile/login' element={<Login />}></Route>
          <Route path='/profile/register' element={<Register />}></Route>
          <Route path='/movies/add-movie' element={<AuthHandler><CreateMovie /></AuthHandler>}></Route>
          <Route path='/movies/:id/edit' element={<AuthHandler><EditMovie /></AuthHandler>}></Route>
          <Route path='/movies/new' element={<MoviesAll type={"new"} />}></Route>
          <Route path='/movies/trending' element={<MoviesAll type={"trends"} />}></Route>
          <Route path='/movies' element={<MoviesAll type={"alphabetically"} />}></Route>
          <Route path='/bookmarks' element={<AuthHandler><Bookmarks /></AuthHandler>}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
    </authContext.Provider>
  )
}

export default App;
