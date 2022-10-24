import React from "react";

const Card = ({ count }) => {
  return (
    <div className="w-[12rem] rounded-md ">
      <div>
        <img
          src="/assets/onepiece2.webp"
          alt=""
          className="h-64 object-cover rounded-md"
        />
      </div>
      <h1 className="text-white z-50 ">One piece(Đảo hải tặc) + {count}</h1>
    </div>
  );
};

export default Card;
