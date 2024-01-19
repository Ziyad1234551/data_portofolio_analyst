import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay } from 'swiper/modules';

export const Testimonial = () => {
    const testimonials = [
        {
            quote:"Saya sangat beruntung dapat bekerja bersama Ziyad sebagai Data Analyst. Keahliannya dalam menganalisis data sangat luar biasa. Ziyad memiliki kemampuan untuk mengubah data mentah menjadi wawasan yang dapat diimplementasikan. Ke telitiannya dan keterampilan analitisnya sangat berperan dalam pengambilan keputusan berbasis data di tim kami. Komitmen Ziyad terhadap hasil yang optimal dan pendekatannya yang kolaboratif menjadikannya aset yang tak ternilai bagi organisasi yang mengandalkan data.",
            name:"John Doe",
            img:"3.jpg"
        },
        {
            quote:"Ziyad adalah seorang Data Analyst yang luar biasa dengan kemampuan memahami pola dan tren secara mendalam. Selama bekerja sama, ia menunjukkan pemahaman yang mendalam terhadap metode statistik dan teknik manipulasi data. Keistimewaan Ziyad bukan hanya pada kecakapan teknisnya, tetapi juga kemampuannya untuk menyampaikan temuan yang kompleks dengan cara yang jelas dan ringkas. Kecekatan analitis dan dedikasinya menjadikan Ziyad sebagai profesional yang luar biasa di bidang analisis data.",
            name:"Jonathan ",
            img:"2.jpg"
        },
        {
            quote:"Sangat menyenangkan bekerja bersama Ziyad, seorang Data Analyst yang sangat terampil dan berdedikasi. Kemampuannya untuk mengubah data mentah menjadi wawasan yang bermakna sangat berkontribusi pada keberhasilan proyek-proyek kami. Ziyad secara konsisten memberikan yang terbaik dalam memastikan akurasi dan kehandalan analisisnya. Pendekatannya yang proaktif dan semangatnya dalam menghadapi tantangan menjadikannya anggota tim yang tak tergantikan. Saya sangat merekomendasikan Ziyad atas keterampilan analitisnya yang luar biasa dan integritas profesionalnya." ,
            img:"1.jpg",
            name:"Dian Setiawan"
        }

    ]
  return (
    <div data-aos="fade-left">
        <h1 className='text-center text-[55px] font-bold text-blue-700'>Testimonial</h1>

        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full flex justify-center items-center h-[100vh]"
      >
        {testimonials.map((testi)=>{
            return(

                <SwiperSlide className='w-full h-full flex justify-center items-center'>
                    <div className='w-[900px]  bg-white py-10 h-[590px] shadow-lg px-8'>
                        <img src={testi.img} className='w-[140px] h-[140px] object-cover mx-auto rounded-full border-[2px] border-white' alt="" />
                        <h1 className='text-center my-2 font-bold font-sans text-4xl'>{testi.name}</h1>
                        <div className="flex justify-center my-2">

                        <FaQuoteLeft className='text-blue-700 block text-5xl text-center'/>
                        </div>
                        <p className="text-center text-[14px] text-gray-700 leading-9 font-light">{testi.quote}</p>

                    </div>
                </SwiperSlide>
            )
        })}
       
      </Swiper>
  
    </div>
  )
}
