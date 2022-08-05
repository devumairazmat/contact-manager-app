import React from "react";
import { useState } from "react";
function Time(){
    const [time, setTime] = useState(new Date().toString());
     function showTime(){
        setTime(new Date().toString());
     }
setInterval(showTime, 1000);
    return( 
        <h2>{time}</h2>
    );
}
export default  Time;