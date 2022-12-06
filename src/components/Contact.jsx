import React from 'react'
import './Test.css'
const Contact = () => {
  return (
    <div id="test" name='contact' className='max-w-[1000px] mx-auto p-4 flex text-center flex-col justify-center w-full h-full text-gray-200 mt-[30rem] mb-[5rem]'>
           <footer className="footer mt-[6%] text-[#15243f]">'</footer>
        <form method='POST' action="https://getform.io/f/2be8b080-f018-4e2b-8308-0eefd4b282dc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-center font-bold inline border-b-4 border-pink-600'>Contact</p>
                <p className='text-gray-300 py-4 '>// make sure to type in your e-mail adress in the right section </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact