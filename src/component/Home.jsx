import React from 'react'
import Typewriter from 'typewriter-effect'
import {homeImage} from './../assets'
import './Home.css'
const Home = () => {
  
  return (
    <div className='pt-24 md:px-20 p-[20px] flex justify-between flex-col md:flex-row'>
      {/* Sisi Kiri */}
      <div className='flex w-full'>
         <div className='flex w-full flex-col items-start content-end'>
          <h1 className='text-[35px] md:text-[40px] font-bold'>Hello</h1>
          <div className='flex'>
            <h1 className='text-[30px] md:text-[40px] font-bold mr-2'>I am</h1>
            <h1 className='text-[30px] md:text-[40px] font-bold'>
            <Typewriter
            options={{
              strings : ["Awal Rafi H", "Frontend Dev", "UI UX Designer"],
              autoStart: true,
              loop: true,
            }}
            />
            </h1>
          </div>
          <div>
            <h1 className='my-5 text-gray-400'>Perkenalkan nama saya Awal Rafi Hardika, saya tertarik di bidang web development. Saya menguasai beberapa bidang seperti UI UX Designer dan FrontEnd Developer</h1>
          </div>
            <button className='bg-purple-600 p-2 rounded-md text-white hover:scale-125 duration-300 transition-all ease-in-out hover:z-50 '>
              Resume
            </button>
        </div>
      </div>
    {/* Sisi Kanan */}
    <div className='w-full flex justify-center'>
              <img src={homeImage} alt="" className='w-[200px] md:w-[300px]' />
    </div>
  </div>
  )
}

export default Home