import React from 'react'
import wave from "../assets/wave.svg"
import laptop from "../assets/laptop.png"
import { aboutSection } from '../constant'

const About = () => {
  return (
    <div id='about' className='w-screen h-[350px] bg-[#7c3aed]'>
      <img src={wave} alt="wave" />

      <div className='w-screen h-full relative'>
        <div className='w-full h-full z-20 flex justify-center gap-2 absolute md:top-[-50px]'>
          <h1 className='text-[40px] text-white'>ABOUT</h1>
          <h1 className='text-[40px]'>ME</h1>
        </div>

        <div className='w-full h-full flex justify-center pt-16 md:pt-5'>
          <span className='text-center w-[300px] text-white'>
            I am a Frontend Developer who is passionate about creating modern,
            responsive, and user-friendly web interfaces. I enjoy turning ideas
            into interactive digital experiences using React, JavaScript, and
            Tailwind CSS.
          </span>
        </div>

        <img
          src={laptop}
          className='w-[150px] md:w-[300px] absolute top-[-130px] md:top-[-170px]'
          alt="laptop"
        />

        <div className='w-full h-[200px] z-30 flex flex-wrap justify-center md:gap-5 gap-10 absolute -bottom-[180px] md:bottom-[-30px]'>
          {aboutSection.map((item, index) => (
            <div
              key={index}
              className='group w-[250px] flex justify-center flex-col items-center rounded-md bg-white md:hover:bg-[#7c3aed]'
            >
              <img
                src={item.image}
                alt={item.title}
                className='w-[220px] rounded-lg h-[150px] object-cover'
              />
              <h1 className='text-[12px] md:group-hover:text-white w-[220px] text-center'>
                {item.desc}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About