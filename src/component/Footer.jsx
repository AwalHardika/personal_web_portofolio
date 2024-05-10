import React from 'react'
import { facebook, instagram, linkedln, youtube } from '../assets'

const Footer = () => {
  return (
    <div className='w-screen h-[300px] mt-12 flex justify-center items-center flex-col bg-slate-300'>
    
    <div className='w-full flex gap-4 justify-center'>
    <img src={facebook} alt="" />
    <img src={linkedln} alt="" />
    <img src={instagram} alt="" />
    <img src={youtube} alt="" />
    </div>
    <h1>Copyright by Awal Rafi Hardika @2023</h1>
      


    </div>
  )
}

export default Footer