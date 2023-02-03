import React from "react";

const Info = () => {
  return (
    <div>
      <div className="flex items-center">
        <img
          src="https://images.spiderum.com/sp-xs-avatar/f46ee1f0291d11ebbe6a072a0e202d86.jpg"
          alt=""
          className="w-10 h-10 rounded-full mr-4"
        />
        <span className="mr-6">Lâm Duệ Nhi</span> <li>Hôm qua</li>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
const Card2 = () => {
  return (
    <div className="flex flex-row my-6 text-white">
      <img
        src="https://images.spiderum.com/sp-thumbnails/3a6dc5e0a15811ed9e345b30468f0f20.jpg"
        alt=""
        className="w-64 h-40"
      />
      <div className="ml-6 flex flex-col justify-between">
        <div className="flex">
          <span className="text-xs">QUAN ĐIỂM - TRANH LUẬN</span>
          <li className="text-xs ml-2">2 phút đọc</li>
        </div>
        <div>
          <h2 className="text-lg font-medium">VĂN HÓA XIN LỖI VÀ CẢM ƠN</h2>
          <spam>
            Nếu vì cái tôi mà bất chấp tất cả, người bực tức là tôi, mà người
            chịu khổ lại là bạn.
          </spam>
        </div>
        <div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Card2;
