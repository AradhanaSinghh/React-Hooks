import React, {useRef} from "react";

const ReferenceHooks=()=>{
    const inputRef=useRef();
    const changeBorder=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="#82E0AA";
    };
    //inputRef will change color and can access dom element directly
    return(
        <>
        <input type="text" ref={inputRef} />
        <br />
        <button onClick={changeBorder}>submit</button>
        </>
    )
};
export default ReferenceHooks;