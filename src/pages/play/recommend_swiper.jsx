import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const My_Recommend = () => {
  const data = [
    {
      image:
        "https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1_260_360.webp",
      filmName: "One Piece",
      totalEpisode: "1036 Episodes",
      status: "On Going",
    },
    {
      image:
        "https://pic9.iqiyipic.com/image/20210812/10/4d/a_100464174_m_601_en_260_360.webp",
      filmName: "Naruto",
      totalEpisode: "104 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
      filmName: "JUJUTSU KAISEN",
      totalEpisode: "24 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201031/64/01/a_100426612_m_601_en_260_360.webp",
      filmName: "Haikyu!!TO THE TOP",
      totalEpisode: "25 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic3.iqiyipic.com/image/20220120/ad/28/a_100477763_m_601_en_m3_260_360.webp",
      filmName: "Haikyu!! Second Season",
      totalEpisode: "25 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic0.iqiyipic.com/image/20210317/01/b3/a_100448836_m_601_en_260_360.webp",
      filmName: "One Punch Man",
      totalEpisode: "24 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20210309/ac/33/a_100449112_m_601_en_260_360.webp",
      filmName: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      totalEpisode: "26 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201225/d5/93/a_100432281_m_601_zh-CN_m1_260_360.webp",
      filmName: "Dragon Ball Super",
      totalEpisode: "131 Episodes",
      status: "Completed",
    },
    
  ];

  return (
    <div className="khung-slider flex items-center mt-2">
      <div className="_prevPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <Swiper
        slidesPerView={6}
        navigation={{
          nextEl: "._nextPage",
          prevEl: "._prevPage",
          disabledClass: "opacity-25 cursor-not-allowed",
          enabled: true,
        }}
        spaceBetween={15}
        modules={[Navigation]}
        className="mySwiper text-sm font-bold leading-2 pt-[10px] px-[10px]"
      >
        {data.map((value, index) => {
          let classes = "w-1/2 focus:cursor-pointer hover:text-green-500 relative";
          let test = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-150";

          return (
            <SwiperSlide key={index}>
              <div className={test}>
                <a href="#" className={classes}>
                  <div className="relative">
                      <img src={value.image} alt="" className="rounded-md"/>
                      
                      <button>
                        <svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <circle id="bg" fill="#1CC749" cx="30" cy="30" r="30"></circle>
                            <path d="M35.7461509,22.4942263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.25 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.7538491,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.662176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z" fill="#FFFFFF" transform="translate(33.250000, 30.000000) rotate(-270.000000) translate(-33.250000, -30.000000) "></path>
                          </g>
                        </svg>
                      </button>

                      <button>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <path d="M14.2480754,6.37211316 L20.9452998,16.4179497 C21.4048285,17.1072427 21.2185677,18.0385468 20.5292747,18.4980754 C20.2828734,18.662343 19.9933618,18.75 19.6972244,18.75 L6.30277564,18.75 C5.47434851,18.75 4.80277564,18.0784271 4.80277564,17.25 C4.80277564,16.9538625 4.89043268,16.664351 5.0547002,16.4179497 L11.7519246,6.37211316 C12.2114532,5.68282013 13.1427573,5.49655933 13.8320503,5.95608802 C13.9968287,6.0659403 14.1382232,6.20733473 14.2480754,6.37211316 Z" fill="#FFFFFF" transform="translate(13.000000, 11.625000) rotate(-270.000000) translate(-13.000000, -11.625000) "></path>
                          </g>
                        </svg>
                      </button>

                      <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black rounded-b-md"></div>
                      <span className="absolute text-white font-medium bottom-1 w-full text-center line-clamp-1">{value.totalEpisode}</span>
                  </div>
                  
                  <h2 className="mt-2 line-clamp-2">{value.filmName}</h2>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="_nextPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default My_Recommend;
