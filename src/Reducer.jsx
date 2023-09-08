import {useReducer} from "react";
import ReducerCall from "./ReducerCall";
//reducer hook is important in large scale code

const Reducer=()=>{
    const initialValue=0;
const [count,dispatch]=useReducer(ReducerCall,initialValue);
            return(
            <>
            <button onClick={()=>dispatch({type:"INC"})}>+</button>
            <p>{count}</p>
            <button onClick={()=>dispatch({type:"DEC"})}>-</button>
            </>
        )
    
}
export default Reducer;