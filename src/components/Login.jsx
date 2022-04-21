import React from 'react'
import styled from 'styled-components' //import style components

const Login = () => {

    const handleclick = async () => {
        //spotify api login
        const client_id = "295250205c514687869fba628708aa6d";
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
      };
  return (
      <>


    
    <Cointener>{/* make custome components */}
     
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify" />
        <button onClick={handleclick}>connect to spotify</button>
    </Cointener>
    
   
    </>
  )
}


const Cointener=styled.div`    // custome components=Cointener define div

display:flex;
background-color:#1db954;
flex-direction:column;
height:100vh;
align-items:center;
justify-content:center;
gap:5rem;

  img{

    height:20vh;
   
  }

  button{
      padding:1rem 5rem;
      border-radius:5rem;
      background-color:#131313;
      outline:none;
      border:none;
      color:#1db954;
      font-size:1.4rem;
      cursor: pointer;
  }
`



export default Login