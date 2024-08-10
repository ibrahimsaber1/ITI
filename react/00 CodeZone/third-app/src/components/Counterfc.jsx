import { useState,useEffect } from "react"


function Counterfc (){
const [Counter, SetCounter] = useState(0)
const [Login , IsLogin] = useState(false)

useEffect(()=>{
    // document.title = `You Clicked ${Counter} times`
    // SetCounter(Counter+1)
})

    return(
        <>
        <h1>your couter = {Counter}</h1>
        <button onClick={()=>{SetCounter(Counter+1)}}>+</button>
        <button onClick={()=>{SetCounter(Counter-1)}}>-</button>
        <br />
        <h1>{Login?<h4>u are login</h4>:<h4>u are not logined</h4> }</h1>
        <button onClick={()=>{IsLogin(true)}}>logindd</button>
        <button onClick={()=>{IsLogin(false)}}>loginout</button>
        </>

    )
}

export default Counterfc;