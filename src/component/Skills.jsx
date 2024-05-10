import React from 'react'
import skill from "../assets/skill.png"
import { javascript } from '../assets'
import { experienceList, skillList } from '../constant'

const Skills = () => {
  return (
    <section className='w-screen px-2 pt-[400px] md:pt-[180px]' id='skills'>
    
    <div className='w-full flex items-center gap-5 md:justify-center'>
    <img src={skill} alt="" className='w-[100px] h-[100px]' />
      <div className='flex flex-col md:flex-row md:gap-2'>
      <h1 className='text-[40px]'>Skills & </h1>
      <h1 className='text-[40px] text-purple-500'>Experties</h1>
      </div>
    </div>


    <div className='w-screen flex flex-col px-4 py-4 md:flex-row md:px-20 '>
    {/* icon untuk skill */}
    <div className='w-full md:w-[50%] flex flex-wrap py-5 md:px-12 md:gap-12 justify-center items-center gap-2'>

      {skillList.map((item, index)=>(
        <div className='bg-slate-100 rounded-full px-2 py-2 flex justify-center items-center mt-4 group hover:w-[90px] cursor-pointer'>
          <img src={item.icon} className='w-[60px] group-hover:w-[90px]' alt="" />
        </div>
      ))}
    </div>
    
    {/* Experience */}
    
      
    <div className='w-full md:flex-1 md:py-12 md:px-20 px-5 py-2 flex flex-col gap-4 pt-3'>
    {
      experienceList.map((item, index)=>(
        <div className=' flex gap-5'>
          <div className='font-bold text-[18px]'>{item.years}</div>
          <div className='flex flex-col'>
          <h1 className='font-bold text-[18px]'>{item.position}</h1>
          <span className='text-[18px] text-opacity-60 text-black'>{item.company}</span>

          </div>

        </div>
      ))
    }

    </div>



    </div>








    </section>
  )
}

export default Skills