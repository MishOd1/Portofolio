import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaDiscord,
  FaGithubSquare,
} from 'react-icons/fa';
import CardDemo from './Cards';
import Logo from '../assets/Fin.png';
import { Link } from 'react-scroll';
import './Test.css'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[75px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo}   alt='Logo Image' style={{ width: '90px' }}  />
      </div>
     
      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link  to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='ToDo' smooth={true} duration={500}>
           To-Do List
          </Link>
        </li>
        <li >
          <Link to='Quiz' smooth={true} duration={500}>
            Quiz
          </Link>
        </li>
        <li >
          <Link to='Halving' smooth={true} duration={500}>
            Halving
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>






      







      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-999'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-5xl '>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='Todo' smooth={true} duration={500}>
            To-Do List
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='Quiz' smooth={true} duration={500}>
            Quiz
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='Halving' smooth={true} duration={500}>
          Halving
          </Link>
        </li>
        <li className='py-6 text-5xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className=' lg:flex fixed flex-col top-[33.3333333%] left-2'>
        <div className='hidden lg:flex'>
        <ul >
        <li className='w-[140px] h-[25px] flex justify-between items-center ml-[-100px] hover:ml-[-22px] duration-300 border-solid border-[5px] border-gray-400  border-y-transparent  bg-gray-700  hover:bg-[#333] '>
            <a
              className='flex justify-between items-center w-full text-gray-300 hover:text-gray-300'
              href='https://github.com/MishOd1'
            >
              GitHub <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[140px] h-[25px] flex justify-between items-center ml-[-100px] hover:ml-[-22px] duration-300 border-solid border-[5px] border-[#1d92f2]  border-y-transparent  bg-gray-700 hover:bg-[#1DA1F2] '>
            <a
              className='flex justify-between items-center w-full text-[#1DA1F2] hover:text-gray-300'
              href='https://twitter.com/MeshalOdah'
            >
              Twitter <FaTwitter size={25} />
            </a>
          </li>
          <li className='w-[140px] h-[25px] flex justify-between items-center ml-[-100px] hover:ml-[-22px] border-solid border-[5px] border-blue-600 border-y-transparent duration-300 bg-gray-700 hover:bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-blue-600 hover:text-gray-300'
              href='https://www.facebook.com/44a44'
            >
              Facebook <FaFacebookF size={25} />
            </a>
          </li>
          
      
          
          
        </ul>
        </div>
      </div>
      <div className='flex'>
      <CardDemo className="hello hidden" />
      </div>
    </div>
  );
};

export default Navbar;
