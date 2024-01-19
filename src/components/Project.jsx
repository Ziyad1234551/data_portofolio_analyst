import React from 'react';
import { Link } from "react-router-dom";
export const Project = () => {
  const portofolios = [
    {
      img:"excel.jpg",
      title:"Data Covid Menggunakan Excel",
      link:"https://github.com/Ziyad1234551/data_analyst/blob/main/excel/Data_Covid_Excel.xlsx"
    },
    {
      img:"excel.jpg",
      title:"Data Sales Menggunakan Excel",
      link:"https://github.com/Ziyad1234551/data_analyst/blob/main/excel/data_sales_excel.xlsx"
    },
    {
      img:"sql.jpg",
      title:"Data Kecelakaan Menggunakan SQL",
      link:"https://github.com/Ziyad1234551/data_analyst/tree/main/sql/Kecelakaan"
    },
    {
      img:"sql.jpg",
      title:"Data Youtube Menggunakan SQL",
      link:"https://github.com/Ziyad1234551/data_analyst/tree/main/sql/youtube"
    },
    {
      img:"python.jpg",
      title:"Data Sekolah Jakarta Menggunakan Python",
      link:"https://github.com/Ziyad1234551/data_analyst/tree/main/python/Data_Sekolah_Jakarta"
    },
    {
      img:"python.jpg",
      title:"Data Supermarket Menggunakan Python",
      link:"https://github.com/Ziyad1234551/data_analyst/tree/main/python/supermarket"
    },

    
  ]
  return (
    <div data-aos="fade-left" className='w-full  h-auto lg:my-10 my-2' id="project">
        <h1 className='decoration-blue-700 uppercase underline my-8 underline-offset-[30px] text-center text-3xl lg:text-[60px] font-bold'>Project</h1>
        <div className="grid grid-cols-1 justify-center lg:grid-cols-[400px,400px,400px] gap-4">
          {portofolios.map((porto)=>{
            return(
              <Link to={porto.link} className='w-[360px] mx-auto sm:block rounded-lg bg-white shadow-lg px-10 py-4 h-[400px]'>
                <img src={porto.img} className='w-full h-[180px] object-cover rounded-md cursor-pointer transition-all hover:scale-105' alt="" />
                <h1 className="text-center text-2xl font-bold">{porto.title} </h1>
                <div className="my-6 flex justify-center">
                <button className="bg-blue-600 text-white py-3 rounded-full w-[200px] mx-auto"> Lihat </button>
                   </div>
              </Link>
            )
          })}
        </div>

    </div>
  )
}
