import React, { useState } from "react";
import Card from "./card";
import Card2 from "./Card2";

const data = [
  {
    uri: "https://images.spiderum.com/sp-images/026a42708ab611e98ff8d33e798018d0.png",
    timeToRead: "6 phút đọc",
    title: "Anime/manga master racing Boy",
    cataLog: "Phim",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/d54c4a20e70c11e79a70e3f8635a1288.jpg",
      name: "loveless",
      time: "9 tháng 6",
    },
  },
  {
    uri: "https://images.spiderum.com/sp-images/f1d1e2507f1b11eaa9dcb3364a58500c.jpg",
    timeToRead: "4 phút đọc",
    title: "[Anime] Ngọn đồi hoa hồng anh",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/43fbae207cd411ea8541ffe0871b33b1.jpg",
      name: "Kaze",
      time: "10 tháng 2",
    },
    cataLog: "Cảm nhận",
  },
  {
    uri: "https://vehoathinhcartoon.com/wp-content/uploads/2019/12/Manga-Rent-A-Girlfriend-%C4%90%C6%B0%E1%BB%A3c-Chuy%E1%BB%83n-Th%C3%A0nh-Anime-Ra-M%E1%BA%AFt-V%C3%A0o-Th%C3%A1ng-7-vehoathinhcartoon-com.jpg",
    timeToRead: "4 phút",
    title: "Review Anime Rent A Girl Friend",
    cataLog: "OTAKULTURE",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/e2383960b82f11e9a1e539cf43ad9036.jpg",
      name: "Huỳnh Đức Trí",
      time: "27 tháng 12 2020",
    },
  },
  {
    uri: "https://images.spiderum.com/sp-images/598a0ae0ee3011e88e239b783652d11c.jpg",
    timeToRead: "8 phút",
    title: "Các Loại Figure Anime Manga Nhật Bản",
    cataLog: "Quan điểm",
    user: {
      uri: "https://images.spiderum.com/sp-xs-avatar/e55236a0e23311e8894e8116c15c1915.jpg",
      name: "Huỳnh Đức Trí",
      time: "1 tháng 1",
    },
  },
];

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
          {data.map((item, index) => {
            return (
              <div key={index}>
                <Card data={item} />;
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="flex flex-row border-b-[1px] border-y-gray-500">
      <div className="mr-4 mt-2 pb-2 text-white text-base font-medium border-b-2 border-y-green-500">
        Dành cho bạn
      </div>
      <div className="mx-4 mt-2 text-gray-400 text-base font-medium">
        Đang theo dõi
      </div>
      <div className="mx-4 mt-2 text-gray-400 text-base font-medium">
        Mới nhất
      </div>
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
  const data = [
    {
      id: 1,
      name: "Viet Anh Tran",
      uri: "https://images.spiderum.com/sp-xs-avatar/f2eebc60eb8211eba7d9d3760b47d866.jpg",
    },
    {
      id: 2,
      name: "Limitless",
      uri: "https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg",
    },
    {
      id: 3,
      name: "Hùng Vũ",
      uri: "https://images.spiderum.com/sp-xs-avatar/1c24ea40e76311e8888b11ef6e42c1d4.png",
    },
  ];
  return (
    <div className="">
      {data.map((item, index) => {
        return (
          <div
            className="flex flex-row justify-between items-center text-white my-4 mt-6"
            key={item.id}
          >
            <div className="flex flex-row items-center">
              <img src={item.uri} alt="" className="rounded-full w-10 h-10" />
              <span className="ml-4">{item.name}</span>
            </div>
            <div className="border-[1px] border-green-500 rounded-full px-6  py-[6px] hover:bg-green-400 ">
              Theo dõi
            </div>
          </div>
        );
      })}
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
      <div className="border-[1px] rounded-2xl ">
        <div className="bg-green-500 rounded-t-2xl p-2">
          <span className="text-white text-xl font-medium ">
            Cây bút nổi bật
          </span>
        </div>
        <div className="p-3 ">
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
