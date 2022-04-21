import React from 'react'
import Styled from "styled-components"


import {useStateProvider} from "./stateProvider"
import { reducerCases } from './constance'
import Fotter from '../components/Fotter'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Body from '../components/Body'

const Spotify = () => {


    const [{ count }, dispatch] = useStateProvider();
  return (
    <Cointener>

        {/* <h1>{count}</h1>
       <button onClick={()=>( dispatch({type:reducerCases.SET_COUNTADD}))}>click+</button>
       <button onClick={()=>( dispatch({type:reducerCases.SET_COUNTSUB}))}>click-</button>
       <button onClick={()=>( dispatch({type:reducerCases.SET_RESET}))}>reset</button> */}

     <div className="spotif_body">
            {/* fotter  */}
            <Sidebar />
       <div className="body">

       <Navbar />
        {/* fotter  */}
         <div className="body_content">
           {/* fotter  */}

           <Body />
         </div>
       </div>
     </div>
      

      {/* fotter  */}
     <div className="fotter">
     <Fotter />
     </div>

    </Cointener>
  )
}


//styled componenst 

const  Cointener= Styled.div`
max-width:100vw;
max-height:100vh;
display:grid;
grid-template-rows:85vh 15vh ;
overflow: hidden;

.spotif_body{
    display: grid;
    grid-template-columns: 15vw 85vw;
    height: 100%;
    width: 100%;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(32, 87, 100);
  
}



`




export default Spotify