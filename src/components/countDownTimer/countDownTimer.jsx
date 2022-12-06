import React, {useState, useEffect} from 'react'
import './countDownTimer.css'
import {getRemainingTimeUntilMsTimestamp} from './Utils/CountDownTimerUtils.jsx'

const defaultRemainingTime={
  millisecond:'00',
  seconds:'00',
  minutes:'00',
  hours:'00',
  days:'00',
  
}



const CountdownTimer = ({countdownTimestampMs}) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
      const intervalId = setInterval(() => {
          updateRemainingTime(countdownTimestampMs);
      }, 1);
      return () => clearInterval(intervalId);
  },[countdownTimestampMs]);

  function updateRemainingTime(countdown) {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  return(
    <div className="countdown-timer1">
        <footer className="footer">'</footer>
            <header>
            <div className="mt-[20vh] ">
              <p className='text-[35px]  font-bold inline border-b-4 border-pink-600 text-red-50 '>CountDown To The Next Bitcoin Halving</p>
              <p className='py-4 text-gray-300'>// Next Halving, and some charts to explain the effect of halving on BTC price</p>
          </div>
      </header >
      <div className='max-w-[70%] ml-[15%] mx-auto p-4 flex text-center flex-col justify-center w-full h-full'>
      <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8"> 
       <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
          <span className='text-8xl  text-[#7692e6]'>{remainingTime.days}</span><br></br>
          <span id="hi">Days</span>
        </div>
        <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
          <span className='text-8xl  text-[#7692e6]'>{remainingTime.hours}</span><br></br>
          <span id="hi">Hours</span>
        </div>
        <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
          <span className='text-8xl  text-[#7692e6]'>{remainingTime.minutes}</span><br></br>
          <span id="hi">Minutes</span>
        </div>
        <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
        <span className='text-8xl  text-[#7692e6]'>{remainingTime.seconds}</span><br></br>
        <span id="hi">Seconds</span>
        </div>
        <div className="shadow-md bg-[#0a192f] shadow-[#040c16] hover:scale-110 duration-500 hover:shadow-[#53d8e96c]">
        <span className='text-8xl  text-[#7692e6]'>{remainingTime.milliSeconds}</span><br></br>
        <span className='text-white text-3xl'>MS</span>
        </div>
      </div>
      </div>
      
      <h2 className="text-[50px] mt-40 text-pink-50 max-w-[70%] ml-[15%]">So, What is Bitcoin halving?</h2>
      {/* <p className="btc-i">
        <p className="p">Block halving events happen every 4 years or 210,000 blocks on Bitcoin blockchain. Bitcoin's initial block reward was 50 BTC.<br></br> The current block reward is 6.25 BTC, the next block reward will be 3.125 BTC. This lowers the rate at which Bitcoins are <br></br>generated. The halving is periodical and is programmed into Bitcoin's code.</p>
        <li className="hello_1">A Bitcoin halving event occurs when the reward for mining Bitcoin transactions is cut in half.</li>
        <li className="hello_1">Halvings reduce the rate at which new coins are created.</li>
        <li className="hello_1">Previous halvings have correlated with intense boom and bust cycels</li>
        <li className="hello_1">Bitcoin last halved on May 11, 2020, resulting in a block reward of 6.25 BTC.</li>
        <li className="hello_1">The final halving will be in 2140 with the maximum supply of 21 million.</li>
        
      </p> */}
      <p className='text-[25px] text-blue-300 max-w-[70%] ml-[15%] '>In simple words, bitcoin halving event is the event where the reward of bitcoin minners is cut in half<br></br>
      and this event usually takes place every 4 Years -apporxemtly-, and it historiclly has been a market rally trigger!<br></br>
      </p>
      <p className='text-[18px] text-gray-400 max-w-[50%] ml-[25%] mt-16 text-left'>
        <br></br>
        So bitcoin has a tottal supply of <xo className='text-white'>21,000,000 Bitcoins</xo>, meaning that there will only ever be 21M bitcoins in existense!<br></br>
        and we as well know from the quiz we took earlier that bitcoin is minned by super computers, these minners
        are paid in bitcoins, at the very beggining in <xo className='text-white'>2009</xo> these minners used to get rewarded with <xd className='text-yellow-200'>50</xd> bitcoins (around 800K$ at current price of 16K).<br></br><br></br>
        a couple of years later first halving happend in <xo className='text-white'>2013</xo> and the reward became <xd className='text-yellow-200'>25</xd> bitcoins,
        it stayed that way for more 4 years until year <xo className='text-white'>2016</xo> where the second halving took place and reward became <xd className='text-yellow-200'>12.5</xd> bitcoins,
        the halving after that took place in may <xo className='text-white'>2020</xo>, and the minners reward became <xd className='text-yellow-200'>6.25</xd> bitcoins, and it will stay that way until year <xo className='text-white'>2024</xo> where the reward will become <xd className='text-yellow-200'>3.125</xd> bitcoins.<br></br>
      </p>
      <p className='text-[15px] text-gray-500 max-w-[50%] ml-[25%] mt-16 text-left mb-[-2%]'>
        in the following chart we can see the drop in bitcoins's reward on each halving event:
      </p>

      
    </div>  
  );
}

export default CountdownTimer;