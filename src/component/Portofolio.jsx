import React, { useEffect, useState } from 'react'
import robot from "../assets/robo.png"
import { portofolio } from '../constant'

const Portofolio = () => {
  const [activeMenu, setActiveMenu] = useState("All")
  const [portfolioList, setPortfolioList] = useState([])
  const [originalPortfolioList, setOriginalPortfolioList] = useState([])

  useEffect(() => {
    setPortfolioList(portofolio)
    setOriginalPortfolioList(portofolio)
  }, [])

  function filterPortfolio(type) {
    setActiveMenu(type)

    if (type === "All") {
      setPortfolioList(originalPortfolioList)
    } else {
      const result = originalPortfolioList.filter(item => item.type === type)
      setPortfolioList(result)
    }
  }

  function openProject(url) {
    if (url) {
      window.open(url, "_blank")
    }
  }

  return (
    <div className='flex flex-col pt-10' id='portofolio'>
      
      {/* Section Title */}
      <div className='flex justify-center items-center gap-4 px-4 text-center'>
        <div className='flex md:flex-row flex-col'>
          <h1 className='text-[36px] md:text-[40px] font-semibold'>My Frontend</h1>
          <h1 className='text-[36px] md:text-[40px] font-semibold text-purple-600 md:ml-2'>
            Portfolio
          </h1>
        </div>
        <img src={robot} className='w-[90px] h-[120px] animate-bounce' alt="robot" />
      </div>

      {/* Description */}
      <p className='text-center text-gray-500 max-w-2xl mx-auto px-6 mt-3'>
        Here are some of the frontend projects I have worked on, focused on
        building responsive, modern, and user-friendly web interfaces.
      </p>

      {/* Filter Menu */}
      <div className='flex flex-wrap px-10 gap-4 justify-center mt-8'>
        <button
          onClick={() => filterPortfolio("All")}
          className={`px-6 py-3 border-2 rounded-md font-medium transition-all duration-300 ${
            activeMenu === "All"
              ? "bg-purple-600 text-white border-purple-600"
              : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          }`}
        >
          All
        </button>

        <button
          onClick={() => filterPortfolio("frontend")}
          className={`px-6 py-3 border-2 rounded-md font-medium transition-all duration-300 ${
            activeMenu === "frontend"
              ? "bg-purple-600 text-white border-purple-600"
              : "border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
          }`}
        >
          Frontend Projects
        </button>
      </div>

      {/* Portfolio Cards */}
      <div className='flex w-full flex-col md:gap-6 pt-10 gap-6 items-center justify-center lg:px-40 p-4 md:px-20 md:flex-wrap lg:flex-row'>
        {portfolioList.map((item) => (
          <div
            key={item.id}
            onClick={() => openProject(item.projectUrl)}
            className='w-[260px] min-h-[340px] bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-pointer border border-purple-100'
          >
            <img
              src={item.imageUrl}
              className='h-[180px] w-full object-cover'
              alt={item.title}
            />

            <div className='p-4 flex flex-col gap-3'>
              <span className='text-xs font-semibold text-purple-600 uppercase tracking-wide'>
                {item.type}
              </span>

              <h1 className='text-[16px] font-bold text-gray-800'>
                {item.title}
              </h1>

              <p className='text-[13px] text-gray-500 leading-relaxed'>
                {item.desc}
              </p>

              <button className='mt-2 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition'>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portofolio