import React from "react";

const Info = () => {
  return (
    <div className="flex">
      <img
        src="https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
        alt=""
        className="w-6 h-6 rounded-full"
      />
      <span className="ml-4">họ và tên</span>
      <span className="ml-4  text-gray-400">
        <li>21 th 1</li>
      </span>
    </div>
  );
};

const Option = () => {
  return (
    <div className="flex justify-between mt-2 mb-4">
      <span className="text-gray-400">12 phút đọc</span>
      <div className="flex">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const title = "Viết Cho Năm 2022: Biết Về Thứ Gì Đó và Biết Thứ Gì Đó";
  return (
    <div className="w-[280px] text-white mb-6">
      <img
        src="https://images.spiderum.com/sp-images/4e5c789099a511ed81f0130d59e74ef4.png"
        alt=""
        className="h-44 w-[280px] rounded-md"
      />
      <Option />
      <h3 className="text-xl font-medium mb-4">
        {title.length > 52 ? title.slice(0, 52) + "..." : title}
      </h3>
      <Info />
    </div>
  );
};

export default Card;
