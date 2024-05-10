import React, { useEffect, useState } from 'react'
import robot from "../assets/robo.png"
import { portofolio } from '../constant';
const Portofolio = () => {


const[menuAktif, setMenuActive] = useState("All");

function toggleMenuAktif(item){
setMenuActive(item)
}

const [portofoList, setPortoFolioList] = useState([]);

const [portofolioListOrg, setPortoFolioOrg] = useState([]);

useEffect(()=>{
  setPortoFolioList(portofolio);
  setPortoFolioOrg(portofolio)
}, [])

function filterPortofolio(type){
if(type=="All"){
setPortoFolioList(portofolioListOrg);
}
else {
  const result = portofolioListOrg.filter(item => item.type ==type);
  setPortoFolioList(result)
  console.log(result)
}
}





  return (
    <div className=' flex flex-col pt-5  ' id='portofolio'>
    {/* Judul Section */}
    <div className='flex justify-center md:gap-4'>
    <div className='flex md:flex-row flex-col'>
    <h1 className='text-[40px]  font-semibold'>My Creative </h1>
    <h1 className='text-[40px] font-semibold text-purple-600'>Portofolio</h1>
    </div>
    <img src={robot} className='w-[100px] h-[140px] animate-bounce' alt="" />
    </div>

    {/* membuat menu skill porto */}
    <div className='flex flex-wrap px-10 gap-4 justify-center'>
      <button onClick={()=>filterPortofolio("All")} className='px-6 py-4 flex justify-center items-center border-2 border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white uppercase  focus:text-white focus:ring-violet-300 focus:bg-purple-600 focus:ring' > All </button>

      <button onClick={()=>filterPortofolio("ui/ux")} className='px-6 py-4 flex justify-center items-center border-2 border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white uppercase  focus:text-white focus:ring-violet-300 focus:bg-purple-600 focus:ring' > UI/UX Design </button>

      <button onClick={()=>filterPortofolio("frontend")} className='px-6 py-4 flex justify-center items-center border-2 border-purple-600 rounded-md text-purple-600 hover:bg-purple-600 hover:text-white uppercase  focus:text-white focus:ring-violet-300 focus:bg-purple-600 focus:ring' > UI Web Develop </button>

    <a href="#portofolio" onClick={() => toggleMenuAktif("coba")} className={`${menuAktif === "coba" ? "flex justify-center items-center px-2 py-2 bg-purple-600 text-white" : "flex justify-center items-center px-2 py-2 border-2 border-purple-600 text-purple-600"}`}>
    Coba
    </a>


    </div>
    <div className='flex w-screen flex-col md:gap-4 pt-8 gap-6 items-center md:justify-center lg:px-48 p-4 md:px-24 md:flex-wrap lg:flex-row'>
    
    {
      portofoList.map((item, index)=>(
        <div className='flex flex-col rounded-lg bg-purple-100 group  hover:scale-110 w-[200px] min-h-[320px] p-2 cursor-pointer' onClick={()=>window.open(item.projectUrl, "_blank")} >
        <img src={item.imageUrl} className='h-[180px] w-full object-cover rounded-lg ' alt="" />
      <div className='w-full flex flex-col justify-center md:px-4 pt-2 gap-2 '>
      <h1 className='text-[14px] font-bold text-center '>
        {item.title}
        </h1>
        <h1 className='text-[12px] text-gray-500 text-justify  '>{item.desc}</h1>
      </div>

        </div>
      ))
    }

    </div>

    </div>


  )
}

export default Portofolio