import React from "react";
import OnePiece from "../../assets/image/OnePiece.png";
import Boruto from "../../assets/image/Boruto.png";
import Spy from "../../assets/image/SpyX.png";
import Bleach from "../../assets/image/Bleach.png";
import Naruto from "../../assets/image/Naruto.png";
import Eminence from "../../assets/image/Eminence.png";
import hot from "../../assets/image/flame.png";
import latest from "../../assets/image/new.png";
import star from "../../assets/image/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import './scrollbar.css'

import "swiper/css/scrollbar";

export default function RankPage({ callback }) {
  const data = [
    {
      image: Boruto,
      title: "Boruto the next generation",
      author: "Masashi Kishimoto",
      genre: "Adventure | Action",
      currentEps: "2/277",
      content:
        'The village hides under the leaves - the village of Leaves, which has progressed to modernization in peace. Boruto, son of Naruto Uzumaki, Hokage the Seventh, enrolled in Ninja Academy, a school that nurtured and trained ninjas. How will you meet your friends and challenge them when the mystery breaks out? The story of "Boruto Uzumaki" touching your heart like a wind will begin now!!',
    },
    {
      image: Naruto,
      title: "Naruto Shippuden",
      author: "Masashi Kishimoto",
      genre: "Adventure | Action",
      currentEps: "380/500",
      content:
        "In Konoha, where the stones on Tsunade's face were increasing, the Konoha Legion, which had evolved into a Shinobi, was busy with a D-rank mission under Ebisu's charge. Dolphins laugh Face is like the shape of Naruto in the past... Naruto Uzumaki himself has grown a lot after a long journey through the Konoha gate! A fierce battle between the Naruto mobs and the mysterious organization \"Akatsuki\" of the S-rank offender has begun!",
    },
    {
      image: OnePiece,
      title: "One Piece",
      author: "Oda Eiichiro",
      genre: "Adventure | Action",
      currentEps: "2/277",
    },
    {
      image: Spy,
      title: "SPY×FAMILY",
      author: "Tatsuya Endo",
      genre: "Comedy | Action",
      currentEps: "2/10",
    },
    {
      image: Eminence,
      title: "Eminence In Shadow",
      author: "Daisuke Aizawa",
      genre: "Dark fantasy | Isekai",
      currentEps: "2/8",
    },
    {
      image: Bleach,
      title: "Bleach: Thousand-year Blood War",
      author: "Tite Kubo",
      genre: "Adventure | Action",
      currentEps: "5/7",
    },
    {
      image: Bleach,
      title: "Bleach: Thousand-year Blood War",
      author: "Tite Kubo",
      genre: "Adventure | Action",
      currentEps: "5/7",
    },
  ];

  return (
    <div className="overflow-y-auto flex-1">
      <div className="col-span-8 mr-2">
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <img src={hot} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Hot this week</h4>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}   
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}   
          >
            {data.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#2D2E37] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
                >
                  <img
                    src={value.image}
                    className="rounded-t-lg h-[160.86px] w-full"
                    alt=""
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-xl line-clamp-1">
                      {value.title}
                    </h4>
                    <p className="text-base text-[#F9E492]">{value.author}</p>
                    <p className="text-base">{value.genre}</p>
                    <div className="flex text-base">
                      <p className="mr-1">Current episode:</p>
                      <p className="text-[#F9E492]">{value.currentEps}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2 space-x-1">
            <img src={latest} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Latest Lists</h4>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}   
            modules={[Scrollbar]}           
          >
            {data.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#272831] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
                >
                  <img
                    src={value.image}
                    className="rounded-t-lg h-[160.86px] w-full"
                    alt=""
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-xl line-clamp-1">
                      {value.title}
                    </h4>
                    <p className="text-base text-[#F9E492]">{value.author}</p>
                    <p className="text-base">{value.genre}</p>
                    <div className="flex text-base">
                      <p className="mr-1">Current episode:</p>
                      <p className="text-[#F9E492]">{value.currentEps}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2 space-x-1">
            <img src={star} alt="" className="w-7 h-7" />
            <h4 className="text-white text-2xl font-semibold">Most Views</h4>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}   
            modules={[Scrollbar]}   
          >
            {data.map((value, index) => {
              return (
                <SwiperSlide
                  className="rounded-lg bg-[#2D2E37] text-white hover:bg-[#4E4D54]"
                  key={index}
                  onClick={() => callback(value)}
                >
                  <img
                    src={value.image}
                    className="rounded-t-lg h-[160.86px] w-full"
                    alt=""
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-xl line-clamp-1">
                      {value.title}
                    </h4>
                    <p className="text-base text-[#F9E492]">{value.author}</p>
                    <p className="text-base">{value.genre}</p>
                    <div className="flex text-base">
                      <p className="mr-1">Current episode:</p>
                      <p className="text-[#F9E492]">{value.currentEps}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
