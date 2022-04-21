import React from 'react'
import Styled from 'styled-components'
import { AiFillHome,AiOutlineSearch  } from 'react-icons/ai';

import { MdOutlineLibraryAdd } from 'react-icons/md';
import Playlist from './Playlist';

const Sidebar = () => {
  return (
    <Co>

      <div className="tops_links">
        <div className="logo">
        <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify"/>
        </div>

        <ul>
          <li><AiFillHome  /> <span>home</span></li>
          <li><AiOutlineSearch />       <span>Search</span> </li> 
          <li><MdOutlineLibraryAdd />   <span>your libarary</span></li>
        </ul>
      </div>

      <Playlist />
    </Co>
  )
}

const Co=Styled.div`
 background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-size:1.1rem;
 
.tops_links{
  display: flex;
  flex-direction: column;
}

.logo{
  text-align:center;
  margin:1rem 0rem;
  background-color: green;
  padding: 0.5REM 1rem;
  border-radius:2rem;
}
img{
  max-inline-size:80%;
  block-size:auto;
}

ul{

  list-style:none;
  display:flex;
  flex-direction: column;
  gap:1rem;
  padding:1rem;
  
}

li{
  display:flex;
  align-items:center;
  gap:1rem;
  transform: all 0.3s ease-in-out;
  cursor: pointer;
&:hover{
  color:#fff;
}
}

`

export default Sidebar