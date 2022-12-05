import React, {useState} from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import World from '../assets/111.png'
import CardDemo from './Cards';
const Home = () => {
  
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
 
  return (
    <div name='home' className='w-full h-screen bg-[#15243f]'>
      {/* Container */}
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <div className='mt-1'>
        <p className='text-pink-600'>Hi, my name is</p>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] '>
          Mishaal Odeh
        </h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>
          A Web Developer
        </h2>
        
        <p className='text-[#8892b0] py-4 max-w-[750px]'>
          i am front-end dev. who's goal is to become a full stack and a react native dev. before Dec. 2023 
          <br></br> after expanding my knowldge in React, i will start learning Django to become a full stack<br></br>then React Native will be my next destenation..

        </p>
        {/* <div>
          <img className='overflow-hidden w-[20%] h-[50%] mx-auto mt-1 fixed top-[10rem]  right-6' src={World}  />
        </div> */}
        </div>
        
        <div>
        
        
          
       
      
          <button className='text-white group border-2 px-1 py-1 my-2 flex items-center hover:border-pink-600'>
          
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            My Skills
          </Link>
           
            
            <span className='group-hover:rotate-90 duration-300 group-hover:text-pink-600 '>
              <HiArrowNarrowRight className='ml-3 ' />
              
            </span>
          </button>
          
        </div>
   
      </div>
      
    </div>
  );
};

export default Home;
