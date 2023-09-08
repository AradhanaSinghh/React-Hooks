//useLayoutEffect, runs synchronously after a render but the screen is updated.

//useEffect runs asynchronously and after a render is painted to the screen

import React,{useState,useLayoutEffect,useEffect} from "react";

const UseLayoutEffect=()=>{
    const [num,setNum]=useState(0);
    //useEffect will always print 0 before rendering another object 
    //but using layout effect it doesn't do the same.
    useLayoutEffect(()=>{
        if(num===0)setNum(num+Math.random()*100);
    },[num]);
    // useEffect(()=>{
    //     console.log("I am first statement");
    // });
    // useLayoutEffect(()=>{
    //     console.log("I am second statement");
    // }); 
    // useEffect(()=>{
    //     console.log("I am third statement");
    // });

    return (
        <>
        <p>my new random number {num}</p>
        <button onClick={()=>setNum(0)}>Random num</button>
        </>
    )
}
export default UseLayoutEffect;