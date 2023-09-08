// it create a mutable variable which will not re-render the components
//used to access the DOM element directly

import React,{useState,useEffect,useRef} from "react";

const RefHook=()=>{
    const [userInput,setUserInput]=useState("");
    const count=useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
        // setCount(count+1);
    });

    return (
        <>
        <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />

        <p>the number of times comp render: {count.current}</p>
        </>
    )
}
export default RefHook;