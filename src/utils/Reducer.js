import { reducerCases} from "./constance" 

//define initialState Reducer.js
export const  initialState ={   //inital states in objects
token:null,
// count:0,

};



export const reducer=(state,action)=>{      //this is reducder  state=>initalstates

 switch(action.type){
     case reducerCases.SET_TOKEN:{
        return{
            ...state,
            token:action.token,
        }
     }

     
     //for counter porojects on context api
    //  case reducerCases.SET_COUNTADD:{
    //     return{
    //         count:state.count+1,
    //     }
    //  }
     
    //  case reducerCases.SET_COUNTSUB:{
    //     return{
    //         count:state.count-1,
    //     }
    //  }


    //  case reducerCases.SET_RESET:{
    //     return{
    //         count:state.count=0,
    //     }
    //  }

     default:
         return state;
   
 }

}
 
export default reducer;