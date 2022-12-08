import './style.css'
import React from 'react'
import EDU from '../components/countDownTimer/Utils/HalvingEDU.jsx'
import CountdownTimer from '../components/countDownTimer/countDownTimer.jsx';
import Graph from './Graph.jsx'
import Graph2 from './Graph2.jsx'
import Graph3 from './Graph3.jsx'
export default function Countdown() {
  return (
    <div>
      
      <div className="App -z-999" name="Halving" >
      <CountdownTimer
      countdownTimestampMs={1711251267000}/>
        <div className="Graph2 w-[90%] ml-[5%] lg:w-[70%] lg:ml-[15%] -z-999">
          <Graph2/>
          <EDU />
          <Graph3 />
        </div>
        
        
        {/* <div className="Graph1">
          <Graph />
        </div> */}
        
      </div>
   
    </div>
  );
}

