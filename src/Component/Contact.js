import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from 'react-icons/bs'

function Contact() {
  return (
    <div name='contact' className='bg-gradient-to-b from-black to-gray-500 w-full h-screen text-white'>
      <div className='max-w-screen-lg mx-auto p-4 justify-center w-screen h-full flex flex-col'>
        <div className=''>
          <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Contact</p>
          <p className='py-6 text-2xl'>Submit the form below to get in touch with me</p>
        </div>

        <div>
          <form className='flex flex-col w-2/4 mx-auto justify-center mt-10' action='https://getform.io/f/ec23a35c-e7b3-45d6-ba2a-b39927d65c94' method='POST'>
            <input placeholder='Enter your name' type='text' name='name' className='bg-transparent my-3 rounded-md text-white border-2 p-2 focus:outline-none'></input>
            <input placeholder='Enter your email' type='text' name='email' className='bg-transparent my-3 rounded-md text-white border-2 p-2 focus:outline-none'></input>
            <textarea rows={8} className='bg-transparent text-white border-2 p-2 rounded-md my-3 focus:outline-none' placeholder='Enter your message'></textarea>
            <button className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 text-white rounded-md w-max my-5 mx-auto hover:scale-110 duration-200'>Send</button>
          </form>
        </div>

        <div className='lg:hidden'>
        <p className='text-center'>Or</p>
        <div className='py-3'>
             <ul className='flex w-2/4 mx-auto justify-between'>
              <a href='https://linkedin.com/in/nishitasahajwani'><li className='cursor-pointer hover:scale-105 duration-200'><AiFillLinkedin size={30}/></li></a>
              <a href='https://github.com/NishitaSahajwani'><li className='cursor-pointer hover:scale-105 duration-200'><AiFillGithub size={30}/></li></a>
              <a href='mailto:nishitasahajwani1401@gmail.com'><li className='cursor-pointer hover:scale-105 duration-200'><AiFillMail size={30}/></li></a>
              <a href='/Resume.pdf'><li className='cursor-pointer hover:scale-105 duration-200'><BsFillPersonLinesFill size={30}/></li></a>
             </ul>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact