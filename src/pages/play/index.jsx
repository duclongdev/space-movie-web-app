import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import My_Swiper from "./swiper";
import My_Recommend from "./recommend_swiper"

import { useState } from "react";
import ShowMore from "./showMore"; 
import "./style.css"
import TopList from "./topList";
import Comments from "./comments";
import TitleBar from "./titleBar";

const Play = () => {
  const [showMore, setShowMore] = useState(false);

  const episode = "Episode";

  return (
    // <div className="bg-slate-900">Play</div>

    <div className="container mx-auto pt-4">
      <div className="grid grid-cols-4 gap-5 mb-4">
        <div className="col-span-3">
          <video width="100%" height="100%" controls>
            <source src="" type="video/mp4" />
          </video>
        </div>

        {/* khung episode */}
        <div>
          <a
            href=""
            className="no-underline my-4 font-bold uppercase text-xl hover:text-green-500 block dark:text-white">
            BORUTO-NARUTO NEXT GENERATIONS
          </a>

          <h2 className="items-center text-center dark:text-white">
            <span className="font-bold text-lg">Episodes</span>
          </h2>

          <My_Swiper />
        </div>

        <div className="information col-span-3 dark:text-white">
          <TitleBar filmName="BORUTO-NARUTO NEXT GENERATIONS" episodes={episode + " 1"}/>
          
          <div className="flex font-medium text-l mt-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00dc5a" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <p className="font-bold text-[#00dc5a] mr-1">9.5</p>
            
            <span className="mr-1">(71.7k ratings)</span>
            <span className="mr-1 text-gray-500">•</span>
            <span className="text-green-500">Rate now</span>
          </div>

          <div className="flex">
            <div className="flex text-l mt-[14px] items-center font-semibold">
              <span className="bg-[#00dc5a] px-1 rounded-l"> TOP 8</span>
              <span className="bg-gray-400 rounded-r px-1">Hot Anime</span>

              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold">C13</p>
              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold">2021</p>
              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold mr-4">Updated to 246</p>
            </div>

            <div className="read-more-read-less w-[38%] mt-[14px]">
                <button className='font-semibold flex items-center hover:text-[#00dc5a]' onClick={() => setShowMore(!showMore)} >
                    <span>
                        {showMore ? 'Collapse' : 'More'}
                    </span>
                    <svg transform={showMore ? 'scale(1,-1)' : undefined} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
          </div>

          <ShowMore showMore={showMore}>
            With peace and modernization, the residents in the ninja village, Konoha, is increasing, and the lifestyle of ninjas is changing constantly. Boruto, the son of Naruto Uzumaki, the seventh leader of the village, studies at the Ninja Academy where he meets his new team partners. How will they fight against the mysterious incidents in the village? The story of Boruto Uzumaki that sweeps everyone's heart like a gust of wind begins now!
          </ShowMore>
          <hr className="mt-[16px] mb-6 dark:border-gray-400"/>

          <h2 className="text-[22px] font-bold">Recommended</h2>
          
          <My_Recommend />

          <hr className="mt-7 mb-6 dark:border-gray-400"/>
          <h2 className="text-[22px] font-bold">5 Comments</h2>

          {/* input comment */}
          <div className="flex pt-6 pb-1">
            <img src="https://www.iqiyipic.com/common/fix/headicons/male-130.png" alt="" className="flex rounded-[50%] w-10 h-10 mr-[12px]"/>

            <div className="w-full border rounded relative hover:border-green-500 dark:border-gray-400">
              <div className="px-[12px] pt-[12px] pb-[30px]">
                <textarea placeholder="Post a comment" cols="1" rows="1" className="resize-none bg-none h-9 w-full dark:bg-slate-800"></textarea>
              </div>
              <span className="absolute right-3 bottom-2 text-xs text-gray-500 ">0/280</span>
            </div>
          </div>

          <Comments />
        </div>

        <div>
          <h2 className="text-2xl text-gray-500 font-medium text-center dark:text-gray-300">Top 10 Anime</h2>
          <TopList />
        </div>


      </div>
    </div>
  );
};

export default Play;
