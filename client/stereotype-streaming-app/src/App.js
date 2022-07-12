import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {Menu} from '../src/Components/Menu/Menu'
import {Search} from '../src/Components/Search/Search'

import {MovieList} from '../src/Components/Movies/Movies'
import { NotFound } from './Components/404/404';
import { VideoPlayer } from './Components/Video/VideoPlayer';
import { Details } from './Components/Details/Details';

function App() {
  /* return (
    <div>
      <Menu>
        <div classNameName='main'>
        <MovieList/>
        </div>
      </Menu>
    </div> 
  ); */

  

  return(
    <div>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<MovieList/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/movies/:id/details' element={<Details/>}></Route>
        <Route path='/movies/:id/watch' element={<VideoPlayer/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
