import React,{useEffect} from 'react'
import Login from './components/Login'
import Spotify from './utils/Spotify'
import {useStateProvider} from "./utils/stateProvider"
import { reducerCases } from './utils/constance'

const App = () => {


  
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash=window.location.hash;
    if(hash){
      const token=hash.substring(1).split("&")[0].split('=')[1];
      console.log(token)
      dispatch({type:reducerCases.SET_TOKEN, token})
    }  


    document.title ="spotify"
  }, [token, dispatch])
  
  return (
    <div>


    {token? <Spotify/> :  <Login />}

    
    </div>
  )
}

export default App