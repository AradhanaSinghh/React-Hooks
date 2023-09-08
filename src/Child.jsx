import React from "react";
import {useContext} from "react";
import { AppContext } from "./useContext/userContext";
//child to parent transfer using usecontext
//best incase of props drilling which is tiring and lengthy process;
const Child=()=>{
    const userData=useContext(AppContext);
    return(
        <div>
            Child=My name is {userData.name} and my age is {userData.age}.
        </div>
    )
}
export default Child;