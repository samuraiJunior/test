import React, { useEffect, useState } from 'react'
import "../App.scss"
const Clock = () => {

    const clocks=(te)=>{
        const date=new Date()
        const minate=date.getMinutes()
        const seconds=date.getSeconds()
        const hour=(date.getHours() % 12) + minate / 59
        //console.log(hour)
        
        const text=te
        if(text==="seconds")return seconds
        if(text==="hour")return hour
        if(text==="minate")return minate
    }
    /*const f=()=>{
        return ["hou","yes"]
    }
   const [hou,ye]=f()
    console.log(hou,ye)*/
   // const [seconds,hour]=clocks()
   const [seconds,setseconds]=useState(clocks("seconds"))
    const [hours,sethour]=useState(clocks("hour"))
    const [minate,setminate]=useState(clocks("minate"))
    useEffect(()=>{
        setTimeout(() => {
            setseconds(clocks("seconds"))
            sethour(clocks("hour"))
            setminate(clocks("minate"))
        },1000);
            //console.log(5)
    },[seconds])
    
    //let second=time*= 6; 
      //console.log(time)
    /*const clocks = () => {
        
        let today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; 
        let m = today.getMinutes(); /
        let s = today.getSeconds(); 
        h *= 30; 
        m *= 6;
        s *= 6; 
        
        return {h,m,s}
          }
      
      useEffect(()=>{
        clocks()
      },[clocks().s])
      
      const {s}=clocks()
      const {h}=clocks()
      const {m}=clocks()
      const [ms,setm]=useState(clocks().s)
  
      
      window.onload=clocks()
      */
     


  return (
    <div className="clock">
        {/*<h1>{seconds}</h1>*/}
    <div  style={{transform: `rotate(${hours*30}deg)`}} className="hand hours"></div>
    <div style={{transform: `rotate(${minate*6}deg)`}} className="hand minutes"></div>
    <div  style={{transform: `rotate(${seconds*6}deg)`}} className="hand seconds"></div>
    <div className="point"></div>
    <div className="marker">
      <span className="marker__1"></span>
      <span className="marker__2"></span>
      <span className="marker__3"></span>
      <span className="marker__4"></span>
    </div>
  </div>
  )
}

export default Clock
