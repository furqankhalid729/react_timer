import { useState } from "react"
const Timer = () =>{
    let date = new Date()
    const time ={
        hour:date.getHours(),
        mint: date.getMinutes(),
        sec:date.getSeconds() 
    }
    const [state,setState] = useState(time);
    const update = (time)=>{
        time ={
            hour:date.getHours(),
            mint: date.getMinutes(),
            sec:date.getSeconds() 
        };
        setState(time)
    }
    setTimeout(
        ()=>{
            update(time)
        },1000
    );

    return (
    <div>
        <h1>Timer</h1>
        <div className="timer-cont">
            <div className="count">
                <p id="hour">{state.hour}</p>
                <span>:</span>
            </div>
            <div className="count">
                <p id="mint">{state.mint}</p> 
                <span>:</span> 
            </div>
            <div className="count">
                <p id="sec">{state.sec}</p>
            </div>
        </div>
    </div>)
}

export default Timer