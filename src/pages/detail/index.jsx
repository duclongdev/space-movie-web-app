import React, { useState, useEffect } from "react";
import ReadMore from "./ReadMore";
import Rows from "./Rows";

const Detail = () => {
  // const [animeData, setAnimeData] = useState([])

  // const getData = async () => {
  //   const res = await fetch(" https://api.jikan.moe/v4/anime?q=anime&sfw")
  //   const resData = await res.json()
  //   setAnimeData(resData.data)
  //   console.log(resData.data)
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <>
      <div className="text-white mx-16">
        <h2 className="font-bold text-3xl mt-8">Bluening</h2>
        <button className="bg-orange-500 font-medium px-2 rounded mt-3 mb-2">IQIYI Only</button>
        <div className="flex font-medium text-l">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00dc5a" className="w-5 h-5">
            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
          </svg>
          <p className="ml-1 mr-2 font-bold text-[#00dc5a] ">9.5</p>
          <div className="border-r-[4px] border-[#414247]"></div>
          <p className="ml-2 mr-3 font-normal">C13</p>
          <div className="border-r-[4px] border-[#414247]"></div>
          <p className="ml-2 mr-3 font-normal">2022</p>
          <div className="border-r-[4px] border-[#414247]"></div>
          <p className="ml-2 mr-3 font-normal">11 Episodes</p>
        </div>
        <div className="flex mt-2">
          <div>
            <p className="bg-gray-700 rounded px-1 font-normal">South Korea</p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">LGBT
            </p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">Romance
            </p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">Youth
            </p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">School Life
            </p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">Korean
            </p>
          </div>
          <div>
            <p className="bg-gray-700 rounded px-1 ml-3 font-normal">Contemporary
            </p>
          </div>
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
        <div className="flex">
          <button className="flex bg-[#00dc5a] w-[7%] justify-evenly rounded py-2 mt-5 font-bold hover:bg-green-400" >
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" ><g id="icon/Play" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M14.2480754,6.37211316 L20.9452998,16.4179497 C21.4048285,17.1072427 21.2185677,18.0385468 20.5292747,18.4980754 C20.2828734,18.662343 19.9933618,18.75 19.6972244,18.75 L6.30277564,18.75 C5.47434851,18.75 4.80277564,18.0784271 4.80277564,17.25 C4.80277564,16.9538625 4.89043268,16.664351 5.0547002,16.4179497 L11.7519246,6.37211316 C12.2114532,5.68282013 13.1427573,5.49655933 13.8320503,5.95608802 C13.9968287,6.0659403 14.1382232,6.20733473 14.2480754,6.37211316 Z" id="Triangle" fill="#FFFFFF" transform="translate(13.000000, 11.625000) rotate(-270.000000) translate(-13.000000, -11.625000) "></path></g></svg>
            <p>Play</p>
          </button>
          <button className="flex w-[12%] justify-evenly rounded py-2 mt-5 font-bold bg-gray-700 ml-3 hover:bg-gray-500">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="icon/Add" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M11.5,3 C11.7761424,3 12,3.22385763 12,3.5 L12,4.5 C12,4.77614237 11.7761424,5 11.5,5 L7,5 L7,18.864 L11.0397234,15.4985222 C11.5562588,15.068076 12.2898613,15.0373299 12.8374063,15.4062837 L12.9602766,15.4985222 L17,18.865 L17,14.5 C17,14.2238576 17.2238576,14 17.5,14 L18.5,14 C18.7761424,14 19,14.2238576 19,14.5 L19,19.9324792 C19,20.760901 18.3284325,21.4325168 17.5,21.4325168 C17.1992161,21.4325168 16.9066001,21.3420927 16.6593788,21.1748017 L16.5397234,21.0848111 L12,17.301 L7.4602766,21.0848111 C6.86363721,21.5820106 5.99503637,21.5375119 5.45180014,21.0056172 L5.34766808,20.8927558 C5.15511629,20.6616936 5.03722367,20.3790363 5.0074697,20.0820147 L5,19.9324792 L5,5 C5,3.9456382 5.81587779,3.08183488 6.85073766,3.00548574 L7,3 L11.5,3 Z M18.5,3 C18.7761424,3 19,3.22385763 19,3.5 L18.999,6 L21.5,6 C21.7761424,6 22,6.22385763 22,6.5 L22,7.5 C22,7.77614237 21.7761424,8 21.5,8 L18.999,8 L19,10.5 C19,10.7761424 18.7761424,11 18.5,11 L17.5,11 C17.2238576,11 17,10.7761424 17,10.5 L16.999,8 L14.5,8 C14.2238576,8 14,7.77614237 14,7.5 L14,6.5 C14,6.22385763 14.2238576,6 14.5,6 L16.999,5.999 L17,3.5 C17,3.22385763 17.2238576,3 17.5,3 L18.5,3 Z" id="形状结合" fill="#FFFFFF" fillRule="nonzero"></path></g></svg>
            <p>Add to Watch...</p>
          </button>
          <button className="flex w-[7%] justify-evenly rounded py-2 mt-5 font-bold bg-gray-700 ml-3 hover:bg-gray-500">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" ><g id="icon/分享" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M8.5,10 L7.14285714,10 L7.14285714,10 L7.14285714,19 L17.8571429,19 L17.8571429,10 L16.5,10 C16.2238576,10 16,9.77614237 16,9.5 L16,8.5 C16,8.22385763 16.2238576,8 16.5,8 L18.9285714,8 L18.9285714,8 C19.5203051,8 20,8.44771525 20,9 L20,20 C20,20.5522847 19.5203051,21 18.9285714,21 L6.07142857,21 C5.47969491,21 5,20.5522847 5,20 L5,9 C5,8.44771525 5.47969491,8 6.07142857,8 L8.5,8 C8.77614237,8 9,8.22385763 9,8.5 L9,9.5 C9,9.77614237 8.77614237,10 8.5,10 Z" id="路径" fill="#FFFFFF" fillRule="nonzero"></path><path d="M12.02,4 L12.98,4 C13.2671881,4 13.5,4.23281193 13.5,4.52 L13.5,13.5 C13.5,13.7761424 13.2761424,14 13,14 L12,14 C11.7238576,14 11.5,13.7761424 11.5,13.5 L11.5,4.52 C11.5,4.23281193 11.7328119,4 12.02,4 Z" id="矩形" fill="#FFFFFF"></path><path d="M12.5319707,2.00411342 L12.6198987,2.01706646 C12.7067945,2.03756742 12.7895557,2.08073685 12.8588387,2.14679722 L12.876344,2.16430255 L12.876344,2.16430255 L15.8756351,5.30990884 C16.0671764,5.51079419 16.0671764,5.82670084 15.8756351,6.02758619 L15.1070136,6.83370353 C14.9088325,7.04155258 14.57968,7.04938998 14.3718309,6.85120885 C14.3658577,6.84551349 14.360021,6.83967673 14.3543256,6.83370353 L12.5,4.888 L10.6456744,6.83370353 C10.4474933,7.04155258 10.1183408,7.04938998 9.91049173,6.85120885 L9.8929864,6.83370353 L9.8929864,6.83370353 L9.12436493,6.02758619 C8.9328236,5.82670084 8.9328236,5.51079419 9.12436493,5.30990884 L12.123656,2.16430255 C12.2337566,2.04883085 12.3842805,1.99509115 12.5319707,2.00411342 Z" id="形状结合" fill="#FFFFFF"></path></g></svg>
            <p>Share</p>
          </button>
          <button className="flex w-[9%] justify-evenly rounded py-2 mt-5 font-bold bg-gray-700 ml-3 hover:bg-gray-500">
            <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" ><g id="icon/下载" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><path d="M11.5,19 C11.7761424,19 12,19.2238576 12,19.5 L12,20.5 C12,20.7761424 11.7761424,21 11.5,21 L8,21 C7.44771525,21 7,20.5522847 7,20 L7,4 C7,3.44771525 7.44771525,3 8,3 L18,3 C18.5522847,3 19,3.44771525 19,4 L19,9.5 C19,9.77614237 18.7761424,10 18.5,10 L17.5,10 C17.2238576,10 17,9.77614237 17,9.5 L17,5 L9,5 L9,19 L11.5,19 Z" id="形状结合" fill="#FFFFFF" fillRule="nonzero"></path><rect id="矩形" fill="#FFFFFF" x="17" y="13" width="2" height="8" rx="0.5"></rect><path d="M17.9585149,16.5745594 L18.0464428,16.5875125 C18.1333387,16.6080134 18.2160998,16.6511829 18.2853829,16.7172432 L18.3028882,16.7347486 L18.3028882,16.7347486 L21.3021793,19.8803549 C21.4937206,20.0812402 21.4937206,20.3971469 21.3021793,20.5980322 L20.5335578,21.4041495 C20.3353767,21.6119986 20.0062242,21.619836 19.7983751,21.4216549 C19.7924019,21.4159595 19.7865652,21.4101227 19.7808698,21.4041495 L17.9265442,19.458446 L16.0722186,21.4041495 C15.8740375,21.6119986 15.544885,21.619836 15.3370359,21.4216549 L15.3195306,21.4041495 L15.3195306,21.4041495 L14.5509091,20.5980322 C14.3593678,20.3971469 14.3593678,20.0812402 14.5509091,19.8803549 L17.5502002,16.7347486 C17.6603008,16.6192769 17.8108247,16.5655372 17.9585149,16.5745594 Z" id="形状结合" fill="#FFFFFF" transform="translate(17.926544, 19.070446) rotate(-180.000000) translate(-17.926544, -19.070446) "></path></g></svg>
            <p>Dowloa...</p>
          </button>
        </div>
        <div>
          <Rows/>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>

    </>
  );
};

export default Detail;
