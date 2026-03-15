import React from 'react'
import skill from "../assets/skill.png"
import { experienceList, skillList } from '../constant'

const Skills = () => {
  return (
    <section className='w-screen mt-12 px-2 pt-[500px] md:pt-[180px]' id='skills'>
      
      {/* Section Title */}
      <div className='w-full flex items-center gap-5 md:justify-center'>
        <img src={skill} alt="skills" className='w-[100px] h-[100px]' />
        
        <div className='flex flex-col md:flex-row md:gap-2'>
          <h1 className='text-[40px] font-semibold'>Skills &</h1>
          <h1 className='text-[40px] font-semibold text-purple-500'>Expertise</h1>
        </div>
      </div>

      <div className='w-screen flex flex-col px-4 py-4 md:flex-row md:px-20'>
        
        {/* Skills Icons */}
        <div className='w-full md:w-[50%] flex flex-wrap py-5 md:px-12 md:gap-8 justify-center items-center gap-4'>
          {skillList.map((item) => (
            <div
              key={item.id}
              className='bg-slate-100 rounded-2xl px-4 py-4 flex flex-col justify-center items-center mt-4 w-[100px] h-[100px] shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer group'
            >
              <i className={`${item.icon} text-5xl group-hover:scale-110 transition-all duration-300`}></i>
              <span className='text-[12px] mt-2 font-medium text-gray-700 text-center'>
                {item.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Experience */}
      <div className='w-full md:flex-1 md:py-12 md:px-20 px-5 py-2 flex flex-col gap-6 pt-3'>
  {experienceList.map((item) => (
    <div
      key={item.id}
      className='flex gap-5 border-l-4 border-purple-500 pl-4'
    >
      <div className='font-bold flex flex-col text-[18px] text-purple-600 min-w-[90px]'>
        <span>{item.from}</span>
        <span>{item.to}</span>
      </div>

      <div className='flex flex-col'>
        <h1 className='font-bold text-[18px]'>{item.position}</h1>
        <span className='text-[16px] text-gray-500'>{item.company}</span>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  )
}

export default Skills