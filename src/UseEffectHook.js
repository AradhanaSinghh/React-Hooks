import './UseEffectHook.css';
import { useState,useEffect } from 'react';
function UseEffectHook(){
    const [count,setCount]=useState(0);
    const [widthCount,setWidthCount]=useState(window.screen.width);
    const handleClick=(val)=>{
        if(val==="inc"){
            setCount(count+1);
        }
        if(val==="dec"){
            setCount(count-1);
        }
    }

    // useEffect(()=>{
    //     document.title=count;
    // })//single use without any dependency renders every time
    useEffect(()=>{
        document.title=count;
    },[count])//runs on updation of count
    const currentScreenWidth=()=>{
        setWidthCount(()=> window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',currentScreenWidth);
        return ()=>{
            window.removeEventListener('resize',currentScreenWidth);
        }
    },[count])

    return(
        <>
        <button onClick={()=>handleClick("inc")}>+</button>
        <p>{count}</p>
        <button onClick={()=>handleClick("dec")}>-</button>
        <p className='text-5xl red text-black-400 hover:animate-pulse cursor-pointer'>The size of the window is {widthCount}</p>
        </>
    )
}
export default UseEffectHook;