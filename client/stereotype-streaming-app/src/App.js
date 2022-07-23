import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {Menu} from '../src/Components/Menu/Menu'
import {Search} from '../src/Components/Search/Search'

import {MovieList} from '../src/Components/Movies/Movies'
import { NotFound } from './Components/404/404';
import { VideoPlayer } from './Components/Video/VideoPlayer';
import { Details } from './Components/Details/Details';
import { Profile } from './Components/Profile/Profile';
import { Login } from './Components/Profile/Login/Login';
import { Register } from './Components/Profile/Register/Register';
import { CreateMovie } from './Components/CreateMovie/createMovie';
import { EditMovie } from './Components/EditMovie/editMovie';

function App() {
  return(
    <div>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<MovieList/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/movies/:id/details' element={<Details/>}></Route>
        <Route path='/movies/:id/watch' element={<VideoPlayer/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/profile/login' element={<Login/>}></Route>
        <Route path='/profile/register' element={<Register/>}></Route>
        <Route path='/movies/add-movie' element={<CreateMovie/>}></Route>
        <Route path='/movies/:id/edit' element={<EditMovie/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
