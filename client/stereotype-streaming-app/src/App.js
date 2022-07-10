import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import {Menu} from '../src/Components/Menu/Menu'
import {Search} from '../src/Components/Search/Search'

import {MovieList} from '../src/Components/Movies/Movies'
import { NotFound } from './Components/404/404';

function App() {
  /* return (
    <div>
      <Menu>
        <div className='main'>
        <MovieList/>
        </div>
      </Menu>
    </div> 
  ); */

  return(
    <div>
      <Menu/>
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<MovieList/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;
