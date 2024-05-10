import React, { useEffect, useState } from 'react'
import logo from '../assets/R.png'
import {Link} from 'react-scroll'

import{FaBars, FaTimes} from "react-icons/fa"


const Navbar = () => {

  let Menu = [
    {
      nama : "Home",
      link : "/" 
    },
    {
      nama : "About Me",
      link : "/About"
    },
    {
      nama : "Skill",
      link : "/Skills"
    },
    {
      nama : "Contact",
      link : "/Contact"
    }
  ];
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!isMenuOpen);
  }
  const [scroll, setScroll] = useState(false);

  useEffect(()=>{
    const handlerScroll = ()=>{
      if (window.scrollY>0){
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () =>{
      window.removeEventListener("scroll", handlerScroll);
    }

  })
  return (
    <nav className={`${scroll ? "bg-blue-100 text-purple-500 lg:-top-[10px]": "top-0"} h-24 w-screen flex md:px-16 px-8 fixed z-50 bg-white border-b`}>
        <menu className=' w-full flex items-center relative'>        
        <div className='flex flex-1'>
        <div className='w-9 h-9'>
         <a href="/"> <img src={logo} alt="" /> </a> 
        </div>  
         <h1 className='text-xl font-extrabold cursor-pointer'>Afi</h1>
        </div>
          
          
           <div className='flex flex-1 gap-5 justify-center'> 
            <ul className='hidden md:flex'>
            {Menu.map((m)=>(
              <li className='ml-8 text-lg '>
                <a href={m.link} className='hover:text-purple-600 duration-500'>{m.nama}</a>

              </li>
            ))}

            </ul>

            </div>
       

            <div className='md:hidden text-2xl'>
            {isMenuOpen?
            (<FaTimes onClick={toggleMenu}/>)
            :
            (<FaBars onClick={toggleMenu}/>)}
            </div>

          <div className={`${isMenuOpen? "flex flex-col " : " hidden"} px-5 py-2 gap-2 pt-5 md:hidden absolute top-24 right-0 w-52 h-auto bg-white shadow-lg`}>


            <ul className=''> 
            <li className='flex flex-col'>    
                {Menu.map((link)=>{
                    return(
                        <Link to={link.id} key={link.id} className="hover:text-orange cursor-pointer text-md md:text-md py-3">
                            {link.nama}
                        </Link>
                    );  

                })}
            </li>
        </ul>
              </div>
           
        </menu>
    </nav>
  )
}

export default Navbar