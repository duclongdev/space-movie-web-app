import React from "react";
import Card from "./card";
import Card2 from "./Card2";
const One = () => {
  return (
    <div className="justify-center flex bg-gray-700">
      <div className="w-4/5">
        <div className="my-4">
          <span className="text-lg font-medium text-white">
            NỔI BẬT TRONG THÁNG
          </span>
          <span className="w-[1px]  mx-4"></span>
          <span className="text-lg  text-gray-400">xem TOP 10 bài viết</span>
        </div>
        <div className="flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="flex flex-row border-b-[1px] border-y-gray-500">
      <div className="mr-4 mt-2 pb-2 text-white text-base font-medium border-b-2 border-y-green-500 ">
        Dành cho bạn
      </div>
      <div className="mx-4 mt-2 text-white text-base font-medium">
        Đang theo dõi
      </div>
      <div className="mx-4 mt-2 text-white text-base font-medium">Mới nhất</div>
      <hr className="bg-red-500" />
    </div>
  );
};

const Paging = () => {
  const array = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="flex flex-row justify-center">
      <div className="w-10 h-10 flex items-center justify-center mx-2 rounded-full text-white text-lg bg-green-500 hover:bg-gray-400 ">
        1
      </div>
      {array.map((item, index) => {
        return (
          <div
            key={index}
            className="w-10 h-10 flex items-center justify-center mx-2 rounded-full text-white text-lg  hover:bg-gray-400"
          >
            {item}
          </div>
        );
      })}
      <div className="w-12 h-10 flex items-center justify-center mx-2 rounded-full text-white text-lg  hover:bg-gray-400">
        Tiếp »
      </div>
    </div>
  );
};

const Two = () => {
  return (
    <div className="w-3/4">
      <Header />
      <div className="flex flex-col">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
      <Paging />
    </div>
  );
};

const Info = () => {
  return (
    <div className="flex flex-row justify-between items-center text-white my-4">
      <div className="flex flex-row items-center">
        <img
          src="https://miro.medium.com/fit/c/38/38/0*QqB5to6lYDCrJtdH.jpeg"
          alt=""
          className="rounded-full w-10 h-10"
        />
        <span className="ml-4">ho va ten</span>
      </div>
      <div className="border-[1px] border-green-500 rounded-md px-4 py-[4px] hover:bg-green-400">
        Follow
      </div>
    </div>
  );
};

const Three = () => {
  const array = [
    "Khoa học viễn tưởng",
    "tranh luận",
    "khen-chê",
    "chuyển sinh",
    "top-anime",
  ];
  return (
    <div className="w-1/3 sticky top-20 h-fit">
      <div>
        <span className="text-white text-lg">
          Khám phá thêm những điều có thể bạn sẽ thích
        </span>
      </div>
      <div className="flex flex-wrap">
        {array.map((item, index) => {
          return (
            <span
              key={index}
              className="px-4 my-2 py-1 rounded-lg text-white bg-gray-600 mr-2 hover:bg-gray-500"
            >
              {item}
            </span>
          );
        })}
      </div>
      <div className="h-[1px] bg-gray-500 my-6"></div>
      <div className="">
        <span className="text-white text-lg">Những cây bút thân thiện</span>
        <div className="mt-4">
          <Info />
          <Info />
          <Info />
          <Info />
        </div>
      </div>
    </div>
  );
};

const Post = () => {
  return (
    <div className="pt-20">
      <One />
      <div className="flex justify-center">
        <div className="flex flex-row w-4/5 mt-6">
          <Two />
          <div className="w-[1px] bg-gray-500 mx-6 my-6"></div>
          <Three />
        </div>
      </div>
    </div>
  );
};

export default Post;
