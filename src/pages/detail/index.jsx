import React, { useState, useEffect } from "react";
import LinkFilm from "./LinkFilm";
import ReadMore from "./ReadMore";
import Rows from "./Rows";
import TypeFilm from "./TypeFilm";


const yearFilm = [
  {
    name: "C13",
  },
  {
    name: 2022
  },
  {
    name: "11 Episodes",

  }
]

const Detail = () => {
  return (
    <>
      <div className="text-white mx-16 pt-16">
        <div className="absolute w-full top-0 right-0 -z-10 flex justify-end">
          <div className="flex-1 bg-[#1e293b]"></div>
          <div className="relative">
            <img className="h-[740px]" src="/assets/1.jpg" alt="banner" />
            <div className="absolute w-[52%] h-full top-0 left-0 overlay-left"></div>
            <div className="absolute w-full h-[36%] bottom-0 left-0 overlay-bottom"></div>
          </div>
        </div>
        <h2 className="font-bold text-3xl mt-8">BORUNO-NARUTO NEXT<br /> GENERATIONS-</h2>
        <button className="bg-orange-500 font-medium px-2 rounded mt-3 mb-2">SPACE Only</button>
        <div className="flex font-medium text-l my-2">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00dc5a" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <p className="ml-1 mr-3 font-bold text-[#00dc5a] ">9.5</p>
          </div>
          {
            yearFilm.map((value, index) => (
              <div key={index} className="flex">
                <div className="w-px h-5 mx-2 border-1 text-gray-500 border-slate-500 bg-slate-500"></div>
                <div>
                  <p className="text-white ml-2 mr-3 font-normal">{value.name}</p>
                </div>
              </div>

            ))
          }
        </div>
        <div>
          <TypeFilm />
        </div>
        <div className="bg-amber-300 flex rounded py-2 w-[17%] mt-4 justify-center px-1 hover:bg-amber-200 hover:cursor-pointer">
          <img className="h-[25px]" src="https://u8.iqiyipic.com/intl_lang/20220808/4a/da/intl_lang_4359cf5b48d4acc7ad03c313218b_default.png" alt="" />
          <p className="text-black font-bold text-center ml-1">First month only 12,000đ</p>
        </div>
        <div>
          <p className="text-[#A9A9AC] mt-4">Director: <button className="text-white hover:text-[#00dc5a] hover:cursor-pointer">Hwang Da-Seul,Huang Da Se</button></p>
        </div>
        <div>
          <p className="text-[#A9A9AC] mt-4">Cast: <button className="text-white hover:text-[#00dc5a] hover:cursor-pointer">Eun Bin Kang, Hyuk Jun Cho</button></p>
        </div>
        <div>
          <ReadMore>
            K-drama "Blueming" is a drama adaptation based on BL manhwa produced by MOVIE & NEW and KENAZ Comics. "Blueming" is adapted from KENAZ Comics' popular manhwa "Who Can Define Popularity?" It talks about the Cha Siwon who managed everything well just to gain unanimous popularity, meeting Hyeong Da Un who is born with an aura that attracts popularity, causing his popularity to slide. This is the campus romance between the two film students. Cha Siwon (played by Kang Eun Bin) has always been mocked for being ugly growing up. Thanks to that, he is determined to change himself. After growing up, he became a handsome young lad who is very conscious of his popularity, and hope that he can get everyone's attention at any time. After entering university, he thought he would become the absolute popularity king, but what he was met with, was the real popularity king–Hyeong Da un who has it all from visuals, personality, family background, and even studies. This drama is directed by Hwang Dasol ("Where Your Eyes Linger," "To My Star").
          </ReadMore>
        </div>
        <div>
          <LinkFilm />
        </div>
        <div>
          <Rows />
        </div>
      </div>
    </>
  );
};

export default Detail;
